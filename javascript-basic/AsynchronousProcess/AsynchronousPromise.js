/* ################## Asynchronous promise ##################### 
 notes:
 - promise merupakan sebuah object yang mempresentasikan operasi asynchronous 
 - promise memiliki beberapa kondisi, yaitu pending, fullfilled, rejected : 
   - pending merupakan kondisi ketika promise sedang berjalan
   - fullfilled merupakan kondisi ketika promise terpenuhi
   - rejected merupakan kondisi ketika promise yang gagal terpenuhi
 - object promise dibuat dengan memanggil contructor promise (new Promise())
 - ketika memanggil promise kita harus memberi argumen berupa fungsi (biasanya arraw function) yang memiliki akses pada argumen resolve dan reject
 - resolve akan hasil dari data dan reject akan membawa error ketika terjadi kesalahan
 - nilai yang dibawa oleh object resolve dapat kita ambil melalui fungsi .then
 - nilai yanng dibawa oleh object reject dapat kita ambil melalui fungsi .catch
*/

function getUsers(isOffline) {
  // return a promise object
  return new Promise((resolve, reject) => {
    // simulate network delay
    setTimeout(() => {
      const users = ["John", "Jack", "Abigail"];

      if (isOffline) {
        reject(new Error("cannot retrieve users due offline"));
        return;
      }

      resolve(users);
    }, 3000);
  });
}

getUsers(false)
  .then((users) => console.log(users)) //memanggil nilai yang ada dalam object resolve
  .catch((err) => console.log(err.message)); //mamanggil nilai yang ada dalam object reject

getUsers(true)
  .then((users) => console.log(users))
  .catch((err) => console.log(err.message));
