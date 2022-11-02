// todo  if statment in js

var a = prompt("Enter The Value");
var b = 67;
if (a === b) {
  alert("Correct");
}
if (a !== b) {
  alert("Wrong");
}

// todo  comparison operators

if (a < b) {
  alert("It's Less Than b");
}
if (a > b) {
  alert("It's Greater Than b");
}
if (a <= b) {
  alert("It's is less than or equal to b");
}
if (a >= b) {
  alert("It's is gr'eater than or equal to b");
}

// todo  if...else and else if statements

var mybrothername = prompt("Write My Brother Name");
if (mybrothername === "Shahzain") {
  alert("Thats Correct");
} // todo  else if is leye use hota he kue ke agar if
// todo  ke statement true he to else if chale ga phir
// todo  else chalega
else if (mybrothername === "Kashan") {
  alert("Incorrect But Close !");
}
// todo  iagar else if flase he to ye else if ko chalae ga leken
// todo  agar ye true ho gya to else cale ga
else {
  alert("Wrong");
}

// todo  testing sets of condition
if (weight === mynumber && minus === plus) {
  alert("Correct");
}
if (weight !== mynumber || minus !== plus) {
  alert("Incorrect");
}
