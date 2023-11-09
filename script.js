function goToSignIn() {
  const inputUserName = document.getElementById("inputUserName").value;
  const inputPassword = document.getElementById("inputPassword").value;
  const userData = localStorage.getItem(inputUserName);

  // if (em === 'ram@gmail.com' && inputPassword === 1111111111) {
  //   window.location.replace('./userData.html');
  //       alert("Login successful!");
  //   }


  if (userData) {
      const user = JSON.parse(userData);
    if (inputPassword == user.inputPassword) {
      window.location.href('/userData.html');
          // alert("Login successful!");
      }
       else {
          alert("Incorrect password. Please try again.");
      }
  } else {
      alert("User not found. Please register first.");
  }
  //  document.getElementById("signInForm").reset();
}


function goToReg() {
  const inputEmail = document.getElementById("inputEmail").value;
  const inputUserName = document.getElementById("inputUserName").value;
  const inputPassword = document.getElementById("inputPassword").value;
  const user = {
      inputEmail: inputEmail,
      inputUserName: inputUserName,
      inputPassword: inputPassword
  };
  const userJSON = JSON.stringify(user);
  localStorage.setItem(inputUserName, userJSON);
  alert("Registration successful!");
    // document.getElementById("registerForm").reset();
}

function routeToSignIn() {
  window.alert("Routed to Login Page");
}

function routeToReg() {
  window.alert("Routed to Registration Page");
}



// // // Variables - global scope

// // var x = 10;
// // var t = 5;

// // z = x + t;

// // console.log(z);

// // // let - block scope

// // let X = 10;
// // let y = 20;

// // c = x + y;

// // console.log(c);

// // // const whenever there are no changes to the given value

// // const pi = 3.15;

// // var h;

// // console.log(typeof h); //undefined

// // var h = null;
// // console.log(typeof null); //object

// // // arithmetic operator

// // // +, - , / , ++, --
// // var x = 10;
// // var t = 5;

// // z = x + t;
// // // 10 + 5
// // console.log(z);


// // //Assignment Operators

// // // = , == , ===, >= , <=

// // // console.log('1' === 1); //false

// // // console.log(1 === 1);


// // //Data Types

// // //string, number, boolean, undefined, null, object, BigInt, symbol

// // //Object Datatype, Array Datatype, date

// // var n = "test";

// // var o = 15;

// // var p = true;

// // var e = {
// //   id: 10,
// //   name: "selena"
// // }

// // var yl = [
// //   "sri"
// // ]

// // // var a;
// // // function calc() { 

// // // if(x = y) {
// // //     let a =10; 
// // //     console.log(a);
// // // }

// // //     console.log(a);
// // // }

// // // calc();


// // // function function_name() {

// // // }

// // // function_name();



// // // function add(x, t) {
// // //     return x + t;
// // // }

// // // console.log(add(10, 20));

// // // let a = {
// // //   id: 10,
// // //   name: "jagan",
// // //   party: "YSRCP",
// // //   color: "white"
// // // };

// // // function obJAcc() {
// // //   console.log('My id' + 'is' + a.id + 'and my name is' + a.name + 'and my color is' + a.color + 'my party name is' + a.party);
// // // }

// // // obJAcc();

// // // var b = [
// // //   10,
// // //   "jagan",
// // //   "YSRCP",
// // //   "white"
// // // ];

// // // console.log(b[1]);

// // //Array methods, string methods, 


// // //output statements 

// // // console.log(data.topping[3].type);

// // // document.write(data.topping[3].type);

// // // window.alert(data.topping[3].type);

// // // window.prompt(data.topping[3].type);

// // // document.getElementById()
// // // document.getElementsByClassName()
// // // document.getElementsByTagName()
// // // document.querySelector()
// // // document.querySelectorAll()




// // //conditional statements

// // // if(condition) {
// // //   instruction
// // // }


// // // if(condition) {
// // //   instruction
// // // } else {
// // //   //perform this
// // // }

// // // if(condition) {
// // //   instruction
// // // } else if(condition){
// // //   //perform this
// // // } else {

// // // }

// // // var val1 = 9;
// // // var val2 = 10;
// // // var val3 = val1 + val2;

// // // function dispCon() {
// // //   if(val3 == 19) {
// // //     document.write("Frank");
// // //   } 
// // //   else if(val3 = 1) {
// // //     document.write("This is the correct value: " + val3);
// // //   } else {
// // //     document.write("exit")
// // //   }
// // // }

// // // dispCon();


// // //switch case statements


// // // var age = 19;
// // // function conditionalSwitch() {
// // //   switch (age) {
// // //     case 22: document.write("She finished btech");
// // //       break;
// // //     case 25: document.write("She finished Mtech");
// // //       break;
// // //     case 28: document.write("She is working");
// // //       break;
// // //     case 19: document.write("She is in first year");
// // //       break;
// // //     case 24: document.write("She started a start up");
// // //       break;

// // //     default: document.write("She closed her PF account");
// // //   }
// // // }

// // // conditionalSwitch(10);

// // //Loops


// // // forloop, for in, for of, while , do while

// // // for(var i = 0; i < 10; i++) {
// // //   window.alert(i);
// // // }

// // // while() {
// //   //instruction
// // // }

// // // let i = 0;
// // // while( i < 10) {
// // //   text = i;
// // //   i++;
// // //   console.log(text);
// // // }


// // // do {
// // //   text = i;
// // //   i++;
// // //   console.log(text);

// // // }

// // // while (i < 10);


// // // var arr1 = [1,2,3,4,5,6,7,8,9,10];

// // // for(var i = 0; i < 10; i++) {
// // //   console.log(arr1[i]) 
// // // }


// // // for(var j of arr1) {
// // //   document.write(j);
// // // }


// // let elecData = {
// //   id: 10,
// //   name: "jagan",
// //   party: "YSRCP",
// //   color: "white"
// // };

// // // for in
// // // let test = '';
// // // for(let key in elecData) {
// // //   test += elecData[key];
// // // }

// // // console.log(test);

// // //reserved keywords

// // // var function = 10; function is a reserved keyword

// // //Events

// // // Onclick -> whenever the user clicks on the button then it'll trigger

// // //Browser Engines


// // var arr2 = {
// //   "id": "0001",
// //   "type": "donut",
// //   "name": "Cake",
// //   "ppu": 0.55,

// //   "batters":
// //   {
// //     "batter":
// //       [
// //         { "id": "1001", "type": "Regular" },
// //         { "id": "1002", "type": "Chocolate" },
// //         { "id": "1003", "type": "Blueberry" },
// //         { "id": "1004", "type": "Devil's Food" }
// //       ]
// //   },
// //   "topping":
// //     [
// //       { "id": "5001", "type": "None" },
// //       { "id": "5002", "type": "Glazed" },
// //       { "id": "5005", "type": "Sugar" },
// //       { "id": "5007", "type": "Protein" },
// //       { "id": "5006", "type": "Chocolate with Sprinkles" }, //4
// //       { "id": "5003", "type": "Chocolate" },
// //       { "id": "5004", "type": "Maple" }
// //     ]
// // }





// // var arr1 = ["joy", 15, "Akshitha","wilson","Ashna"]

// // console.log(arr1);

// // console.log(arr1[2]);

// // console.log(arr2.topping[4].type);

// // var arr2 = []; //Array Literal

// // var arr3 = new Array(3);

// // arr3[0] = 10;
// // arr3[1] = "Sainath";
// // arr3[2] = true;

// // console.log(arr3);

// // // Array Methods


// // console.log(arr3.length);

// // var arr5 = ["Testing the Project", 10];

// // var arr7 = "Testing the Project";

// // console.log(arr5.toString());

// // console.log(arr7.toUpperCase());

// // console.log(arr7.toLowerCase());

// // console.log(arr7.split("").reverse().join(""));

// // console.log(arr7.toLocaleUpperCase());

// // console.log(arr7.trim());

// // // console.log(arr5.findIndex(10))

// // var array = ["Testing", "selena", "Ariana", "Troy"];

// // // for(var i = 0; i < 10; i++) {
// // //   console.log(arr1[i]) 
// // // }

// // // array.forEach(element => {
// // //   console.log(element)
// // // });


// // // var jf = array.filter((words) => words.length > 5);
// // // console.log(jf);

// // let array1 = [-10, -0.20, 0.30, -40, -50];


// // // function (return element > 0).
// // // let found = array1.findIndex(function (element) {
// // //     return element > 0;
// // // });

// // // console.log(found)

// // // Array Map Method

// // let array2 = [2,5,6,7,8];

// // function arrayMap(a) {
// //   return a + a;
// // }

// // // var tests = array2.forEach(arrayMap);

// // // var newMap = array2.map(arrayMap);

// // // console.log(newMap);

// // // console.log(tests);


// // //reduce 

// // let array5 = [4,10,12,14,16];

// // let array6 = ["Let", "it", "rain"];

// // var testArray = array6.reduceRight((pv, cv) => {
// //   return pv + cv;
// // });



// // // split("").reverse().join("");

// // console.log(testArray);

// // console.log(testArray)

// // //includes


// // console.log(array6.includes("rains"));


// // var arr2 = '{"id": "0001", "type": "donut", "name": "Cake", "ppu": 0.55 }';

// // console.log(JSON.parse(arr2));

// // //concat

// // console.log(array2.concat(array5));


// // //hoisting

// // // function expressions

// // function fun() {
// //   const a = 10;
// //   console.log(a);
// // }

// // fun();  

// // const func = (a => {
// //   console.log(a * a)
// // })

// // func(10);


// // (function() {
// //   const a = 50;
// //   console.log(a);
// // })();


// // const sub = (x,y) => x - y;

// // console.log(sub(10,3))

// // //SetTimeour and SetTimeInterval


// // setTimeout(() => {
// //   console.log('display date : ' + new Date());
// // }, 10000)


// //call, apply, bind

// // const test = {
// //   name: "sharukh",
// //   age: function(number){
// //     console.log(this.name + " age is " + number);
// //   }
// // }

// // var displayAge = {
// // name: "salman"
// // }


// // test.age.call(displayAge, 57);


// // ---------------------------------------------------------------------


// // const noss = [1,6];

// // function add(h, j) {
// //   return h * j;
// // }

// // const res = add.apply(null, noss);

// // console.log(res);

// // ------------------------------------------------------------------------


// // const tesat = {
// //   name: "sharukh",
// //   age: function(number){
// //     console.log(this.name + " age is " + number);
// //   }
// // }


// // const agess = tesat.age.bind(tesat, "varun");


// // agess();

// //String Methods


// // length, concat, slice, substr, substring, index, false, replace, split, includes  

// var sLength = "Sharukh";

// console.log(sLength.length);


// var sLength2 = "khan";
// var sLength3 = "Hello, My name, is. Sainath";

// var sLength4 = ["Hello", "My name", "is.", "Sainath"];

// console.log(sLength.concat(sLength2));

// console.log(sLength.charAt(3));

// console.log(sLength.indexOf("r"));

// console.log(sLength3.substring(18, 25));

// console.log((sLength3.split(".")));

// console.log(sLength3.toLowerCase());

// console.log(sLength3.toUpperCase());

// console.log(sLength3.replace("Hello", "hi"));

// console.log(sLength3.trim());

// console.log(sLength3.startsWith("Hello"));

// console.log(sLength3.endsWith("Sainath"));

// console.log(sLength3.includes("name"));

// console.log(sLength4.join(","));


// //Terinary Operator


// var a = 10;

// // if(a == 7) {
// //   console.log(`The value of a is ${a}, which is false`);
// // } else {
// //   console.log(`The value of a is ${a}, which is true`);
// // }

// // condition ? exp1 : exp2

// var condCheck = a == 7 ? `The value of a is ${a}, which is false` : `The value of a is ${a}, which is true`;

// console.log(condCheck);


// ***********************************Developing a array filter functionality in the table***********************************

// function searchFilter() {
//   // Get the input element and table
//   const input = document.getElementById('filter');
//   const table = document.getElementById('searchTable');
//   const rows = table.getElementsByTagName('tr');

//   // Add an event listener to the input field
//   input.addEventListener('input', filterTable);

//   function filterTable() {
//     const filterText = input.value.toLowerCase();

//     for (let i = 1; i < rows.length; i++) { // Start from 1 to skip the header row
//       const name = rows[i].getElementsByTagName('td')[0].textContent.toLowerCase();

//       // console.log(name)
//       if (name.includes(filterText)) {
//         rows[i].style.display = ''; //This is for displaying the row
//       } else {
//         rows[i].style.display = 'none'; // Hide the row
//       }
//     }
//   }
// }

// searchFilter();

//Promises 

// var promiseData = 115;
// const myPromise = new Promise((resolve, reject) => {

//   if(promiseData === 115) {
//     resolve('success')
//   } else {
//     reject("The Promise Data doesn't match");
//   }
// });

// myPromise.then((res) => {
//   console.log(res);
// }).
// catch((error) => {
//   console.log(error);
// })

//constructor

// constructor(){
// }

//localStorage, SessionStorage, Cookies

// localStorage.setItem('email', 'joy@gmail.com');
// localStorage.setItem('password', '123457890');

// function saveData() {
//   sessionStorage.setItem('email', 'joy@gmail.com');
//   sessionStorage.setItem('password', '123457890');

//   sessionStorage.clear();

// }

// saveData();



// document.cookie("what day is today?", "hello this is wenzday");


// function saveEnteredData() {
//   var uName = document.getElementById('inputEmail').value;
//   var uPassword = document.getElementById('inputPassword').value;
//   sessionStorage.setItem("username", uName);
//   sessionStorage.setItem("password", uPassword);
  
//   // document.cookie = ("username", uName, "password", uPassword);
// }

// console.log(sessionStorage.getItem("username"));
// console.log(sessionStorage.getItem("password"));

//object

// const sample = new Set(["joy", "frank","seb"]);


// sample.add("prakash");

// console.log(sample);

//constructor -- oops

// function getShelfData(book, rack, author) {
//   this.book = book;
//   this.rack = rack;
//   this.author = author;
//   this.dispData = function() {
//     console.log(`${this.book} is in Rack: ${this.rack} which is authored in ${this.author}`)
//   }
// }

// var book1 = new getShelfData('Ikigai', 1, 'Japan');

// var book2 = new getShelfData('AH', 2, 'US');

// var book3 = new getShelfData('Tales', 3, 'UK');

// console.log(book1.dispData());


// console.log(book2.dispData());


// console.log(book3.dispData());

//Prototype

// function getData(book, rack, author) {
//   this.book = book;
//   this.rack = rack;
//   this.author = author;
// }

// getData.prototype.dispData1 = function() {
//   return `${this.book} is in Rack: ${this.rack} which is authored in ${this.author}`;
// }

// var shelfData = new getData('Tales', 3, 'UK');

// console.log(shelfData.dispData1());

//Inheritance

// function getInheritedData(book, rack, author) {
//   this.book = book;
//   this.rack = rack;
//   this.author = author;
// }

// getInheritedData.prototype.dispData1 = function() {
//   return `${this.book} is in Rack: ${this.rack} which is authored in ${this.author}`;
// }

// function addData(book, rack, author, librarian) {
//   getInheritedData.call(this, book, rack, author);

//   this.librarian = librarian;
// }

// addData.prototype = Object.create(getInheritedData.prototype);

// var newInheritedData = new addData('Ikigai', 5, 'Japan', 'ben');


// console.log(newInheritedData.dispData1());


//Classes

// class rack {
//   constructor(book, rack, author) {
//     this.book = book;
//     this.rack = rack;
//     this.author = author;
//   }

//   dispData1 = function() {
//     return `${this.book} is in Rack: ${this.rack} which is authored in ${this.author} and the librarian is ${this.librarian}`;
//   }
  
//   Change(author) {
//     this.author = author;
//   }

//   static dd()  {
//     console.log('Book Wiz')
//   }
// }
 
// class shelf extends rack {
//     constructor(book, rack, author, librarian) {
//       super(book, rack, author);
//       this.librarian = librarian;
//     }
// }


// const rack1 = new shelf('Ikigai', 5, 'Japan', 'ben');
// rack1.Change('Hawai')
// console.log(rack1.dispData1())

// console.log(rack.dd())



