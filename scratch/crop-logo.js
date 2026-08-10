const sharp = require('sharp');
const fs = require('fs');

async function processLogo() {
  const fullLogoBuf = fs.readFileSync('public/images/arelix-full-logo.png');

  const { data, info } = await sharp(fullLogoBuf)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;

  // Exact text bounds: y from 723 to 880 (completely clean without any emblem tip)
  const cropYMin = 723;
  const cropYMax = 880;
  const cropXMin = 40;
  const cropXMax = 985;

  const cropW = cropXMax - cropXMin;
  const cropH = cropYMax - cropYMin;

  const darkData = Buffer.alloc(cropW * cropH * 4);
  const whiteData = Buffer.alloc(cropW * cropH * 4);

  for (let y = 0; y < cropH; y++) {
    for (let x = 0; x < cropW; x++) {
      const srcY = cropYMin + y;
      const srcX = cropXMin + x;

      const srcIdx = (srcY * width + srcX) * 4;
      const dstIdx = (y * cropW + x) * 4;

      const r = data[srcIdx];
      const g = data[srcIdx + 1];
      const b = data[srcIdx + 2];
      const a = data[srcIdx + 3];

      // Copy dark/original pixel
      darkData[dstIdx] = r;
      darkData[dstIdx + 1] = g;
      darkData[dstIdx + 2] = b;
      darkData[dstIdx + 3] = a;

      // For white logo: convert black/dark pixels to pure white
      whiteData[dstIdx + 3] = a;
      if (a > 15) {
        const isRed = r > 130 && g < 80 && b < 80;
        if (isRed) {
          whiteData[dstIdx] = r;
          whiteData[dstIdx + 1] = g;
          whiteData[dstIdx + 2] = b;
        } else {
          whiteData[dstIdx] = 255;
          whiteData[dstIdx + 1] = 255;
          whiteData[dstIdx + 2] = 255;
        }
      } else {
        whiteData[dstIdx] = 0;
        whiteData[dstIdx + 1] = 0;
        whiteData[dstIdx + 2] = 0;
      }
    }
  }

  // Trim transparent padding using sharp
  const darkLogoBuf = await sharp(darkData, {
    raw: { width: cropW, height: cropH, channels: 4 }
  }).trim().png().toBuffer();

  const whiteLogoBuf = await sharp(whiteData, {
    raw: { width: cropW, height: cropH, channels: 4 }
  }).trim().png().toBuffer();

  fs.writeFileSync('public/images/arelix-text-logo.png', darkLogoBuf);
  fs.writeFileSync('public/images/arelix-text-logo-white.png', whiteLogoBuf);

  console.log('SUCCESS! Updated public/images/arelix-text-logo.png & public/images/arelix-text-logo-white.png');
}

processLogo().catch(console.error);
