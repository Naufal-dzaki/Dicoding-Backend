const coffeeStock = {
  arabica: 100,
  robusta: 150,
  liberica: 200,
};

const isCoffeMachineReady = true;

module.exports = { coffeeStock, isCoffeMachineReady };

/* 
notes : 
- jika ingin melakukan export untuk 1 buah nilai kita bisa melakukannya dengan "module.exports = coffeeStock"
- jika ingin melakukan lebih dari 1 buah export kita bisa melakukan dengan "module.exports = {coffeeStock, isMachineReady} dan untuk melakukan import terhadap module yang memiliki nilai lebih dari 1 kita bisa melakukannya dengan "const {coffeeStock, isMachineReady} = require(./state.js)"
- nilai export dan import untuk module yang memiliki nilai lebih dari satu harus sama
- jika kita melakukan module.exports 2 kali dalam file yang sama maka nilai export akan di ambil pada module.exports yang terakhir
*/
