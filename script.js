// alert("Guten Tag !");

var a = 1; // Scope : Function
var a = 2; // re-initialize
// let a = 3; => no re-initialize
let b = 3; // Scope : Block

// Falsy Values : false, 0, -0, 0n, "", null, undefined, NaN.

function declaration() {
  console.log("Hallo aus Declaration !");
}

let expression = function () {
  console.log("Hallo aus Expression !");
};

let arrow = () => {
  console.log("Hallo aus Arrow !");
};

// setTimeout(declaration, 1000);
// setTimeout(expression, 2000);
// setTimeout(arrow, 3000);

// setTimeout(() => {
//   console.log("3s left.");
// }, 4000);
// setTimeout(function () {
//   console.log("2s left.");
// }, 5000);
// setTimeout(function exist() {
//   console.log("1s left.");
// }, 6000);

// setTimeout(alert, 7000, "Auf Wiedersehen !");

let arr1 = [1, 2, 3, 4, "Illidan"];
let arr2 = new Array(5, 6, "Tichondrious", 7);

arr1.push("Athas", 5);
arr1.unshift(0, "Jaina");

let rm1 = arr1.pop();
let rm2 = arr1.shift();

for (let i of arr1) {
  //read only Loop
  console.log(i);
  i *= 2; // no effect
}
// console.log(arr1);

let newArr = arr1.concat(arr2, arr1); //arr3 = arr1 + arr2 + arr1 +...
// console.log(newArr);

let isPresent = newArr.includes(3);
// console.log(isPresent);

let sliceArr = newArr.slice(); // copy array
let sliceArr2 = newArr.slice(1, 5); // sliceArr = [ newArr[1]...newArr[4] ]

let arr3 = arr1;
// console.log(arr3);

// console.log(newArr.indexOf("Illidan"));
// console.log(newArr.lastIndexOf("Illidan"));
// console.log(arr1.reverse()); //change arr1
// console.log(arr1.join(" % "));

newArr.splice(-3, 2); // (start-index,delete-count,replace-item1,...)

let spreadArr = [...newArr]; // clone array <=> slice()

function sum(a, b, c) {
  return a + b + c;
}
let arr4 = [1, 2, 3];
console.log(sum(...arr4)); // auto split by Spread

let combineArr = [...arr4, 4, 5, 6];
let myName = "Furion Stormrage";
let chars = [...myName];
// console.log(chars);

for (let i of chars) {
  console.log(i, ":", i.charCodeAt());
}

chars.sort(); // default sort by Unicode
// console.log(chars);

arr4.sort((a, b) => a - b); // increase

// reduce(function, [initialValue])
// (accumulator, currentValue, currentIndex, array) => { return ...; }
let sum2 = arr4.reduce((acc, cv) => acc + cv, 0); // <=> sum()
// console.log(sum2);

let evenNumbers = arr4.filter((value, index, array) => value % 2 == 0);
// console.log(evenNumbers);

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
// console.log(s1 instanceof Student);
// console.log(s1);

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
// console.log("Password : ", t1.password);

function updateTime() {
  const timmer = new Date();
  const hour = String(timmer.getHours()).padStart(2, "0");
  const minute = String(timmer.getMinutes()).padStart(2, "0");
  const second = String(timmer.getSeconds()).padStart(2, "0");

  const str = `${hour}:${minute}:${second}`;
  document.getElementById("clock").innerHTML = str;
}

setInterval(updateTime, 1000);

let link_list = document.querySelectorAll("a");
console.log(link_list);

// link_list.forEach((i) => {
//   console.log(i.getAttribute("target"));
//   i.setAttribute("target", "_blank");
// });

// link_list[1].setAttribute("style", "color : blue");

let elm = document.querySelector(".main__basic-elements ul");
// elm.innerHTML = "<p><i>Content</i></p>";
// elm.textContent = "<p><i>Content</i></p>";

if (elm instanceof HTMLElement) {
  elm.style.color = "red";
}

// Object.assign(elm.style, {
//   backgroundColor: "red",
//   fontSize: "46px",
//   color: "cyan",
// });

// let clr = window.getComputedStyle(document.querySelector(".link")).color;
// console.log(clr);

let elm1 = document.getElementById("myElement");
elm1.classList.add("newClass");
console.log(elm1.classList.contains("newClass"));

elm1.classList.remove("myClass");
elm1.classList.toggle("toggleClass");
console.log(elm1.classList);

console.log(elm1.parentElement);
console.log(elm1.parentElement.children);
console.log(elm1.nextElementSibling);
console.log(elm1.previousElementSibling);

const newImg = document.createElement("img");
// newImg.setAttribute("src", "./src/icon/Druid_icon2.webp");
newImg.src = "./src/icon/Druid_icon2.webp";
document.body.append(newImg, "more elements");
newImg.style.width = "50vw";

let elm2 = document.querySelector(".main__js");
elm2.prepend("Hello World !");

// document.body.removeChild(newImg);
// newImg.parentElement.removeChild(newImg);
newImg.remove();

let js__btn1 = document.querySelector(".js__btn1");
// js__btn1.onclick = function () {
//   alert("call to function expression");
// };

function clickHandler() {
  alert("call to function declaration");
  this.style.background = "red";
}
let js__btn2 = document.querySelector(".js__btn2");
// js__btn2.onclick = clickHandler;

let js__btn3 = document.querySelector(".js__btn3");
// js__btn3.onclick = () => {
//   alert("call to arrow function");
// };

js__btn1.addEventListener(
  "click",
  function () {
    alert("call to function expression");
  },
  { once: true }
);
js__btn2.addEventListener("click", clickHandler, { once: true });
js__btn3.addEventListener("click", () => {
  alert("call to arrow function");
});

js__btn2.removeEventListener("click", clickHandler);

let js__btn4 = document.querySelector(".js__btn4");
const code_tab = document.createElement("span");
js__btn4.parentElement.append(code_tab);
js__btn4.addEventListener("click", () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const colorCode = `rgb(${r},${g},${b})`;
  js__btn4.parentElement.style.backgroundColor = `${colorCode}`;
  // js__btn4.parentElement.setAttribute(
  //   "style",
  //   `background-color : ${colorCode}`
  // );
  code_tab.textContent = colorCode;
});

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
document.addEventListener("keydown", function (e) {
  if (e.key == "c") {
    elm2.style.backgroundColor = randomColor();
  }
});

let prevent = document.querySelector(".js-reload");
prevent.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  console.log("cannot change address !");
});

// document.addEventListener("click", (e) => {
//   if (e.target.tagName == "A") {
//     e.preventDefault();
//     e.target.remove();
//   }
// });
