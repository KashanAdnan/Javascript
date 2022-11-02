function CreateCar(name, topSpeed, color, engine, AC, SmartKeySystem) {
  this.name = name,
    this.topSpeed = topSpeed,
    this.color = color,
    run = function () {
      console.log("The Car is Running in TopSpeed " );
      return "You are Driving the Car in localSpeed " + 100;
    },
    stop = function () {
      console.log("The Car is Stopped");
      return "You Stop The Car in Orangi Town Karachi";
    },
    this.engine = engine,
    this.AC = AC,
    this.SmartKeySystem = SmartKeySystem
}


const car1 = new CreateCar("Toyota",433,"Black","v8 Engine","Yes","No");
const car2 = new CreateCar("Nissan",899,"Blue","v10 Engine","Yes","Yes");
const car3 = new CreateCar("Rolls Royace",5000,"Yellow","v14 Engine","Yes","Yes");

console.log(car1.run);
console.log(car2);
console.log(car3);