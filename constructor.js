function Person(Name,eyecolor,age) {
    this.name = Name;
    this.eyeColor = eyecolor;
    this.age = age;
    this.updateAge = function () {
        return ++this.age;
    }
}
let person01 = new Person("Kashan","black",11);

person01.Firstname = function () {
    return this.name
}
console.log(person01.Firstname());  