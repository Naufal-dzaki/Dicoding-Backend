/**
 * method yang memiliki nilai '*' berarti route dapat diakses dengan semua method yang ada pada http
 * path yang memiliki nilai '/{any*}' berfungsi untuk menangani permintaan masuk pada path yang belum di daftarkan
 */

const routes = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "home page";
    },
  },
  {
    method: "*",
    path: "/",
    handler: (request, h) => {
      return "halaman tidak dapat diakses dengan method tersebut";
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      return "about page";
    },
  },
  {
    method: "*",
    path: "/about",
    handler: (request, h) => {
      return "halaman tidak dapat diakses dengan method tersebut";
    },
  },
  {
    method: "GET",
    path: "/hello/{name?}",
    handler: (request, h) => {
      const { name = "stranger" } = request.params;
      const { lang } = request.query;

      if (lang === "id") return `Hai! ${name}`;
      return `Hello ${name}`;
    },
  },
  {
    method: "*",
    path: "/{any*}",
    handler: (request, h) => {
      return "halaman tidak ditemukan";
    },
  },
];

module.exports = routes;
