const audioElement = document.getElementById("audio");
const button = document.getElementById("button");
let joke;
// disable / enable button
function toggleButton(){
    button.disabled=!button.disabled;
}
function test() {
    toggleButton();
  VoiceRSS.speech({
    key: "36ba213ae716422dbe1377b5e1f690df",
    src: joke,
    hl: "en-us",
    v: "Linda",
    r: 0,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
}

const apiURL =
  "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
async function getJokes() {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    joke = data.joke;
    test();
  } catch (error) {
    return "whoops error" + error;
  }
}
button.addEventListener("click", getJokes);
audioElement.addEventListener('ended',toggleButton)

