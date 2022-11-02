class RailWayForm {
  submit() {
    alert(this.name + " : Your Form is Subitted ! On Train No : " + this.train);
  }
  cancel() {
    alert(this.name + " : Your Form is Canceld ! On Tarin No : "  + this.train);
  }
  fill(name , trainnum) {
    this.name = name;
    this.train = trainnum;
  }
}
let Kashan = new RailWayForm();
Kashan.fill("Kashan", 145316);
let Harry1 = new RailWayForm();
let Harry2 = new RailWayForm();
Harry1.fill("Harry", 222420);
Harry2.fill("Harry", 2229211);

Kashan.submit();
Harry1.submit();
Harry2.submit();
Harry1.cancel();
