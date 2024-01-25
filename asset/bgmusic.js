let sounds = new Array(
  new Audio("/sound/background/Funny Children by MokkaMusic.mp3"),
  new Audio("/sound/background/Funny Piano and Marimba by MokkaMusic.mp3"),
  new Audio("/sound/background/Happy Cooking Food by Infraction Best Time.mp3"),
  new Audio("/sound/background/Happy Cooking Hip-Hop Kids by Infraction.mp3"),
  new Audio("/sound/background/Happy Kids Piano and Bells by MokkaMusic.mp3"),
  new Audio("/sound/background/Happy Vlog by MokkaMusic.mp3")
);

let current = random(0);
let paused = true;

// set event handlers on all audio objects
for (let s of sounds) {
  s.addEventListener("ended", ended);
  s.addEventListener("play", play);
  s.addEventListener("pause", pause);
}

updateVolume();
sounds[current].load();
sounds[current].play();



if (!navigator.getAutoplayPolicy) {
  console.log("navigator.getAutoplayPolicy() not supported");
} else {
  console.log("navigator.getAutoplayPolicy() is supported.");
}

// handle button click
function playPause() {
  if (paused) {
    sounds[current].play();
    btn.innerText = "pause";
    paused = false;
  } else {
    sounds[current].pause();
    btn.innerText = "play";
    paused = true;
  }
}

// handle button skip
function skip() {
  if (!paused) playPause();
  document.getElementById(current + "").classList.remove("playing");
  document.getElementById(current + "").classList.remove("paused");
  current = (current + 1) % sounds.length;
  playPause();
}

function ended(e) {
  document.getElementById(current + "").classList.remove("playing");
  document.getElementById(current + "").classList.remove("paused");
  /*i++;
  if (i >= sounds.length) //loop
    i = 0;
  */
  current = random(current); // shuffle

  paused = true;
  playPause();
}

function play() {
  document.getElementById(current + "").classList.add("playing");
  document.getElementById(current + "").classList.remove("paused");
}

function pause() {
  document.getElementById(current + "").classList.add("paused");
  document.getElementById(current + "").classList.remove("playing");
}

function random(i) {
  let next = i;
  while (next == i) next = Math.floor(Math.random() * sounds.length);
  return next;
}

function updateVolume() {
  for (let s of sounds) {
    s.volume = volume.value;
  }
}

