// todo for in loop

    let obj = {
      Name : "Kashan", 
      LastName : "Adnan",
      Age: 34,
      RollNo : 1
    }
  

for (const key in obj) {
   document.write(key + " : " +obj[key] + "<br />")
}