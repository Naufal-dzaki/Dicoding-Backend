const fs = require("fs");

const readableStream = fs.createReadStream("./notes.txt", {
  highWaterMark: 10, //menetapkan ukuran buffer menjadi 10 bytes/karakter (nilai defaultnya 16384 bytes (16kb))
});

readableStream.on("readable", () => {
  try {
    process.stdout.write(readableStream.read()); // jika ingin melihat jelas membaca dari bagian per bagian bisa menggunakan pemisah ...write(`[${readableStream.read()]`})
  } catch (error) {
    // catch the error when the chunk cannot be read.
  }
});

readableStream.on("end", () => {
  console.log("done");
});
