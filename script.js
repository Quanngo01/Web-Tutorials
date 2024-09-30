// alert("Guten Tag !");

var a = 1; // Scope : Function
var a = 2; // re-initialize
// let a = 3; => no re-initialize
let b = 3; // Scope : Block

function declaration() {
  console.log("Hallo aus Declaration !");
}

let expression = function () {
  console.log("Hallo aus Expression !");
};

let arrow = () => {
  console.log("Hallo aus Arrow !");
};

setTimeout(declaration, 1000);
setTimeout(expression, 2000);
setTimeout(arrow, 3000);

setTimeout(() => {
  console.log("3s left.");
}, 4000);
setTimeout(function () {
  console.log("2s left.");
}, 5000);
setTimeout(function exist() {
  console.log("1s left.");
}, 6000);

// setTimeout(alert, 7000, "Auf Wiedersehen !");

let arr1 = [1, 2, 3, 4];
let arr2 = new Array(5, 6, 7);

for (let i of arr1) {
  //read only Loop
  console.log(i);
  i *= 2; // no effect
}
console.log(arr1);

let arr3 = arr1.concat(arr2, arr1); //arr3 = arr1 + arr2 + arr1 +...
console.log(arr3);

let arr4 = arr1;
console.log(arr4);

let student = {
  "@name": "Quan",
  matrikelNummer: "1123174",
  address: {
    city: "Darmstadt",
    country: "Deutschland",
  },
  email: "ngoquansz2001@gmail.com",
  fachbereich: "Informatik",

  belegen: function () {
    console.log("Sie haben erfolgreich belegt.");
  },
};

student.faecher = ["TGI", "AuD", "PG", "OOAD"]; // add attribute
delete student.email; // delete addtribute

// console.log(Object.keys(student));
// console.log(Object.values(student));

Object.freeze(student); // no change, add, remove attribute
student.age = 34;
student["@name"] = "Van";
delete student.address;

// console.log(student);

Object.seal(student); // only change values of attribute

// console.log(typeof student);
// student = 5;    // => change type of student
// console.log(student);
// console.log(typeof student);

const Student = function (_name, _matrikelnummer) {
  this.name = _name;
  this.matrikelnummer = _matrikelnummer;

  this.showInfo = function () {
    return `${this.name} \t ${this.matrikelnummer}`;
  };
};
function Person(_name, _id) {
  this.name = _name;
  this.id = _id;
}

const s1 = new Student("Van Stormrage", "1123174");
// console.log(typeof s1);
// console.log(s1.showInfo());
// console.log(s1 instanceof Student);
// console.log(s1 instanceof Person);

s1.email = "ngoquansz2001@gmail.com";
console.log(s1 instanceof Student);
console.log(s1);

// const Student = class {...};
// class Student {
//   constructor(_name, _matrikelnummer) {
//     this.name = _name;
//     this.matrikelnummer = _matrikelnummer;
//   }

//   showInfo() {
//     return `${this.name} \t ${this.matrikelnummer}`;
//   }
// }

class Tutor extends Student {
  #_password; // private attribute
  constructor(_name, _matrikelnummer, _fach) {
    super(_name, _matrikelnummer);
    this.fach = _fach;
  }

  showInfo() {
    //override
    return `${this.name} \t ${this.matrikelnummer} \t ${this.fach}`;
  }

  get password() {
    // getter
    return this.#_password;
  }
  set password(nummer) {
    // setter
    this.#_password = nummer;
  }
}

let t1 = new Tutor("Quan", "1123", "Informatik");
console.log(t1.password);

function updateTime() {
  const timmer = new Date();
  const hour = String(timmer.getHours()).padStart(2, "0");
  const minute = String(timmer.getMinutes()).padStart(2, "0");
  const second = String(timmer.getSeconds()).padStart(2, "0");

  const str = `${hour}:${minute}:${second}`;
  document.getElementById("clock").innerHTML = str;
}

setInterval(updateTime, 1000);
