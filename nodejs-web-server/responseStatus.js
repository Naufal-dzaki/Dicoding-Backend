/**
 * status code harus bernilai 3 digit angka dengan ketentuan sebagai berikut :
 *  > 100-199 -> informational response
 *  > 200-299 -> successful response
 *  > 300-399 -> redirect
 *  > 400-499 -> client error
 *  > 500-599 -> server error
 * kita dapat mengubah status.message dari defaultnya dengan cara response.statusMessage = pesan , teteapi tidakk dianjurkan untuk mengubah status message
 */
const http = require("http");

const requestListener = (request, response) => {
  const { url, method } = request;

  response.setHeader("Content-Type", "text/html");

  if (url === "/") {
    if (method === "GET") {
      response.statusCode = 200;
      response.end("ini adalah halaman home");
    } else {
      response.statusCode = 400;
      response.end(`Halaman tidak dapat diakses oleh method ${method}`);
    }
  } else if (url === "/about") {
    if (method === "GET") {
      response.statusCode = 200;
      response.end("ini adalah halaman about");
    } else if (method === "POST") {
      let body = [];

      request.on("data", (chunk) => body.push(chunk));
      request.on("end", () => {
        body = Buffer.concat(body).toString();
        const { name } = JSON.parse(body);
        if (name) {
          response.statusCode = 200;
          response.end(`Halo ${name}, selamat datang di halaman about!`);
        } else {
          response.statusCode = 400;
          response.end("name is required");
        }
      });
    } else {
      response.statusCode = 400;
      response.end(`Halaman tidak dapat di akses oleh method ${method}`);
    }
  } else {
    response.statusCode = 404;
    response.end("halaman tidak ditemukan");
  }
};

const server = http.createServer(requestListener);
const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`server berjalan pada http://${host}:${port}`);
});
