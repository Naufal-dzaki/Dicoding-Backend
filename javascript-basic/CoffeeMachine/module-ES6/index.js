import { coffeeStock as stock, isCoffeMachineReady } from "./state.js";

const makeCoffee = (type, miligrams) => {
  if (!isCoffeMachineReady) return console.log("maaf mesin belum siap!");
  if (!stock[type])
    return console.log(`maaf kami tidak menjual coffe ${type}!`);
  if (stock[type] >= miligrams)
    return console.log(`coffee ${type} berhasil dibuat!`);
  return console.log(`maaf stock biji kopi ${type} habis`);
};

makeCoffee("arabica", 20);
makeCoffee("americano", 200);
makeCoffee("robusta", 500);

/*
notes : 
- jika ingin menggunakan import dan export ex6 kita harus mengaktifkan module es6 terlebih dahulu dengan cara menambahkan properti "type" dengan nilai "module" pada package.json atau kita bisa ubah ekstensi file dengan .mjs
- jika ingin import module yang memiliki 1 nilai bisa dilakukan dengan cara "import <name> from '<module path>'"
- nama pada module yang memiliki 1 nilai bisa kita ubah sesuai keinginan, hal tersebut tidak akan terpengaruh karena module tersebut hanya memiliki satu nilai, contoh "import stock from ./ExportModule.js"
- jika ingin import module yang memiliki nilai lebih dari 1 dapat dilakukan dengan cara "import { moduleName1, moduleName 1 } from '<module path>'"
- jika ingin merubah nama module sesuai dengan keinginan kita dapat menggunanan 'as', contoh "import {coffeStock as stock, isMachineReady} from './ExportModule'"
*/
