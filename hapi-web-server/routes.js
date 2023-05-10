/**
 * method yang memiliki nilai '*' berarti route dapat diakses dengan semua method yang ada pada http
 * path yang memiliki nilai '/{any*}' berfungsi untuk menangani permintaan masuk pada path yang belum di daftarkan
 * pada handler terdapat value h (inisial dari hapi), h dalam parameter disebut dengan response toolkit yang fungsinya hampir sama dengan response pada nodejs native
 * h.response sama dengan response.end dan .code sama dengan response.statusCode
 */

const routes = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return h.response("Home page").code(200);
    },
  },
  {
    method: "*",
    path: "/",
    handler: (request, h) => {
      const response = h.response(
        "halaman tidak dapat di akses dengan method tersebut"
      );
      response.type("text/plain");
      response.header("X-Powered-By", "nodejs");
      response.code(400);
      return response;
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
