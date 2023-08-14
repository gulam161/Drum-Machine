const drumPad = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");

drumPad.forEach((pad) => {
  pad.onclick = () => {
    playSound(pad);
  };
});

const playSound = (pad) => {
  const audio = pad.querySelector(".clip");

  if (audio) {
    if (audio.readyState !== undefined) {
      audio.currentTime = 0;
      audio.play();
      const display = document.querySelector("#display-output");
      display.innerText = audio.id;
    } else {
      console.error("Audio not loaded yet.");
    }
  } else {
    console.error("No audio element found.");
  }
};

const handleToggle = (element) => {
  if (element.style.left == 0) {
    element.style.left = 0;
    element.style.right = "";
  } else if (element.style.right == 0) {
    element.style.right = 0;
    element.style.left = "";
  }
};
