const sharp = require('sharp');

async function analyzeRows() {
  const { data, info } = await sharp('public/images/arelix-full-logo.png')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const width = info.width;
  const height = info.height;

  for (let y = 500; y < 879; y++) {
    let count = 0;
    for (let x = 0; x < width; x++) {
      if (data[(y * width + x) * 4 + 3] > 30) count++;
    }
    console.log(`Row ${y}: ${count} non-transparent pixels`);
  }
}

analyzeRows();
