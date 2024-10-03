const fs = require("node:fs");
const path = require("node:path");
const logDir = "./logs";

function checkIfDirectoryExist() {
  if (!fs.existsSync(logDir)) {
    console.log("Directory Created");
    fs.mkdirSync(logDir);
    write();
  }
  console.log("Directory already exists!");
}

function write() {
  // contents of file
  let count = 10;
  const content = " Hello World!";
  for (let i = 1; i <= count; i++) {
    fs.writeFile(`${logDir}/log${i}.txt`, content, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  }
  console.log(`${count} files written`);
}

function read() {
  fs.readdir(logDir, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }
    files.forEach((file) => {
      console.log(file);
    });
  });
}

checkIfDirectoryExist();
read();
