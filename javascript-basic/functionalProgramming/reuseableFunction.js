/*
################## Reusable function ##########################
- Reuseable function atau function yang dapat digunakan kembali
- Cara membuat Reuseable function dengan cara menerapkan konsep didalam paradigma functional programming
*/
//contoh penggunaan Reuseable function dari function yang telah di sediakan js

/*
========== Array Map ======================
Array Map adalah function yang mengembalikan array baru yang bisa digunakan untuk memodifikasi setiap data dalam sebauh array
*/
const newArray = ["Harry", "Ron", "Jeff", "Thomas"].map((name) => {
  return `${name}!`;
});

console.log(newArray);

/*
================= Array Filter =====================
array filter berguna untuk  melakukan proses penyaringan (filtering) terhadap nilai array yang ada dan mengembalikan nilai true jika syarat yang diminta benar
*/
const evenNumber = [1, 2, 3, 4, 5, 6, 7, 8].filter((item) => item % 2 === 0);
console.log(evenNumber);

/**
 ============ array Reduce ==================
- array reducer adalah sebuah function yang digunakan untuk mengeksekusi sebauh method reducer yang menembalikan output 1 nilai saja.
- function ini dapat diolah untuk memanipulasi data current Value dan menyimpan pada accumulator
 */
const students = [
  {
    name: "Harry",
    score: 60,
  },
  {
    name: "James",
    score: 88,
  },
  {
    name: "Ron",
    score: 90,
  },
  {
    name: "Bethy",
    score: 75,
  },
];

const totalScore = students.reduce((acc, student) => acc + student.score, 0); // currentvalue merupakan argumen student dan accumulator merupakan argumen acc

console.log(totalScore);

/**
 ===================== array Some =========================
 array some adalah sebuah function yang digunakan untuk mencari tahu apakah ada sesuatu yang sesuai dengan kriteria tertentu pada sebuah array yang mengembalikan nilai true jika ada dan mengembalikan nilai false jika tidak ada
 */
const array = [1, 2, 3, 4, 5];
const even = array.some((element) => element % 2 === 0);

console.log(even);

/**
  ========================== array find ======================
  array find adalah sebauh function yang digunakan untuk menemukan sebuah data dalam array yang sesuai dengan kriteria tertentu, akan mengembalikan data/elemen yang ditemukan pertama dan jika tidak ada akan mengembalikan nilai undifined
  */
const students2 = [
  {
    name: "Harry",
    score: 60,
  },
  {
    name: "James",
    score: 88,
  },
  {
    name: "Ron",
    score: 90,
  },
  {
    name: "Bethy",
    score: 75,
  },
];

const findJames = students2.find((student) => student.name === "James");
console.log(findJames);

/**
 =============== array sort ===================
 array sort adalah sebuah function yang digunakan untuk mengurutkan sebuah nilai dalam array dengan kondisi tertentu yang secara default mengurutkan dengan bentuk tipe data string.
 - untuk membandingkan angka callback function dalam .sort() akan membandingkan 2 nilai yang akan menghasilkan 3 result yaitu negatif (-), 0, dan positif (+).
 - .sort((a, b) => a - b) : - Jika, negative maka `a` akan diletakkan sebelum `b`
                            - Jika, positive maka `b` akan diletakkan sebelum `a`
                            - Jika, 0 maka tidak ada perubahan posisi.
 */
const array1 = [1, 30, 4, 1000];
const sorting = array1.sort((a, b) => a - b);
console.log(sorting);

/**
 ==================== array every ====================
 array every adalah sebuah function yang berguna untuk mengecheck semua nilai dalam array apakah sesuai dengan kriteria atau tidak dan mengembalikan true jika sesuai dengan kriteria dan fase jika tidak sesuai.
 */
const scores = [70, 85, 90];
const minimumScore = 65;

const examPassed = scores.every((score) => score >= minimumScore);
console.log(examPassed);

/**
 ================== array foreach ======================
 array foreach adalah sebuah array yang berfungsi untuk memanggil fungsi callback pada setiap iterasi index array dan tidak mengembalikan nilai apapun. secara harfiah hanya berfungsi untuk memanggil fungsi callback-nya saja, tak lebih dari itu.
 */
const names = ["Harry", "Ron", "Jeff", "Thomas"];

names.forEach((name) => {
  console.log(`Hello, ${name}!`);
});
