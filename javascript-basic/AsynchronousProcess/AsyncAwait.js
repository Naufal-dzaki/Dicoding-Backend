/**
 ################### Async Await ##########################
 notes: 
 - async await adalah sintaks yang memungkinkan kita untuk menulis kode dalam menangani proses asynchronous promise-based dengan cara yang sama seperti synchronous
 - dalam penanganan errornya kita bisa menggunakan try catch seperti proses synchronous
 - kita perlu menambahkan keyword async pada awal fungsi
 - sintaks await digunakan untuk memberi tahu js untuk menunggu proses promise selesai sebelum mengeksekusi kode baris selanjutnya
 */

function withDrawMoney(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (amount > 100) {
        reject(new Error("Not enough money to withdraw"));
      }

      resolve(amount);
    }, 1000);
  });
}

function buyCinemaTicket(money) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (money < 10) {
        reject(new Error("not enough money to buy ticket"));
      }

      resolve("ticket-1");
    }, 1000);
  });
}

function goInsideCinema(ticket) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!ticket) {
        reject(new Error("no ticket"));
      }

      resolve("enjoy the movie");
    }, 1000);
  });
}

async function watchMovie() {
  try {
    const money = await withDrawMoney(10);
    const ticket = await buyCinemaTicket(money);
    const result = await goInsideCinema(ticket);

    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}

watchMovie();
