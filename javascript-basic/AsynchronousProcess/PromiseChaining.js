/*
 ################### Promise Chaining ##########################
 notes: 
 - promise chaining / promise berantai 
 - promise chaining akan dijalankan berdasarkan urutan tiap-tiap fungsi promise dan jika ada promise yang terr-reject pada salah satu tahapan ia akan langsung ditangkap oleh catch
 - dalam promise chain, penting untuk diingat bahwa setiap fungsi .then() harus mengembalikan Promise baru untuk melanjutkan proses chaining karena nilai yang dikembalikan tersebut akan dibawa ke fungsi .then() selanjutnya.
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

function watchMovie() {
  withDrawMoney(10)
    .then((money) => {
      return buyCinemaTicket(money);
    })
    .then((ticket) => {
      return goInsideCinema(ticket);
    })
    .then((result) => console.log(result)) //jika dalam blok hanya terdapat satu baris kita dapat menuliskannya seperti ini
    .catch((error) => console.log(error.message));
}

watchMovie();
