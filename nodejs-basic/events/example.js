const { EventEmitter } = require("events");

const myEventEmitter = new EventEmitter();

const makeCoffee = (name) => {
  console.log(`coffee ${name} telah dibuat!`);
};

const makeBill = (price) => {
  console.log(`Bill sebesar ${price} telah dibuat!`);
};

const onCoffeeOrderedListener = ({ name, price }) => {
  makeCoffee(name);
  makeBill(price);
};

myEventEmitter.on("coffee-order", onCoffeeOrderedListener); //myEventEmitter.on untuk mendeklarasikan function yang akan di trgger oleh eventEmitter ketika eventEmiitter dipanggil

myEventEmitter.emit("coffee-order", { name: "tubruk", price: 15000 }); //untuk melakukan pemanggilan terhadap event emitter
