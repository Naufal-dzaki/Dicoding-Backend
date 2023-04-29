/*
################### Inheritance (Pewarisan)#######################
- Dengan konsep inheritance, kita bisa mewariskan sifat-sifat yang berada di dalam sebuah class ke class lain.
- implementasi pewarisan dengan cara menampung sifat-sifat yang sama ke dalam sebuah class induk (superclass) lalu pada subclass kita memberi sifat yang lebih spesifik 
*/
// Superclass
class MailService {
  constructor(sender) {
    this.sender = sender;
  }

  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }
}

// Subclass
class WhatsAppService extends MailService {
  sendBroadcastMessage(message, receivers) {
    for (const receiver of receivers) {
      this.sendMessage(message, receiver);
    }
  }
}

// Subclass
class EmailService extends MailService {
  sendDelayedMessage(message, receiver, delay) {
    setTimeout(() => {
      this.sendMessage(message, receiver);
    }, delay);
  }
}

const whatsapp = new WhatsAppService("+6281234567890");
const email = new EmailService("dimas@dicoding.com");

whatsapp.sendMessage("Hello", "+6289876543210");
whatsapp.sendBroadcastMessage("Hello", ["+6289876543210", "+6282234567890"]);

email.sendMessage("Hello", "john@doe.com");
email.sendDelayedMessage("Hello", "john@doe.com", 3000);

/*
================= Operator Instance Of ======================
notes : 
- operator instance of adalah sebuah operator untuk mengecek apakah sebuah prototype dari constructor termasuk dalam sebuah function  atau class tertentu yang menghasilkan true jika benar dan false jika salah 
*/
console.log(whatsapp instanceof WhatsAppService); // true
console.log(whatsapp instanceof EmailService); // false
console.log(whatsapp instanceof MailService); // true

console.log(email instanceof EmailService); // true
console.log(email instanceof WhatsAppService); // false
console.log(email instanceof MailService); // true
