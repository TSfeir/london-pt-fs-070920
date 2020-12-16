const fs = require("fs");

/**
 * Exercise 1
 *
 * create a function {createJsonFileWithContent} that will take
 * {data} and {fileName} as arguments, stringify {data}
 * and store it in the json file {./data/[fileName].json}
 * synchronously.
 *
 * NOTES:
 * 1. if {filename} not provided, log an error "File name is missing"
 * 2. if path is incorrect, log an error "No such file or directory"
 */

const createJsonFileWithContent = (data, fileName) => {
  if (fileName) {
    const myJSON = JSON.stringify(data);

    try {
      fs.writeFileSync(`./data/${fileName}.json`, myJSON);
    } catch (error) {
      console.log("No such file or directory");
    }
  } else {
    console.log("File name is missing");
  }
};

/**
 * Exercise 2
 *
 * create a function {readJsonFile} that will take a {fileName} that
 * exist in {./data/} as an argument,
 * read, parse it and return file content as an object synchronously.
 * If file does not exist, return
 *
 * NOTES:
 * 1. if path is incorrect, log an error "No such file or directory"
 */

const readJsonFile = (fileName) => {
  try {
    const data = fs.readFileSync(`./data/${fileName}.json`);
    return JSON.parse(data);
  } catch (error) {
    console.log("No such file or directory");
    return null;
  }
};

/**
 * Exercise 3
 *
 * create a function {updateFileWithContent} that will take
 * {data} that need to be added/modified and {fileName} as arguments,
 * and add it the file {./data/[fileName].json} synchronously.
 */

const updateFileWithContent = (data, fileName) => {
  try {
    const fileRead = readJsonFile(fileName);
    const newFileContent = { ...fileRead, ...data };
    const newFile = createJsonFileWithContent(newFileContent, fileName);
    return newFile;
  } catch (error) {
    console.log(
      `There was an error adding the ${JSON.stringify(data)} to ${fileName}.`
    );
  }
};

/**
 * Exercise 4
 *
 * create a function {getFileSize} that will take {fileName} as argument and return
 * file size in bytes.
 */

const getFileSize = (fileName) => {
  const stats = fs.statSync(`./data/${fileName}.json`);
  const fileSizeInBytes = stats.size;
  return fileSizeInBytes;
};

/**
 * Exercise 5
 *
 * create a function {cloneJsonFile} which will take a {src} and {destination}
 * as arguments and create a clone file.
 *
 * NOTE:
 *
 * if you get an error, log error message
 */

const cloneJsonFile = (src, destination) => {
  try {
    const copiedFile = fs.copyFileSync(src, destination);
    console.log(`${src} was copied to ${destination}`);
    return copiedFile;
  } catch (error) {
    console.log("There was an error.");
  }
};

/**
 * Exercise 6
 *
 * create a function {deleteFile} which will take a {src}
 * as an argument and delete a file.
 *
 * NOTE:
 *
 * if you get an error, log error message
 */

const deleteFile = (src) => {
  try {
    const fileToDelete = fs.unlinkSync(src);
    console.log(`File ${src} is now deleted.`);
    return fileToDelete;
  } catch (error) {
    console.log("There was an error trying to delete this file.");
  }
};
