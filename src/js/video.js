export default () => {
  const video = document.querySelector("#video");
  const playButton = document.querySelector(".play-button");
  const filter = document.querySelector(".filter");

  playButton.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      filter.style.display = "none";
    } else {
      video.pause();
    }
  });

  video.addEventListener("play", () => {
    playButton.classList.add("playing");
  });

  video.addEventListener("pause", () => {
    playButton.classList.remove("playing");
  });

  video.addEventListener("mouseenter", () => {
    if (video.paused) {
      video.controls = false;
    } else {
      video.controls = true;
    }
  });

  video.addEventListener("mouseleave", () => {
    if (video.paused) {
      video.controls = false;
    } else {
      video.controls = true;
    }
  });

}