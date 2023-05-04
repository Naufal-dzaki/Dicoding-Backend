/**
 ################ Promise Static Method ###########################
 notes:
 - promise memiliki beberapa static method yang dapat digunakan untuk mempermudah pengguna dalam berbagai kasus seperti Promise.all, Promise.race, Promise.allSettled, Promise.any
 */

/*
    ======================== Promise.all ========================
    notes: 
    - Promise.all merupakan sebuah promise static method yang digunakan untuk mengeksekusi banyak promise secara paralel yang akan mengembalikan sebauh promise baru dan membawa nilai yang di-resolve dalam masing-masing promise yang diletakkan pada array argumen
    - Promise.all akan membawa nilai baru yang berisi nilai-nilai yang dikembalikan oleh ketiga promise
    - jika terdapat rejection pada salah satu promise, Promise.all akan langsung menghasilkan rejected tanpa mengembalikan nilai promise yang statusnya fullfiled
    */
const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error("ups")), 2000)
);
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.all([promise1, promise2, promise3])
  .then((values) => console.log(values))
  .catch((error) => console.log(error.message)); // ups

/**
     ========================== Promise.race =================================
     notes: 
     - Promise.race() merupakan promise static method yang mengeksekusi beberaa promise secara paralel.
     - Promise.race() akan mengembalikan nilai promise yang paling cepat menyelesaikan eksekusinya
     - jika promise yang paling cepat menyelesaikan proses bernilai rejection, ia akan mengembalikan rejection
     - . Jika rejection tidak kalah cepat dengan proses lain yang nilainya fulfilled, ia akan tetap mengembalikan nilai resolved tercepat.
     */
const promise4 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise5 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise6 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.race([promise4, promise5, promise6]).then((value) =>
  console.log(value)
); // 1 setelah 1 detik

/**
     ======================= Promise.allSettled ==========================
     notes:
     - Promise.allSettled bekerja mirip dengan Promise.all, nemun mengembalikan hasil dari promise dalam bentuk array of objecet dengan format : 
        {
          status: 'fulfilled' | 'rejected',
          value: 'value of the Promise',
          reason: 'error of the Promise',
        }
     - Promise.allSettled akan mengembalikan seluruh nilai promise yang dijalankan, baik yang berstatus fullfilled maupun rejected
     */
const promise7 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise8 = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error("Error")), 2000)
);
const promise9 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.allSettled([promise7, promise8, promise9]).then((results) =>
  console.log(results)
);
// [{status: "fulfilled", value: 1}, {status: "rejected", reason: Error}, {status: "fulfilled", value: 3}] setelah 3 detik

/**
   ================= Promise.any =====================
   notes:
   - Promise.any() adalah promise static method yang dieksekusi secara paralel dan akan mengembalikan nilai tercepat yang memiliki status fulfilled, jika semua mengembalikan status rejected maka method ini akan mengembalikan pesan "All Promise Were Rejected"
   */
// fulfilled sample
const promiseResolve1 = new Promise((resolve, reject) =>
  setTimeout(() => resolve("1"), 1000)
);
const promiseResolve2 = new Promise((resolve, reject) =>
  setTimeout(() => resolve("2"), 2000)
);
const promiseResolve3 = new Promise((resolve, reject) =>
  setTimeout(() => resolve("3"), 3000)
);

Promise.any([promiseResolve1, promiseResolve2, promiseResolve3])
  .then((value) => console.log(value)) // 1
  .catch((error) => console.log(error.message));

// rejected sample
const promiseReject1 = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error("1")), 1000)
);
const promiseReject2 = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error("2")), 2000)
);
const promiseReject3 = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error("3")), 3000)
);

Promise.any([promiseReject1, promiseReject2, promiseReject3])
  .then((value) => console.log(value))
  .catch((error) => console.log(error.message)); // All Promises were rejected
