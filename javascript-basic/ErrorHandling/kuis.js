// TODO 1
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "validationError";
  }
}
// TODO 2
const validateNumberInput = (f, s, t) => {
  if (typeof f !== "number")
    throw new ValidationError("Argumen pertama harus number");
  if (typeof s !== "number")
    throw new ValidationError("Argumen kedua harus number");
  if (typeof t !== "number")
    throw new ValidationError("Argumen ketiga harus number");
};

const detectTriangle = (a, b, c) => {
  // TODO 3
  try {
    validateNumberInput(a, b, c);
  } catch (error) {
    if (error instanceof SyntaxError) {
      return error.message;
    } else if (error instanceof ValidationError) {
      return error.message;
    } else if (error instanceof ReferenceError) {
      return error.message;
    } else {
      return error.stack;
    }
  }

  if (a === b && b === c) {
    return "Segitiga sama sisi";
  }

  if (a === b || a === c || b === c) {
    return "Segitiga sama kaki";
  }

  return "Segitiga sembarang";
};

console.log(detectTriangle("Asd", 2, 3));
console.log(detectTriangle(1, 2, "Sd"));
console.log(detectTriangle(1, undefined, 3));
console.log(detectTriangle(1, 5, 3));
