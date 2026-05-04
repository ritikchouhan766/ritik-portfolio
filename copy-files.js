const fs = require('fs');
const path = require('path');

// Create directories
const dirs = [
  'd:\\ritik-chouhan-portfolio\\app',
  'd:\\ritik-chouhan-portfolio\\components',
  'd:\\ritik-chouhan-portfolio\\public'
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created ${dir}`);
  }
});

// Copy from nested structure to root
const srcBase = 'd:\\ritik-chouhan-portfolio\\ritik-portfolio';
const dstBase = 'd:\\ritik-chouhan-portfolio';

// Copy app folder
const appSrc = path.join(srcBase, 'app');
const appDst = path.join(dstBase, 'app');
if (fs.existsSync(appSrc)) {
  fs.readdirSync(appSrc).forEach(file => {
    const src = path.join(appSrc, file);
    const dst = path.join(appDst, file);
    fs.copyFileSync(src, dst);
    console.log(`Copied app/${file}`);
  });
}

// Copy components folder
const compSrc = path.join(srcBase, 'components');
const compDst = path.join(dstBase, 'components');
if (fs.existsSync(compSrc)) {
  fs.readdirSync(compSrc).forEach(file => {
    const src = path.join(compSrc, file);
    const dst = path.join(compDst, file);
    fs.copyFileSync(src, dst);
    console.log(`Copied components/${file}`);
  });
}

// Copy public folder
const pubSrc = path.join(srcBase, 'public');
const pubDst = path.join(dstBase, 'public');
if (fs.existsSync(pubSrc)) {
  fs.readdirSync(pubSrc).forEach(file => {
    const src = path.join(pubSrc, file);
    const dst = path.join(pubDst, file);
    fs.copyFileSync(src, dst);
    console.log(`Copied public/${file}`);
  });
}

console.log('Copy complete!');
