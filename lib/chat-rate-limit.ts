interface VisitorUsage {
  minute: number[];
  hour: number[];
  lastRequestAt: number;
}

const globalChatUsage = globalThis as typeof globalThis & {
  arelixChatUsage?: Map<string, VisitorUsage>;
};

const usageStore = globalChatUsage.arelixChatUsage ?? new Map<string, VisitorUsage>();
globalChatUsage.arelixChatUsage = usageStore;

const MINUTE_LIMIT = 8;
const HOUR_LIMIT = 35;
const COOLDOWN_MS = 2_000;

export function getVisitorId(request: Request) {
  const forwarded = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
  return forwarded || request.headers.get('x-real-ip') || 'unknown';
}

export function checkChatRateLimit(visitorId: string) {
  const now = Date.now();
  const existing = usageStore.get(visitorId) ?? { minute: [], hour: [], lastRequestAt: 0 };
  const minute = existing.minute.filter((timestamp) => now - timestamp < 60_000);
  const hour = existing.hour.filter((timestamp) => now - timestamp < 3_600_000);

  if (now - existing.lastRequestAt < COOLDOWN_MS) {
    return { allowed: false, retryAfter: 2, reason: 'Please wait a moment before sending another message.' };
  }

  if (minute.length >= MINUTE_LIMIT) {
    const retryAfter = Math.max(1, Math.ceil((60_000 - (now - minute[0])) / 1000));
    return { allowed: false, retryAfter, reason: 'Too many messages. Please try again in a minute.' };
  }

  if (hour.length >= HOUR_LIMIT) {
    const retryAfter = Math.max(1, Math.ceil((3_600_000 - (now - hour[0])) / 1000));
    return { allowed: false, retryAfter, reason: 'Hourly chat limit reached. Please try again later.' };
  }

  minute.push(now);
  hour.push(now);
  usageStore.set(visitorId, { minute, hour, lastRequestAt: now });

  if (usageStore.size > 5_000) {
    for (const [key, value] of usageStore) {
      if (now - value.lastRequestAt > 3_600_000) usageStore.delete(key);
    }
  }

  return { allowed: true, retryAfter: 0, reason: '' };
}
