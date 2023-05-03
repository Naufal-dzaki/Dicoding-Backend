/**
 ###################  Asynchronous handling dengan callback #############################
 notes:
 - callback merupakan sebuah fungsi yang disisipkan pada argumen fungsi asynchronous dan akan dipanggil  ketia proses dinyatakan selesai
 - Callback merupakan salah satu implementasi dari konsep High-Order Function yang sudah kita bahas pada modul Functional Programming.
 - proses yang dilakukan secara asynchronous berpotensi terjadi error,  dengan dasar tersebut fungsi callback selain membawa argumen data, juga membawa argumen error.
 - argumen error hanya akan memiliki nilai ketika proses asychronous gagal  atau mengalami gangguan
 - convention (habbit) pada node js menetapkan bahwa argumen callback selalu di letakkan di terakhir
 */
function getUsers(isOffline, callback) {
  // simulate network delay
  setTimeout(() => {
    const users = ["John", "Jack", "Abigail"];

    if (isOffline) {
      callback(new Error("cannot retrieve users due offline"), null);
      return;
    }

    callback(null, users);
  }, 3000);
}

function usersCallback(error, users) {
  if (error) {
    console.log("process failed:", error.message);
    return;
  }
  console.log("process success:", users);
}

getUsers(false, usersCallback); // process success: ['John', 'Jack', 'Abigail']
getUsers(true, usersCallback); // process failed: cannot retrieve users due offline
getUsers(false, (error, users) => {
  if (error) {
    console.log("Process failed: ", error.message);
    return;
  }
  console.log("process success :", users);
}); // menggunkana callback function dengan arraow function

/**
 ===================== Callback Hell =================
 notes: 
 - callback hell adalah proses nested asynchronous callback (asynchronous callback bersarang) yang membutuhkan satu sama lain.
 - callback hell / pryramid of dom merupakan masalah yang berhubungan dengann readablitiy code / membuat code susah untuk dibaca.
 - untuk mengatasi callback hell atau pyramid of dom bisa menggunakan proses asynchronous prpomise
 */

function getUser(id, callback) {
  setTimeout(() => {
    if (!id) {
      callback(new Error("User ID is required"), null);
    }

    callback(null, { id, name: "John Doe", location: "Jakarta" });
  }, 1000);
}

function getWeather(location, callback) {
  setTimeout(() => {
    if (!location) {
      callback(new Error("Location is required"), null);
    }

    callback(null, { weather: "Sunny", temperature: 30 });
  }, 1000);
}

function getUserWeather(userId, callback) {
  getUser(userId, (error, user) => {
    if (error) {
      callback(error, null);
    }

    getWeather(user.location, (error, weather) => {
      if (error) {
        callback(error, null);
      }

      callback(null, { ...user, ...weather });
    });
  });
}

getUserWeather(1, (error, userWeather) => {
  if (error) {
    console.log(error);
  }

  console.log(userWeather); // { id: 1, name: 'John Doe', location: 'Jakarta', weather: 'Sunny', temperature: 30 }
});
