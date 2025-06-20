
const backgrounds = [
  "galaxy.gif",
  "rain.gif"
];

let current = 0;
const body = document.body;
const button = document.getElementById("bgToggle");

function setBackground(index) {
  body.style.backgroundImage = `url('${backgrounds[index]}')`;
}

button.addEventListener("click", () => {
  current = (current + 1) % backgrounds.length;
  setBackground(current);
});

// Set initial background
setBackground(current);
