/**
 ############### Try Catch #########################
 Notes:
 - Try catch digunakan untuk menangani error pada javascript, jika terjadi error pada blok try maka block catch akan dijalankan, tetapi jika tidak terjadi error pada blok try maka blok try di abaikan
 - Property utama dalam object error yaitu:
   * name: nama error yang terjadi
   * message : pesan tentang detail error
   * stack : informasi urutan kejadian yang menyebabkan error
 */
try {
  console.log("Awal blok try"); // (1)
  errorCode; // (2)
  console.log("Akhir blok try"); // (3)
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}

/**
   ===================== try-catch-finaly ============================
   notes : 
   - Blok finally akan tetap dijalankan tanpa peduli apa pun hasil yang terjadi pada blok try-catch.
   */
try {
  console.log("Awal blok try catch finaky");
  console.log("Akhir blok try catch finaly");
} catch (error) {
  console.log("Baris ini diabaikan");
} finally {
  console.log("Akan tetap dieksekusi");
}
