const { coffeeStock, isCoffeMachineReady } = require("./state");

console.log(coffeeStock);

const makeCoffee = (type, miligrams) => {
  if (!isCoffeMachineReady) return console.log("maaf, mesin kopi belum siap!");
  if (!coffeeStock[type])
    return console.log(`Kami tidak menjual coffee ${type}!`);
  if (coffeeStock[type] >= miligrams)
    return console.log(`Coffe ${type} berhasil dibuat!`);
  return console.log(`maaf biji kopi ${type} habis!`);
};

makeCoffee("robusta", 80);
makeCoffee("americano", 80);
makeCoffee("arabica", 200);
