//Detects button clicked using the mouse and plays the relevant sound

var numOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var soundButtons = this.innerHTML;

    keySound(soundButtons);

    buttonAnimation(soundButtons);
  });
}


//Detects key pressed using the keyboard and plays the relevant sound

document.addEventListener("keydown", function(event) {

  keySound(event.key);

  buttonAnimation(event.key);

});

/** All the sounds assigned to a specific key press or click with the
help of a switch statement **/

function keySound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default:
      console.log();
  }
}

/** Adds the shadow animation when a button is clicked or pressed. The button
animation runs after 1ms of the button click**/

function buttonAnimation(currentKey) {
  var activeKey = document.querySelector("." + currentKey);
  activeKey.classList.add("pressed");

  setTimeout(function() {
    activeKey.classList.remove("pressed");
  }, 100);
}
