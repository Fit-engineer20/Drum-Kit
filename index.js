
var totalbutton=document.querySelectorAll(".drum").length;
for(var i=0;i<totalbutton;i++){
document.querySelectorAll(".drum")[i].addEventListener("click", clicked);
}
function clicked(){
  var key= this.innerHTML;
  animation(key);
  sounds(key);
}
document.addEventListener("keydown", keyboard);
function keyboard(event)
{
  animation(event.key);
  sounds(event.key);
}
function sounds(key){
  switch(key)
  {
    case "w": var sound=new Audio("sounds/tom-1.mp3");
             sound.play();
             break;
    case "a": var sound=new Audio("sounds/tom-2.mp3");
             sound.play();
             break;
    case "s": var sound=new Audio("sounds/tom-3.mp3");
             sound.play();
             break;
    case "d": var sound=new Audio("sounds/tom-4.mp3");
             sound.play();
             break;
    case "j": var sound=new Audio("sounds/kick-bass.mp3");
             sound.play();
             break;
    case "k": var sound=new Audio("sounds/snare.mp3");
             sound.play();
             break;
    case "l": var sound=new Audio("sounds/crash.mp3");
             sound.play();
             break;
  }
}

function animation(key){

    var active= document.querySelector("."+key);
    active.classList.add("pressed");
    setTimeout(function(){ active.classList.remove("pressed"); } , 100);
} 
