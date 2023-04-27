const initialMemoryUsage = process.memoryUsage().heapUsed;
const yourName = process.argv[2];
const environment = process.env.NODE_ENV;

for (let index = 0; index < 10000; index++) {
  //proses looping akan membuat memory naik
}

const currentMemoryUsage = process.memoryUsage().heapUsed;

console.log(`Hai, ${yourName}`);
console.log(`Mode environment ${environment}`);
console.log(
  `penggunaan memory yang awalnya ${initialMemoryUsage} menjadi ${currentMemoryUsage} setelah terjadi looping`
);

//run on cmd : "node index.js parameter/name"
