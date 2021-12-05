const numberOfButtons = document.querySelectorAll(".drum").length;

function audio(noise) {
  return new Audio("./sounds/" + noise + ".mp3");
}

function playSound(event) {
  switch (this.innerHTML || event.key) {
    case "w":
      audio("tom-1").play();
      buttonAnimation(this.innerHTML || event.key);
      break;
    case "a":
      audio("tom-2").play();
      buttonAnimation(this.innerHTML || event.key);
      break;
    case "s":
      audio("tom-3").play();
      buttonAnimation(this.innerHTML || event.key);
      break;
    case "d":
      audio("tom-4").play();
      buttonAnimation(this.innerHTML || event.key);
      break;
    case "j":
      audio("crash").play();
      buttonAnimation(this.innerHTML || event.key);
      break;
    case "k":
      audio("kick-bass").play();
      buttonAnimation(this.innerHTML || event.key);
      break;
    case "l":
      audio("snare").play();
      buttonAnimation(this.innerHTML || event.key);
      break;
  }
  
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

for (let i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", playSound);
}

document.addEventListener("keydown", playSound);
