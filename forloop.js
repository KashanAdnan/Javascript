// todo for loop

for (let i = 0; i < myarr.length; i++) {
  console.log(myarr[i]);
}

// todo  flages in loop

var fruits = ["Apple", "mango", "pappaya", "watermelon", "mango"];
var matchfound = false;
for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === "Apple") {
    matchfound = true;
    document.write(fruits[i] + "is Found");
    // todo  break in loop
    break;
  }
}
if (matchfound == false) {
  document.write("Not Found");
}

// todo  .lenght in loop

for (let i = 0; i < fruits.length; i++) {
  const element = fruits[i];
  console.log(element);
}
// todo Nested Loop Table Generator

for (var table = 1; table <= 100; table = table + 10) {
  for (var at = table; at < table + 10; at++) {
    document.write(at + "  ");
  }
  document.write("<br />");
}
// todo generating nested loop

for (var tb = 5; tb >= 1; tb--) {
  for (var index = 1; index <= tb; index++) {
    document.write(tb);
  }
  document.write("<br />");
}
