var now = new Date();
var hour = now.getHours();
document.write(hour + " : ");
var minute = now.getMinutes() +" : ";
document.write(minute)
var second = now.getSeconds() + " : ";
document.write(second)
var millisecond = now.getMilliseconds()  + "<br />";
document.write(millisecond)
document.write(now.toDateString())

