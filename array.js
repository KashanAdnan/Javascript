// todo arr methods

let myarrm = ["Kashan","Almira","Fatima","adnan"]; 
console.log(myarrm);
myarrm.pop();
console.log(myarrm);
myarrm.shift();
console.log(myarrm);
myarrm.push("Nazia");
console.log(myarrm);
myarrm.unshift("Shahzain");
console.log(myarrm);
delete myarrm[0];
console.log(myarrm)
myarrm.splice(2)
console.log(myarrm);
let myarrmw = ["Kashan","Almira","Fatima","adnan"]; 
var newarr = myarrmw.slice(0,3);
console.log(newarr);
 // todo  Concatinating arrays
 var doublearr = ["Kashan","Adnan","Fatiam","Kashan","Adnan","Fatima"];
 var doublearr1 = ["Nazia","Shahzain","Almira"];
 var doublearr2 = ["Nazia","Shahzain","Almira"];
 var doublearr3 = doublearr.concat(doublearr1,doublearr2);
 console.log(doublearr3)
 // todo  isArray()
var isarr = "Kashan";
var checking = Array.isArray(isarr)
console.log(checking);
// todo indexOf() & lastIndexOf()
var indexof = doublearr.indexOf("Fatima", 3);
console.log(indexof)
var lastindexof = doublearr.lastIndexOf("Adnan");
console.log(lastindexof)
// todo tostriong()
var d = ["Sangay","Kashan","Adnan"];
d.toString()
document.write(d + "<br />")
// todo  Value OF
var e = ["Kashan","Adnan","Fatima"]
e.valueOf()
document.write(e);
// todo fill()
var f = ["Aman","Rehman","Karan"];
f.fill("Ram")
document.write(f)
// todo filter()
var g = [10,30,45,90,8];
var adulAge = 18;
var h = g.filter(checkage);
function checkage(g) {
  return g >= 18;
}
document.write(h + "<br />");
// todo  array in js we have array in js

var myarr = ["Kashan", "Adnan", "Fatima", "Almira"];
console.log(myarr);

// todo adding and removing in arraty

myarr.pop();
myarr.push("Shahzain");
myarr.shift();
myarr.unshift("Nazia");
myarr.splice(0, 1);
var myslice = myarr.slice(1, 3);
console.log(myslice);