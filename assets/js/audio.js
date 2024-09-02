// Mute/unmute audio 
let sound = document.getElementById('audio');
let soundtrackButton = document.getElementById('audio-btn');

function controlMusic() {
    if (sound.muted) {
      sound.muted = false;
      soundtrackButton.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
      sound.play();
    } else {
      sound.muted = true;
      soundtrackButton.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    }
  }


soundtrackButton.addEventListener('click', controlMusic);
 
  