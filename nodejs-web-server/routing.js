/**
 * routing merupakan istilah dalam menentukan response server berdasarkan url atau path yang di minta (request) oleh client
 * property url akan mengembalikan nilai path secara lengkap tanpa host dan port  contoh '/about'
 */
const http = require("http");

const requestLinstener = (request, response) => {
  response.setHeader("Content-Type", "text/html");
  response.statusCode = 200;

  const { method, url } = request;

  if (url === "/") {
    if (method === "GET") {
      response.end("ini adalah home page");
    } else {
      response.end(`halaman tidak dapat diakses menggunakan method ${method}`);
    }
  } else if (url === "/about") {
    if (method === "GET") {
      response.end("Halo, ini adalah halaman about!");
    } else if (method === "POST") {
      let body = [];

      request.on("data", (chunk) => {
        body.push(chunk);
      });

      request.on("end", () => {
        body = Buffer.concat(body).toString();
        const { name } = JSON.parse(body);
        response.end(`Halo ${name}! ini adalah halaman about`);
      });
    } else {
      response.end(`halaman tidak dapat di akses menggunakan method${method}`);
    }
  } else {
    response.end("halaman tidak ditemukan");
  }
};

const server = http.createServer(requestLinstener);

const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`server berjalan pada http://${host}:${port}`);
});
