
//Buttons with numbers
document.getElementById("btn0").onclick = function(){v("0")}
document.getElementById("btn1").onclick = function(){v("1")}
document.getElementById("btn2").onclick = function(){v("2")}
document.getElementById("btn3").onclick = function(){v("3")}
document.getElementById("btn4").onclick = function(){v("4")}
document.getElementById("btn5").onclick = function(){v("5")}
document.getElementById("btn6").onclick = function(){v("6")}
document.getElementById("btn7").onclick = function(){v("7")}
document.getElementById("btn8").onclick = function(){v("8")}
document.getElementById("btn9").onclick = function(){v("9")}

//Buttons with symbols
document.getElementById("btn+").onclick = function(){v("+")}
document.getElementById("btn-").onclick = function(){v("-")}
document.getElementById("btn/").onclick = function(){v("/")}
document.getElementById("btnE").onclick = function(){e()}
document.getElementById("btnc").onclick = function(){c("")}
document.getElementById("btnx").onclick = function(){v("*")}




function c(val){
    document.getElementById("d").value=val;
}
function v(val){
    document.getElementById("d").value+=val;
}
function e() { 
    try 
    { 
        c(eval(document.getElementById("d").value)) 
    } 
    catch(e) {
        c('Error') 
    } 
}  