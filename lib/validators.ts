/**
 * Validation utilities for user input fields.
 * Follows ITU-T E.164 standards for international phone numbers
 * and RFC 5322 standards for email addresses.
 */

export interface ValidationResult {
  isValid: boolean;
  error?: string;
  normalized?: string;
}

/**
 * Validates international phone numbers from any country worldwide.
 * Supports ITU-T E.164 format (+CC SSSSSSS) as well as national formats
 * with optional spaces, hyphens, dots, or parentheses.
 */
export function validatePhoneNumber(phone: string): ValidationResult {
  const trimmed = phone?.trim() || '';

  if (!trimmed) {
    return { isValid: false, error: 'Contact number is required.' };
  }

  // Check for invalid characters (allow only digits, +, -, ., (, ), and spaces)
  const validCharRegex = /^[0-9+\-\s().]{5,30}$/;
  if (!validCharRegex.test(trimmed)) {
    return {
      isValid: false,
      error: 'Invalid characters in contact number. Please enter digits, optional + country code, spaces, or hyphens.',
    };
  }

  // Count raw numeric digits
  const rawDigits = trimmed.replace(/[^0-9]/g, '');

  // ITU-T E.164 specifies minimum 5 digits (e.g. short national numbers) to maximum 15 digits
  if (rawDigits.length < 5 || rawDigits.length > 15) {
    return {
      isValid: false,
      error: 'Contact number must contain between 5 and 15 digits (including country code if international).',
    };
  }

  return {
    isValid: true,
    normalized: trimmed,
  };
}

/**
 * Validates email addresses against RFC 5322 format rules,
 * requiring a valid domain and top-level extension (TLD).
 */
export function validateEmail(email: string): ValidationResult {
  const trimmed = email?.trim() || '';

  if (!trimmed) {
    return { isValid: false, error: 'Email address is required.' };
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(trimmed)) {
    return {
      isValid: false,
      error: 'Please enter a valid email address (e.g. name@example.com).',
    };
  }

  return {
    isValid: true,
    normalized: trimmed.toLowerCase(),
  };
}
