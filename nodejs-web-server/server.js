const http = require("http");

const requestLinstener = (request, response) => {
  response.setHeader("Content-Type", "text/html");
  response.statusCode = 200;

  const { method } = request;

  if (method === "GET") response.end("<h1>method get</h1>");
  if (method === "POST") {
    let body = [];

    request.on("data", (chunk) => {
      body.push(chunk);
    }); // chuck adalah potongan data

    request.on("end", () => {
      body = Buffer.concat(body).toString();
      const { name } = JSON.parse(body);
      response.end(`<h1>hai, ${name}</h1>`);
    });
  } //proses event dalam callback  event end karena data body siap dikonsumsi hanya ketika event end telah di jalankan

  if (method === "PUT") response.end("<h1>method PUT</h1>");
  if (method === "DELETE") response.end("<h1>method DELETE</h1>");
};

const server = http.createServer(requestLinstener);

const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`server berjalan pada http://${host}:${port}`);
});

/** notes:
 * - http.createServer berfungsi untuk membuat http server yang merupakan instance dari http.server
 * - request merupakan objek yang menyimpan informasi terkait permintaan yang dikirimkan oleh clien
 * - response merupakan objek yang di gunakan untuk menanggapi permintaan dari client
 * - method listen() digunakan untuk menangani setiap permintaan masuk dari client
 * - method listen() menerima 4 parameter yaitu :
 *    > port (number) : jalur yang digunakan untuk mengakses http server
 *    > hostname (string) : nama domain yang digunakan oleh http server
 *    > backlog (number) : maksimal koneksi yang dapat ditunda (pending) pada http server
 *    > listeningListener (function) : callback yang akan dipanggil ketika http server bekerja (listening)
 * - request merupakan instance dari http.ClientRequest yang memiliki banyak properti, salah satunya propertinya yaitu method
 * - dengan menggunakan method dari property http.ClientRequest kita bisa memberikan response yang berbeda berdasarkan tipe methodnya
 * - http.clientRequest merupakan turunan dari readable stream
 * - untuk mengambil data body pada http.clientRequest dapat menggunakan teknik strean yang memanfaatkan eventEmitter.
 *
 */
