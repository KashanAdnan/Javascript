// TODO targetting DOM 

element = document.createElement('input');
var myelem = document.getElementById("myelem")
var placeholder = document.createAttribute("placeholder","Enter Your name");
console.log(placeholder)
console.log(element)
myelem.appendChild(element)
var element;
var text = document.createTextNode("Enter Your Name");