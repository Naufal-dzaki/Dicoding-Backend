/*
############### PROPERTI ###################
notes :
- Properti merupakan bagian dari class yang mendefinisikan nilai-nilai yang terkandung dalam sebuah instance class
- contoh property pada class car adalah brand, color, maxSpeed, dan chassisNumber
*/
class Car {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    // Set a random chassis number
    this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
  }
}

/*
======================= Property Getter Setter =========================
notes: 
- Data property merupakan properti yang langsung menampung sebuah nilai di dalam sebuah objek.
- Sedangkan accessor property merupakan properti yang dikontrol oleh sebuah getter dan setter. Nilai yang didapatkan dari properti tersebut dikontrol oleh method get dan cara menetapkan nilai tersebut dikontrol oleh method set.
- method getter harus mengembalikan sebuah nilai dan nilai tersebut akan menjadi nilai properti
- method setter harus menerima satu argumen yang nilainya diambil dari operand ke dua ketika melakukan assignment operator
*/
class Car2 {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
  }

  get chassisNumber() {
    return this._chassisNumber;
  }

  set chassisNumber(chassisNumber) {
    console.log("you are not allowed to change the chassis number");
  }
}

const car2 = new Car2("BMW", "red", 200);
console.log(car.chassisNumber);
car.chassisNumber = "BMW-1";
console.log(car.chassisNumber);

/* 
########################## Method ###############################
notes:
- Method adalah sebuah fungsi yang berada di dalam sebuah class dan dapat diakses melalui instance Class tersebut.
- method yang hanya digunakan secara internal/private pada suatu class penamaannya di tandai dengan underscore "_" diawal
*/
class Car3 {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this._chassisNumber = this._generateChassisNumber();
  }

  get chassisNumber() {
    return this._chassisNumber;
  }

  set chassisNumber(chassisNumber) {
    console.log("you are not allowed to change the chassis number");
  }

  // Methods
  drive() {
    console.log(`${this.brand} ${this.color} is driving`);
  }

  reverse() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }

  turn(direction) {
    console.log(`${this.brand} ${this.color} is turning ${direction}`);
  }

  _generateChassisNumber() {
    //ini private method/method internal
    return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
  }
}

/*
============================= Member Visibility ===============================
notes: 
- member visibility disebut juga hak akses pada sebuah property dan method di dalam suatu class yang secara default bersifat public
- untuk memberi hak akses private pada method dan property dengan cara menambahkan "#" pada awal nama
- khusus untuk property class yang private kita mendeklarasikan propertinya di enclosing class
*/
class Car4 {
  //contoh mendeklarasikan property private enclosing class
  #chassisNumber = null; // ini adalah property private

  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.#chassisNumber = this.#generateChassisNumber(); //memanggil method private
  }

  get chassisNumber() {
    return this.#chassisNumber;
  }

  set chassisNumber(chassisNumber) {
    console.log("you are not allowed to change the chassis number");
  }

  // Methods
  drive() {
    console.log(`${this.brand} ${this.color} is driving`);
  }

  reverse() {
    console.log(`${this.brand} ${this.color} is reversing`);
  }

  turn(direction) {
    console.log(`${this.brand} ${this.color} is turning ${direction}`);
  }

  #generateChassisNumber() {
    // ini adalah method private
    return `${this.brand}-${Math.floor(Math.random() * 1000)}`;
  }
}
