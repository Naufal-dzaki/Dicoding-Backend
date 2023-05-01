/**
 ######################### Throwing Error ##########################
 notes:
 - throw adalah sebauh operator yang digunakan untuk "melemparkan" error pada program sehingga eksekusi kode akan masuk pada blok catch.
 - bisa digunakan untuk memvalidasi data dalam api
 - untuk menampilkan pesan error sesuai dengan error yang terjadi gunakan if statement
 - operator instance of digunakan untuk mendapatkan tipe error yang terjadi
 */
const json = '{ "name": "Yoda", "age": 20 }';
try {
  const user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError("'name' is required.");
  }

  errorCode;

  console.log(user.name); // Yoda
  console.log(user.age); // 20
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log(`JSON Error: ${error.message}`);
  } else if (error instanceof ReferenceError) {
    console.log(error.message);
  } else {
    console.log(error.stack);
  }
}
