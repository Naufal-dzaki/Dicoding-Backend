/* 
########## pure function ##########
pure function adalah function yang tidak bergantung terhadap nilai yang berada di luar fungsi atau parameternya dan tidak mengubah nilai yangn berada diluar function
konsep pure function : 
  1. Mengembalikan nilai yang sama bila inputannya (nilai parameter) sama.
  2. Hanya bergantung pada argumen yang diberikan.
  3. Tidak menimbulkan efek samping.
*/
// pure function example
const createPersonWithAge = (age, person) => {
  return { ...person, age };
};

const person = {
  name: "Bobo",
};

const newPerson = createPersonWithAge(18, person);

console.log({
  person,
  newPerson,
});

/* 
################# Immutability ###############
immutability atau immutable berarti sebuah object yang tidak boleh diubah setelah object tersebut dibuat

*/
// immurability example
const user = {
  firstname: "Harry",
  lastName: "Protter", // ups, typo!
};

const createUserWithNewLastName = (newLastName, user) => {
  return { ...user, lastName: newLastName };
};

const newUser = createUserWithNewLastName("Potter", user);

console.log(newUser);

/*
################ Recursif ###################
Rekrusif merupakan teknik pada sebuah function yang memanggil dirinya sendiri
*/
// recursif example
const countDown = (start) => {
  console.log(start);
  if (start > 0) countDown(start - 1);
};

countDown(10);

/* 
############# Higher-Order Function ###################
Higher order function merupakan fungsi yang dapat menerima fungsi lainnya pada argumen, mengembalikan sebuah fungsi atau bahkan keduanya.

Higher-Order Function biasanya digunakan untuk:
1. mengabstraksi atau mengisolasi sebuah aksi, event, atau meangani alur asynchronous menggunakan callback, promise dan lainnya.
2. membuat utilities yang dapat digunakan di berbagai tipe data.
3. membuat teknik currying atau function composition
*/
// Higher-Order Example: membuat fungsi map versi manual
const names = ["Harry", "Ron", "Jeff", "Thomas"];

const arrayMap = (arr, action) => {
  const loopTrough = (arr, action, newArray = [], index = 0) => {
    const item = arr[index];
    if (!item) return newArray;
    return loopTrough(
      arr,
      action,
      [...newArray, action(arr[index])],
      index + 1
    );
  };

  return loopTrough(arr, action);
};

const newNames = arrayMap(names, (name) => `${name}!`);

console.log({
  names,
  newNames,
});
