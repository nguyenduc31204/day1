var form1 = document.querySelector("#form1");
var form2 = document.querySelector("#form2");
var form3 = document.querySelector("#form3");
var back1 = document.querySelector("#back1");
var back2 = document.querySelector("#back2");
var next1 = document.querySelector("#next1");
var next2 = document.querySelector("#next2");

back2.onclick = function(){
    form3.style.left = "450px";
    form2.style.left = "40px";
}

back1.onclick = function(){
    form2.style.left = "450px";
    form1.style.left = "40px";
}

next1.onclick = function(){
    form1.style.left = "-450px";
    form2.style.left = "40px";
}
next2.onclick = function(){
    form2.style.left = "-450px";
    form3.style.left = "40px";
}