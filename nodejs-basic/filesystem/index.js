const fs = require("fs");

//cara 1 menggunakan file read callback
const fileReadCallback = (error, data) => {
  if (error) {
    console.log("Gagal untuk membaca berkas!");
    return;
  }
  console.log(data);
};
fs.readFile("notes.txt", "UTF-8", fileReadCallback);

//cara 2 menggunakan versi synchronus / readFileSync
const data = fs.readFileSync("notes.txt", "UTF-8");
console.log(data);
