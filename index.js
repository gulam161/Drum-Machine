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

const innerBtn = document.querySelectorAll(".inner");
// console.log(innerBtn);
innerBtn[0].onclick = () => {
  innerBtn[0].classList.toggle("right-position");
  // console.log("hello");
  // console.log(innerBtn[0].style.right);
  // if (innerBtn[0].style.right === "") {
  //   innerBtn[0].style.position = "absolute";
  //   // innerBtn[0].style.left = "";
  //   innerBtn[0].style.right = "0px";
  // } else {
  //   // innerBtn[0].style.left = "0px";
  //   innerBtn[0].style.right = "";
  //   innerBtn[0].style.position = "absolute";
  // }
};
