/**
 * hapi server menerima satu parameter yaitu server option yang merupakan objek konfigurasi, kita dapat menetapkan  properti port dan host
 * server.start() dijalankan secara asynchronous, kita bisa menggunakan async await
 * Routing pada HAPI dapat dilakukan pada method server.route()
 */
const hapi = require("@hapi/hapi");
const routes = require("./routes");

const init = async () => {
  const server = hapi.server({
    port: 5000,
    host: "localhost",
  }); //server option

  server.route(routes);

  await server.start();
  console.log(`server bejalan pada ${server.info.uri}`);
};

init();
