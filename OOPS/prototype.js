let a = {
    name2  : "Kashan",
    language : "Javascript"
}
console.log(a);
let p  = {
    run : () =>{
        alert("This Is P In This p You Are Running !")
    }
}
a.__proto__ = p;

p.__proto__  = {
    name : "Harry"
}

console.log(a.name)

a.run()