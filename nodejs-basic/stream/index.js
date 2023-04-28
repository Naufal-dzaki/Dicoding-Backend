const fs = require("fs");

const readableStream = fs.createReadStream("./notes.txt", {
  highWaterMark: 15,
});
const writeableStream = fs.createWriteStream("./output.txt");

readableStream.on("readable", () => {
  try {
    writeableStream.write(`${readableStream.read()} \n`);
  } catch (error) {}
});

readableStream.on("end", () => {
  writeableStream.end();
});
