import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(getFiles(file));
    } else if (file.endsWith('.astro')) { 
      results.push(file);
    }
  });
  return results;
}

const files = getFiles(path.join(__dirname, 'src/components'));

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  // Match `---` followed by newline followed by `<!-- anything -->`
  content = content.replace(/---\r?\n<!--(.*?)-->/, '---\n//$1');
  fs.writeFileSync(file, content);
}

const pages = getFiles(path.join(__dirname, 'src/pages'));
for (const file of pages) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/---\r?\n<!--(.*?)-->/, '---\n//$1');
  fs.writeFileSync(file, content);
}

console.log('Fixed all astro files');
