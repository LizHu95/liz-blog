const fs = require("fs");
const path = require("path");
const archiver = require("archiver");

const zipName = "blog.zip";
const homeDir = __dirname;
const target = ["services"];

const output = fs.createWriteStream(path.resolve(homeDir, zipName));
const archive = archiver("zip", { zlib: { level: 9 } });

archive.on("error", function (err) {
  throw err;
});

output.on("close", function () {
  console.log(`
      ———————————————————————压缩完成———————————————————————
      生成文件大小${(archive.pointer() / 1024 / 1024).toFixed(1)}MB
      请在当前项目路径下寻找 ${zipName} 文件，系统路径为 ${path.resolve(homeDir, zipName)}
      `);
});

archive.pipe(output);
for (const i of target) {
  archive.directory(i, i);
}
archive.finalize();
