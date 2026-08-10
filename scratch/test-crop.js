const sharp = require('sharp');
const fs = require('fs');

async function testCrop() {
  const inputBuffer = fs.readFileSync('public/images/arelix-full-logo.png');

  // Crop directly from new instance
  const cropped = await sharp(inputBuffer)
    .extract({ left: 30, top: 700, width: 960, height: 200 })
    .trim()
    .png()
    .toBuffer();

  fs.writeFileSync('public/images/arelix-text-logo.png', cropped);
  console.log('SUCCESS! Created public/images/arelix-text-logo.png');
}

testCrop().catch(console.error);
