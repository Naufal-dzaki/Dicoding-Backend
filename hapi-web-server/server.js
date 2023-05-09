/**
 * hapi server menerima satu parameter yaitu server option yang merupakan objek konfigurasi, kita dapat menetapkan  properti port dan host
 * server.start() dijalankan secara asynchronous, kita bisa menggunakan async await
 */
const hapi = require("@hapi/hapi");

const init = async () => {
  const server = hapi.server({
    port: 5000,
    host: "localhost",
  }); //server option

  await server.start();
  console.log(`server bejalan pada ${server.info.uri}`);
};

init();
