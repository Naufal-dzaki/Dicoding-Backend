const { EventEmitter } = require("events");

const myEventEmitter = new EventEmitter();

const birthdayEventListener = (name) => {
  console.log(`Happy Birthday ${name}!`);
};

myEventEmitter.on("someone-birthday", birthdayEventListener);
myEventEmitter.emit("someone-birthday", "naufal");
