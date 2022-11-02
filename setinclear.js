var a = 0;
var id = setInterval(Anim, 1000);
function Anim() {
    if(a == 200){
        clearInterval(id)
    }else{ 
        a = a + 10;
        var target = document.getElementById("test");
        target.style.width = a + 'px';
        console.log(a)
    }
} 
//setTimeout() means  this will not appear bar bar ye sirif ek bar appear hoga