for (var i=0;i<document.querySelectorAll(".drum").length;i++)
    {
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
//        alert("i got clicked");
//        cons.log(this.innerHTML);
        var buttonClicked=this.innerHTML;
        keyPressed(buttonClicked);
        keyAnimation(buttonClicked);
        
}
); 
}
document.addEventListener("keypress",function(event){
//    console.log(event.key);
    keyPressed(event.key);
    keyAnimation(event.key);
})
function keyPressed(key){
    switch(key){
            case "w":
                var tom1 =  new Audio('sounds/jadu.mp3');
                tom1.play();
                break;
            case "a":
                var tom2 =  new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
            case "s":
                var tom3 =  new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
            case "d":
                var tom4 =  new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
            case "j":
                var crash =  new Audio('sounds/crash.mp3');
                crash.play();
                break;
            case "k":
                var kickBass  = new Audio('sounds/Kick-bass.mp3');
                kickBass.play();
                break;
            case "l":
                var Snare = new Audio('sounds/snare.mp3');
                Snare.play();
                break;
            default:
                alert("wrong input");
        }
}
function keyAnimation(btnkey){
   var activeButton = document.querySelector("."+btnkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}