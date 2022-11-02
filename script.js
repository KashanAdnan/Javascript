// alert("Thank You For Input");

// var myname = "Kashan";
// var fname = "Adnan";
// var myclass = 7;
// var nationality = "Pakistan";
// var age = 11;

// // todo  we can change the variables name in javascript

// myname = "Shahzain";
// fname = "Younus";

// // todo  variables for number

// var weight = 150;
// weight + 5;
// var originalnum = 23;
// var sum = originalnum + 7;

// // todo  we can add to variable like

// var mynumber = 54;
// var lastnumber = 86;
// var newsum = mynumber + lastnumber;

// // todo  math expressions

// var plus = 54 + 46;
// var minus = 5 - 10;
// var multiply = 2 * 5;
// var divide = 3 / 9;
// var whatsleftover = 3 % 7;

// // todo  Math expressions: Unfamiliar operators

// var num = 1;
// num++;
// ++num;

// var minus2 = 4;
// minus2--;
// --minus2;

// // todo  Math expressions: Eliminating ambiguity

// var totalCost = (1 + 3) * 4;
// var resultOfComputation = 2 * 4 * (4 + 2);

// // todo  Concatenating text strings

// var username = "kashan;";
// var thankx = "Thanks" + username + "!";
// var message = "Thanks, ";
// var banger = "!";
// var answer = message + username + banger;

// // todo  promp in javscript

// prompt("Write Your Name !");
// var question = "Your species?";
// var defaultAnswer = "human";
// var spec = prompt(question, defaultAnswer);

// // todo  if statment in js

// var a = prompt("Enter The Value");
// var b = 67;
// if (a === b) {
//   alert("Correct");
// }
// if (a !== b) {
//   alert("Wrong");
// }

// // todo  comparison operators

// if (a < b) {
//   alert("It's Less Than b");
// }
// if (a > b) {
//   alert("It's Greater Than b");
// }
// if (a <= b) {
//   alert("It's is less than or equal to b");
// }
// if (a >= b) {
//   alert("It's is gr'eater than or equal to b");
// }

// // todo  if...else and else if statements

// var mybrothername = prompt("Write My Brother Name");
// if (mybrothername === "Shahzain") {
//   alert("Thats Correct");
// } // todo  else if is leye use hota he kue ke agar if
// // todo  ke statement true he to else if chale ga phir
// // todo  else chalega
// else if (mybrothername === "Kashan") {
//   alert("Incorrect But Close !");
// }
// // todo  iagar else if flase he to ye else if ko chalae ga leken
// // todo  agar ye true ho gya to else cale ga
// else {
//   alert("Wrong");
// }

// // todo  testing sets of condition
// if (weight === mynumber && minus === plus) {
//   alert("Correct");
// }
// if (weight !== mynumber || minus !== plus) {
//   alert("Incorrect");
// }

// // todo  array in js we have array in js

// var myarr = ["Kashan", "Adnan", "Fatima", "Almira"];
// console.log(myarr);

// // todo adding and removing in arraty

// myarr.pop();
// myarr.push("Shahzain");
// myarr.shift();
// myarr.unshift("Nazia");
// myarr.splice(0, 1);
// var myslice = myarr.slice(1, 3);
// console.log(myslice);

// // todo for loop

// for (let i = 0; i < myarr.length; i++) {
//   console.log(myarr[i]);
// }

// // todo  flages in loop

// var fruits = ["Apple", "mango", "pappaya", "watermelon", "mango"];
// var matchfound = false;
// for (let i = 0; i < fruits.length; i++) {
//   if (fruits[i] === "Apple") {
//     matchfound = true;
//     document.write(fruits[i] + "is Found");
//     // todo  break in loop
//     break;
//   }
// }
// if (matchfound == false) {
//   document.write("Not Found");
// }

// // todo  .lenght in loop

// for (let i = 0; i < fruits.length; i++) {
//   const element = fruits[i];
//   console.log(element);
// }

// // todo console.log in js

// console.log("Hello World");

// // todo changing case

// var myuppercas = "Kashan";
// console.log(myuppercas.toUpperCase());

// var mylowercase = "Shahzain";
// console.log(mylowercase.toLowerCase());

// // todo  indexof() & lastindexof()

// var text = "World War II";
// for (var i = 0; i < text.length; i++) {
//   if (text.slice(i, i + 12) === "World War II") {
//     text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//   }
// }
// var firstChar = text.indexOf("World War II");
// if (firstChar !== -1) {
//   text =
//     text.slice(0, firstChar) +
//     "the Second World War" +
//     text.slice(firstChar + 12);
// }
// console.log(firstChar);

// // todo replacing  character

// var myreplace = "kashan";
// var newtext = myreplace.replace("Shahzain");
// console.log(newtext);

// // todo Rounding Numbers

// var scoreAvg = 5;
// scoreAvg = Math.ceil(5.2);
// scoreAvgfloor = Math.floor(5.2);
// scoreAvground = Math.round(2.6);
// console.log(scoreAvground);
// console.log(scoreAvgfloor);
// console.log(scoreAvg);

// // todo  data types in js

// var x = "Hello World"; // todo  && 'Hello Word' is String
// var dnumber = 65; // todo  it's Number
// var dbolean = true; // todo  it's Boolean
// var darray = ["Kashan", "Adnan", "Nazia"]; // todo it's Array
// var dobj = { fname: "Kashan" }; // todo  it's object
// var dnull = null; // todo  it's null
// var dundefined; // todo  it's undefined \
// var darr = ["HTML", "CSS"];
// var dobj = { name: "Kashan" };

// // todo generating random numbers

// var randomnum = Math.random();
// console.log(randomnum);

// // todo  Assignment operatorder

// var a = 10;
// var b = 3;
// a += b;
// console.log(a);
// a -= b;
// console.log(a);
// a *= b;
// console.log(a);
// a /= b;
// console.log(a);
// a %= b;
// console.log(a);
// a **= b;
// console.log(a);

// // todo  Converting strings to integers and decimals

// var mynumbera = "99";
// var mynum = Number(mynumbera);
// console.log(mynum);
// var myb = "99 88";
// var parseint = parseInt(myb);
// console.log(parseint);
// // todo parsefloat will always show the decimal value
// var parsefloatr = parseFloat(myc);
// var myc = "24.74";
// console.log(parsefloatr);

// // todo  controlling the lenght of decimal

// var tofix = 19.88348;
// // todo  tofix.toFixed(2)
// console.log(tofix.toFixed(2));

// // todo while loop

// var whileloop = 10;
// while (whileloop >= 1) {
//   document.write(whileloop + ") Kashan <br />");
//   whileloop--;
// }

// // todo do while loopp

// var dowhile = 1;
// do {
//   document.write(dowhile + ") Adnan <br />");
//   dowhile++;
// } while (dowhile <= 10);

// // todo   todo Getting event Number

// for (let even = 0; even <= 100; even++) {
//   if (even % 2 == 0) {
//     console.log(even);
//   }
// }

// // todo   todo Getting event Number

// for (let odd = 0; odd <= 100; odd++) {
//   if (odd % 2 != 0) {
//     console.log(odd);
//   }
// }

// // todo Nested Loop Table Generator

// for (var table = 1; table <= 100; table = table + 10) {
//   for (var at = table; at < table + 10; at++) {
//     document.write(at + "  ");
//   }
//   document.write( "<br />")
// }


// // todo generating nested loop

// for(var tb = 5; tb >= 1; tb--){
//     for (var index = 1; index <= tb; index++) {
//         document.write(tb);
//     }
//     document.write("<br />");
// }

// // todo arr methods

// let myarrm = ["Kashan","Almira","Fatima","adnan"]; 
// console.log(myarrm);
// myarrm.pop();
// console.log(myarrm);
// myarrm.shift();
// console.log(myarrm);
// myarrm.push("Nazia");
// console.log(myarrm);
// myarrm.unshift("Shahzain");
// console.log(myarrm);
// delete myarrm[0];
// console.log(myarrm)
// myarrm.splice(2)
// console.log(myarrm);
// let myarrmw = ["Kashan","Almira","Fatima","adnan"]; 
// var newarr = myarrmw.slice(0,3);
// console.log(newarr);
//  // todo  Concatinating arrays
//  var doublearr = ["Kashan","Adnan","Fatiam","Kashan","Adnan","Fatima"];
//  var doublearr1 = ["Nazia","Shahzain","Almira"];
//  var doublearr2 = ["Nazia","Shahzain","Almira"];
//  var doublearr3 = doublearr.concat(doublearr1,doublearr2);
//  console.log(doublearr3)
//  // todo  isArray()
// var isarr = "Kashan";
// var checking = Array.isArray(isarr)
// console.log(checking);
// // todo indexOf() & lastIndexOf()
// var indexof = doublearr.indexOf("Fatima", 3);
// console.log(indexof)
// var lastindexof = doublearr.lastIndexOf("Adnan");
// console.log(lastindexof)
// // todo tostriong()
// var d = ["Sangay","Kashan","Adnan"];
// d.toString()
// document.write(d + "<br />")
// // todo  Value OF
// var e = ["Kashan","Adnan","Fatima"]
// e.valueOf()
// document.write(e);
// // todo fill()
// var f = ["Aman","Rehman","Karan"];
// f.fill("Ram")
// document.write(f)
// // todo filter()
// var g = [10,30,45,90,8];
// var adulAge = 18;
// var h = g.filter(checkage);
// function checkage(g) {
//   return g >= 18;
// }
// document.write(h + "<br />");
// // todo for each loop
// var j = ["Sanjay","Aman","Karan"];
// j.forEach(function(valueofs , myindex){
//   document.write(myindex + " : "+valueofs + "<br />")
// })
// // //todo function

// function mynewfunc() {
// //   todo statment here
//   if(a === b){
//     console.log("hello")
//   }
// }
// mynewfunc();

// // todo function with paramaeters

// function helloeve(k,l) {
//     document.write(k + l);
// }
// helloeve(90 ,4);

// // todo  objects

// var myobject = {
//   FirstName: "Kashan",
//   LastName: "Adnan"
// }
// console.log(myobject)
// console.log(myobject.FirstName)

// // todo object of array
// var fmovies = {
//   favMovies: ["Dhoom","Iron man 3","Black Panther"],
//   salary: function(){
//     return 2500;
//   },
//    living : {
//     "city" : "Karachi",
//     "country" : "Pakistan"
//   }
// }
// console.log(fmovies)
// console.log(fmovies.living)

// todo array of object

// var student = [
//   {Name : "Kashan", 
//     LastName : "Adnan",
//     Age: 34,
//     RollNo : 1
//   },
//   {Name : "Kashan", 
//     LastName : "Adnan",
//     Age: 34,
//     RollNo : 1
//   },
//   {Name : "Kashan", 
//     LastName : "Adnan",
//     Age: 34,
//     RollNo : 1
//   }
// ]
// console.log(student[0])

// // todo for in loop

// for (const p in student) {
//   if (Object.hasOwnProperty.call(student, p)) {
//     const element = student[p];
//       console.log(p );
//   }
// }
