const fs = require("node:fs");
const path = require("node:path");
const logDir = "./logs";

function checkIfDirectoryExist() {
  if (!fs.existsSync(logDir)) {
    console.error("Directory doesnt exist!");
  }
}

function readFiles() {
  fs.readdir(logDir, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }
    files.forEach((file) => {
      console.log(file);
    });
    deleteFiles(files);
  });
}

function deleteFiles(files) {
  files.forEach((file) => {
    const file_path = path.join(logDir, file);
    fs.unlink(file_path, (error) => {
      if (error) throw new Error("Could not delete file");
      console.log(`Deleted files... ${file_path}`);
    });
  });
  deleteDirectory();
}

function deleteDirectory() {
  fs.rmdir(logDir, (error) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("Directory removed!");
  });
}

checkIfDirectoryExist();
readFiles();
