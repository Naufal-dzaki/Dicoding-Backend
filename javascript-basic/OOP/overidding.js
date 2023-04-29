/*
################ Overidding #################
notes : 
- overidding merupakan fitur yang memperbolehkan subclass mendefinisikan implementasinya sendiri (menetapkan implementasi yang lebih spesifik / menambah properti baru secara spesifik) pada sebuah method yang sebenarnya sudah didefinisikan pada superclassnya
- overriding umumnya dapat dilakukan pada constructor dan method class. 
*/

/*
=================== contructor overidding =========================
notes:  
- constructor overidding dilakukan ketika kita ingin membuat property baru yang spesifik pada subclass tertentu
- untuk penerapan constructor overidding kita harus memanggil method super()
*/
class MailService {
  constructor(sender) {
    this.sender = sender;
  }
}

class WhatsAppService extends MailService {
  // overriding constructor
  constructor(sender, isBusiness) {
    super(sender);

    this.isBusiness = isBusiness;
  }
}

/*
===================== method overidding ============================
notes: 
- method overidding digunakan ketika ingin mengubah implementasi method warisan dari super class
- cara overidde method pada superclass tidak perlu mendefinisikan method super() tetapi jika ingin memanggil sebuah method dari super class, memanggilnya dengan cara "super.namaMethod()"
*/
class MailService {
  constructor(sender) {
    this.sender = sender;
  }

  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }
}

class WhatsAppService extends MailService {
  constructor(sender, isBusiness) {
    super(sender);
    this.isBusiness = isBusiness;
  }

  // Overriding method
  sendMessage(message, receiver) {
    // memanggil method sendMessage pada superclass
    super.sendMessage(message, receiver);

    console.log("message sent via WhatsApp");
  }
}

const mailService = new MailService("someSender");
const whatsappService = new WhatsAppService("+6281234567890", true);

mailService.sendMessage("Hai, apa kabar?", "someReceiver");
whatsappService.sendMessage("Hai, apa kabar?", "+6289876543210");
