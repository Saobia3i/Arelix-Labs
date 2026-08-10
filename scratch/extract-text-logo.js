const sharp = require('sharp');
const path = require('path');

async function extractTextLogo() {
  const fullLogoPath = path.join(__dirname, '../public/images/arelix-full-logo.png');
  const outputPathDarkText = path.join(__dirname, '../public/images/arelix-text-logo.png');
  const outputPathWhiteText = path.join(__dirname, '../public/images/arelix-text-logo-white.png');

  // Extract text region (y: 715 to 878)
  const croppedBuffer = await sharp(fullLogoPath)
    .extract({ left: 40, top: 715, width: 944, height: 164 })
    .trim()
    .toBuffer();

  // Save original transparent text logo
  await sharp(croppedBuffer).toFile(outputPathDarkText);
  console.log('Saved dark text logo:', outputPathDarkText);

  // Create white-text version for Footer (where background is dark red)
  const { data, info } = await sharp(croppedBuffer)
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3];

    if (a > 15) {
      // Check if pixel is dark/black (R, G, B low and not red)
      const isRed = r > 130 && g < 80 && b < 80;
      if (!isRed) {
        // Convert black/dark pixels to bright white
        data[i] = 255;
        data[i + 1] = 255;
        data[i + 2] = 255;
      }
    }
  }

  await sharp(data, {
    raw: {
      width: info.width,
      height: info.height,
      channels: info.channels,
    },
  })
    .png()
    .toFile(outputPathWhiteText);

  console.log('Saved white text logo:', outputPathWhiteText);
}

extractTextLogo().catch(console.error);
