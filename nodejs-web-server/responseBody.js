/**
 * response pada parameter body merupakan instance dari http.serverResponse yang merupakan writeableStream
 * cara menuliskan body response menggunakan method response.write() dan di akhiri oleh method response.end()
 * kita harus menuliskan header response dan status response terlebih dahulu sebelum menuliskan body response
 */
const http = require("http");

const requestListener = (request, response) => {
  const { url, method } = request;
  response.setHeader("Content-Type", "application/json");
  response.setHeader("x-Powered-By", "NodeJS");

  if (url === "/") {
    if (method === "GET") {
      response.statusCode = 200;
      response.end(
        JSON.stringify({
          message: "ini adalah halaman home",
        })
      );
    } else {
      response.statusCode = 400;
      response.end(
        JSON.stringify({
          message: `anda tidak memiliki akses dengan method ${method}`,
        })
      );
    }
  } else if (url === "/about") {
    if (method === "GET") {
      response.statusCode = 200;
      response.end(
        JSON.stringify({
          message: "ini adalah halaman about",
        })
      );
    } else if (method === "POST") {
      let body = [];

      request.on("data", (chunk) => body.push(chunk));
      request.on("end", () => {
        body = Buffer.concat(body).toString();
        const { name } = JSON.parse(body);
        if (name) {
          response.statusCode = 200;
          response.end(
            JSON.stringify({
              message: `Hai ${name}, selamat datang di halaman about!`,
            })
          );
        } else {
          response.statusCode = 400;
          response.end(
            JSON.stringify({
              message: "name is required",
            })
          );
        }
      });
    } else {
      response.statusCode = 400;
      response.end(
        JSON.stringify({
          message: `halaman ini tidak bisa di akses dengan menggunakan method ${method}`,
        })
      );
    }
  } else {
    response.statusCode = 404;
    response.end(
      JSON.stringify({
        message: "halaman tidak ditemukan",
      })
    );
  }
};

const server = http.createServer(requestListener);
const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`server sedang berjalan pada http://${host}:${port}`);
});
