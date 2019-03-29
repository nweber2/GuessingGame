function Ytoplay(){
    document.getElementById("two").style.display = "block";
}

function Ntoplay(){
    window.alert("come on man");
}
var answer = Math.floor((Math.random() * 25) + 1);
var guessCount = 0;

function Genter(){
    var Gnumber = document.getElementById("Gnumber").value;
    
    if(Gnumber<answer){
        guessCount = guessCount  + 1;
        document.getElementById("highorlow").innerHTML="too low go higher" + " | " + "Guesses: " + guessCount;
        document.getElementById("Gnumber").value="";
        document.getElementById("Gnumber").focus();
    }else if(Gnumber>answer){
        guessCount = guessCount + 1;
        document.getElementById("highorlow").innerHTML="too high go lower" + " | " + "Guesses: " + guessCount;
        document.getElementById("Gnumber").value="";
        document.getElementById("Gnumber").focus();
    }else if(Gnumber==answer){
        guessCount = guessCount + 1;
        document.getElementById("highorlow").innerHTML="good job you did it" + " | " + "Guesses: " + guessCount;
         document.getElementById("Gnumber").value="";
        document.getElementById("Gnumber").focus();
    }
}
