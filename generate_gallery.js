const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public', 'assets');
const imagesDir = path.join(publicDir, 'images');
const svgsDir = path.join(publicDir, 'svgs');

let html = `
<!DOCTYPE html>
<html>
<head>
    <title>Asset Gallery</title>
    <style>
        body { font-family: sans-serif; background: #f0f0f0; }
        .gallery { display: flex; flex-wrap: wrap; gap: 20px; }
        .item { background: white; padding: 10px; border-radius: 8px; text-align: center; width: 250px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
        img { max-width: 100%; max-height: 200px; object-fit: contain; background: #ccc; }
        .filename { margin-top: 10px; font-size: 12px; word-break: break-all; }
    </style>
</head>
<body>
    <h1>Images</h1>
    <div class="gallery">
`;

if (fs.existsSync(imagesDir)) {
    const images = fs.readdirSync(imagesDir);
    for (const img of images) {
        html += `
        <div class="item">
            <img src="/assets/images/${img}" alt="${img}">
            <div class="filename">images/${img}</div>
        </div>`;
    }
}

html += `
    </div>
    <h1>SVGs</h1>
    <div class="gallery">
`;

if (fs.existsSync(svgsDir)) {
    const svgs = fs.readdirSync(svgsDir);
    for (const svg of svgs) {
        html += `
        <div class="item">
            <img src="/assets/svgs/${svg}" alt="${svg}">
            <div class="filename">svgs/${svg}</div>
        </div>`;
    }
}

html += `
    </div>
</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'public', 'gallery.html'), html);
console.log('gallery.html generated successfully.');
