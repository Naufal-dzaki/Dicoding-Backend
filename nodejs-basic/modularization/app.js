const coffee = require("./coffee");
const { firstName, lastName } = require("./user");

console.log(coffee);
console.log(firstName);
console.log(lastName);

/*
#############  NOTES  ################
 3 jenis modul pada node js : 
    local module -> module yang dibuat secara lokal berlokasi pada node js project
    core module -> module bawaan node js yang berlokasi di folder lib dimana node js terpasang pada komputer. core module dapat digunakan dimana saja
    third party module -> module yang dipasang melalui node package manager (npm). jika terpasang secara local maka module akan tersimpan di folder node_modules 
*/
