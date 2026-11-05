//console.log("hi")

// 3 types of variables:boolean,string,number
// num = true;
// console.log(typeof num);

//let:local variable--> only  inside{}
//const:constant variable

// let emp = {
//   name: "raghad",
//   age: 22,
//   isActive: true,
// };
// console.log(emp);
// emp.age=32

//parse:can parsing  here
// let x = "15.5abc";
// let x="ab13"
// console.log(parseFloat(x));

// // console.log("Javascript");

// num = 5;
// console.log(typeof num)
// num = 5.5;
// console.log(typeof num)
// num = 5.55555555555555;
// console.log(typeof num)
// num = "data";
// console.log(typeof num)
// num = false;
// console.log(typeof num)

// let : Local Variable
// {
//     let num = 5;
//     console.log(num);

// }
//     //console.log(num);

// // Global Variable
// {
//     num2 = 5;
//     console.log(num2);

// }
//     console.log(num2);

// // const : Constant Variable
// {
//     const num3 = 5;
//     console.log(num2);

//     //num3 = 8; // Error

// }

// let emp = {
//   name: "Ahmad",
//   age: 25,
//   isActive: true,
// };

//console.log(emp);

//emp.age = 26;

//console.log(emp.age);

//let date = new Date();
//console.log(date);

// Parsing | Casting

// let x = "15.55abc";
// let x = "abc15.55";
// console.log(parseFloat(x));

//let x = "15";
//  let x = "15sbc";
//  console.log(Number(x));

// let x; // undefined

// x = null;
// console.log(x);

// let x ;
// console.log(String(x)); // "undefined"
// console.log(x.toString()); // error

// let x = 0;
// console.log(Boolean(x)); // false

//  x = 1;
// console.log(Boolean(x)); // true

// x = "0";
// console.log(Boolean(x)); // true

// x = "";
// console.log(Boolean(x)); // false

// x = null;
// console.log(Boolean(x)); // false

// x = undefined;
// console.log(Boolean(x)); // false

// String Functions

// let str = "Hello";
// console.log(str.length);

// console.log(str[4]); // o
// console.log(str[5]); // undefined

// console.log(str.charAt(4)); // o
// console.log(str.charAt(5)); // ""

// console.log(str.toUpperCase()); // "HELLO"
// console.log(str.toLowerCase()); // "hello"

// str = "        Hello        ";
// console.log(str.trim());

// str = "Hello";
// console.log(str.includes("llos"));
// console.log(str.startsWith("He"));
// console.log(str.endsWith("llos"));

// str = "JavaScript";
// console.log(str.slice(4)); // "Script"
// console.log(str); // "JavaScript"

// console.log(str.slice(0, 4)); // "Java"

// console.log(str.slice(-6)); // "Script"
// console.log(str.slice(-6, -3)); // "Scr"

// console.log("hello hello".replace("hello", "js")); // "js hello"
// console.log("hello hello".replaceAll("hello", "js")); // "js js"

// // string --> Array
// str = "one,two,three";
// console.log(str.split()); // ['one,two,three']
// console.log(str.split("")); // ['o', 'n', 'e', ',', 't', 'w', 'o', ',', 't', 'h', 'r', 'e', 'e']
// console.log(str.split(",")); // ['one', 'two', 'three']
// str = "one/two/three";
// console.log(str.split("/")); // ['one', 'two', 'three']

// Operators
// let x = 10;

// console.log("x + 5 = " + x + 5); //" x + 5 = 105"
// console.log("x + 5 = " + (x + 5));// " x + 5 = 15"
// console.log(x + 5 + " = x + 5"); //"15 = x + 5"

// console.log(x * "5"); // "50"
// console.log(x * "s5"); // "NaN"

// ==
// console.log(5 == 5); // true
// console.log(5 == "5"); // true
// console.log(0 == false); // true
// console.log(null == undefined ); // true

// // ===
// console.log(5 === 5); // true
// console.log(5 === "5"); // false
// console.log(0 === false); // false
// console.log(null === undefined ); // false

// let x = 15
// if(x > 10){
//     console.log("Bigger than 10");
// }
// else{
//     console.log("Less than 10");
// }

// // for(let i = 0; i <= 10 ; i++){
// //     console.log(i);
// // }

// let i = 0;
// while(i <= 10){
//     console.log(i);
//     i++;
// }

// Functions

// function add(x, y){
//     return "x + y = " + (x + y);
// }

//Local Function
// let add = function (x, y){
//     return "x + y = " + (x + y);
// }

// () => {} : Arrow Function
//let add = (x,y) => console.log("x + y = " + (x + y));

//let result = add(10, 5);
//console.log(result);

//add(10, 5);

// Arrays

// let arr = ["one", "two", "three", 15, true];
// console.log(arr);

// // arr.push("four"); // Add Last
// // console.log(arr);

// // arr.pop(); // Remove Last item
// // console.log(arr);

// // arr.unshift("four"); // Add First
// // console.log(arr);

// // arr.shift(); // Remove First
// // console.log(arr);

// console.log(arr.lastIndexOf("five")); // Last index

// console.log(arr.includes("five")); // True False

// let arr = ["one", "two", "three", "four", "five"];
// let arr2 = ["1", "2", "3"];
// let arr3 = arr.concat(arr2);

// // console.log(arr.slice(0, 2));

// // console.log(arr);

// //arr.splice(0, 2, "1", "2", "3");
// console.log(arr3);

// higher order functions : linq (C#)

// let employees = [
//     {id : 1, name : "emp1", age: 29, isActive : true},
//     {id : 2, name : "emp2", age: 25, isActive : false},
//     {id : 3, name : "emp3", age: 31, isActive : false},
//     {id : 4, name : "emp4", age: 22, isActive : true},
// ];

// // filter returns a new array based on a condetion
// let activeEmployees = employees.filter(x => x.isActive)
// //console.log(activeEmployees);
// //console.log(employees);

// // map
// let mappedEmployees = employees.filter(x => x.isActive).map(x => {
//     return {id : x.id, name : x.name}
// });

// //console.log(mappedEmployees);

// let numbers = [10, 20, 30, 40];

// // sum = 0
// // sum = sum + 10 = 10
// // sum = sum + 20 = 30

// // reduce
// let sumOfNumbers = numbers.reduce((sum, number) => sum + number, 0);
// //console.log(sumOfNumbers);

// let multiply = numbers.reduce((multi, number) => multi * number , 1);
// //console.log(multiply);

// // foreach
// employees.forEach(x => console.log(`Name : ${x.name}, Age : ${x.age}`));

// employees.forEach(x => {

//     x.salaryIncrease = x.age > 25 ? 0.2 : 0.1
//     // if(x.age > 25){
//     //     x.salaryIncrease = 0.2
//     // }
//     // else{
//     //     x.salaryIncrease = 0.1;
//     // }
// });

// console.log(employees);

//window.alert("Hello");

//let username = window.prompt("Hello, Please Insert you name", "Your Name");
//window.alert(`Hello, ${username}`);

// let num1 = window.prompt("please enter the first number", 0);
// let num2 = window.prompt("please enter the second number", 0);

// window.alert(`The summation of both numbers : ${Number(num1) + Number(num2)}`);

// document.write("Hello Js");

// for(let i = 1; i <= 6; i++){
//     document.write(`<h${i}> Hello World </h${i}>`)
// }

// DOM Operations : to get soething from html page

// // Event Listener
// dont call this function until all the html page loaded:
// we prefer to add debugger in browser not here.
// document.addEventListener("DOMContentLoaded", function(){
//     //let element = document.getElementById("email");
//     //debugger;
//    // console.log(element);

//     let tagElements = document.getElementsByTagName("p");
//     //console.log(tagElements);

//     let classElements = document.getElementsByClassName("question");
//     //console.log(classElements[0]);

		//querySelector:first element to find except if you use querySelectorAll return type in browser as NodeList
//     //console.log(document.querySelectorAll("p"));
//     //console.log(document.querySelector("#email"));
//     //console.log(document.querySelector(".question"));

//     let element = document.getElementById("email");
//     //element.style.backgroundColor = "red";
//     //element.value = "example@gmail.com";
//		add value attribute to id : email
//     element.setAttribute("value", "example@gmail.com");
//     console.log(element.getAttribute("value")); //example@gmail.com
//     console.log(element.hasAttribute("value")); //return true or false
//     console.log(element.hasAttributes());
//     element.removeAttribute("value");

//     let content = document.getElementById("content");
//		add new element to content and delete all the elements before
//     //content.innerHTML = "<span> From Javascript </span>";
//		add new element to content but sse it as text not as element
//     //content.textContent = "<span> From Javascript </span>";

//     let newElement = document.createElement("div"); // Parent Element
//     newElement.className = "title";

//     let childElement = document.createElement("span"); // Child Element
//     childElement.textContent =  "From JavaScript";

//     newElement.appendChild(childElement); // Add Child Element To Parent Element

//   //  document.body.appendChild(newElement); // Add Parent Element To Body

let submitButton = document.querySelector(".submit-btn");
submitButton.addEventListener("click", function () {
  // Add Event when the submit button is clicked
  let inputElements = document.getElementsByTagName("input"); // Get All Input Elements
  let isValid = true;
// Check if the input element is required
// Iterate on all element + Parsing from HTMLCollection to Array
// check if required element has value
//check if user enter space only by using trim
  Array.from(inputElements).forEach((x) => {
    if (x.hasAttribute("required")) {
      if (x.value === null || x.value?.trim() === "") {
        x.classList.add("red-border");
        isValid = false;
      } else {
        x.classList.remove("red-border");
      }
    }
  });

  if (isValid) {
    let name = document.getElementById("name").value;
    window.alert(`Welcome : ${name}`);
    location.reload(); // Refresh Web Page
  }
});

// let images = [
//   "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-fall-nature-scenery-free-image.jpeg?w=2210&quality=70",
//   "https://t3.ftcdn.net/jpg/02/70/35/00/360_F_270350073_WO6yQAdptEnAhYKM5GuA9035wbRnVJSr.jpg",
//   "https://images.pexels.com/photos/26151151/pexels-photo-26151151/free-photo-of-night-sky-filled-with-stars-reflecting-in-the-lake.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
// ];

// let currentIndex = 0;
// let imageElement = document.getElementById("image");
// let nextButton = document.getElementById("next");
// let previousButton = document.getElementById("previous");
// updateImage();

// nextButton.addEventListener("click", function () {
//   if (currentIndex < images.length - 1) {
//     // 0 < 2
//     currentIndex++;
//     updateImage();
//   }
// });

// previousButton.addEventListener("click", function () {
//   if (currentIndex > 0) {
//     currentIndex--;
//     updateImage();
//   }
// });

// function updateImage() {
//   imageElement.setAttribute("src", images[currentIndex]);
//   nextButton.disabled = currentIndex === images.length - 1;
//   previousButton.disabled = currentIndex === 0;
// }
