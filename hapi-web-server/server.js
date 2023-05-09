/**
 * hapi server menerima satu parameter yaitu server option yang merupakan objek konfigurasi, kita dapat menetapkan  properti port dan host
 * server.start() dijalankan secara asynchronous, kita bisa menggunakan async await
 * Routing pada HAPI dapat dilakukan pada method server.route()
 * path dalam routing bisa di artikan alamat yang digunakan client untuk melakukan request
 * untuk menggunakan path parameter pada hapi menggunakan '{}' -> /users/{username}
 * untuk menggunankan path parameter sebagai optional kita bisa menggunakan '?' -> /users/{username?}
 * optional path parameter hanya bisa digunakan pada akhir path saja -> /users/{username}/posts/{title?}
 * query parameter biasanya digunakan untuk filter -> /user?name=naufal&location=surabaya
 * kita mengambil query parameter dengan mengambil dari request.query
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
