#!/usr/bin/env node
// Resizes + compresses photos dropped in _originals/ and writes the result to uploads/images/.
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SRC_DIR = path.join(__dirname, '..', '_originals');
const OUT_DIR = path.join(__dirname, '..', 'uploads', 'images');
const MAX_WIDTH = 2000;
const JPEG_QUALITY = 80;
const PNG_QUALITY = 80;

const VALID_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp']);

async function optimizeImage(filePath, fileName) {
  const ext = path.extname(fileName).toLowerCase();
  const outPath = path.join(OUT_DIR, fileName);

  let pipeline = sharp(filePath).resize({
    width: MAX_WIDTH,
    withoutEnlargement: true,
  });

  if (ext === '.jpg' || ext === '.jpeg') {
    pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
  } else if (ext === '.png') {
    pipeline = pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9 });
  } else if (ext === '.webp') {
    pipeline = pipeline.webp({ quality: JPEG_QUALITY });
  }

  const { size: inputSize } = fs.statSync(filePath);
  await pipeline.toFile(outPath);
  const { size: outputSize } = fs.statSync(outPath);

  const savedPct = (100 * (1 - outputSize / inputSize)).toFixed(0);
  console.log(
    `${fileName}: ${(inputSize / 1024).toFixed(0)}KB -> ${(outputSize / 1024).toFixed(0)}KB (-${savedPct}%)`
  );
}

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  const files = fs
    .readdirSync(SRC_DIR)
    .filter((f) => VALID_EXT.has(path.extname(f).toLowerCase()));

  if (files.length === 0) {
    console.log('No images found in _originals/. Drop full-size photos there and re-run.');
    return;
  }

  for (const file of files) {
    await optimizeImage(path.join(SRC_DIR, file), file);
  }

  console.log(
    `\nDone. Optimized images are in uploads/images/. Delete the source files from _originals/ once you've confirmed the output.`
  );
}

main();
