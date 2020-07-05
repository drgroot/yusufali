const fs = require('fs');
const path = require('path');

const extensions = ['.html', '.pug', '.ejs'];
const getAllFiles = (dirPath, arrayOfFiles = []) => {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
      const f = getAllFiles(path.join(dirPath, file));
      for (const i of f) {
        arrayOfFiles.push(i);
      }
    } else {
      arrayOfFiles.push(path.join(dirPath, file));
    }
  });

  return arrayOfFiles;
};

module.exports = {
  purge: {
    enabled: (process.env.NODE_ENV === 'production'),
    mode: 'all',
    content: getAllFiles('./src').filter((f) => extensions.includes(path.extname(f))),
  },
  theme: {},
  variants: {},
  plugins: [],
};
