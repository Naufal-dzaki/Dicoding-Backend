const showOwnPropertyNames = (args) =>
  console.log(Object.getOwnPropertyNames(args));

// showOwnPropertyNames(global);
// showOwnPropertyNames(process);
// showOwnPropertyNames(console);
// showOwnPropertyNames(setTimeout);
// showOwnPropertyNames(clearTimeout);
// showOwnPropertyNames(setInterval);
// showOwnPropertyNames(clearInterval);
showOwnPropertyNames(module);
showOwnPropertyNames(require);
