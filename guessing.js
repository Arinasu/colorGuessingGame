let square = document.querySelectorAll(".square");
let randomColor = document.querySelector("#randomColor");

let red = randomBasic();
let green = randomBasic();
let blue = randomBasic();
let position = Math.floor(Math.random() * (square.length));

for (i = 0; i < (square.length); i++) {
  if (i === position) {
    // square[i].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    setColor(square[i], red, green, blue);
  } else {
    let color1 = randomBasic();
    let color2 = randomBasic();
    let color3 = randomBasic();
    setColor(square[i], color1, color2, color3);
    // square[i].style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
  }
}

randomColor.textContent = `RGB(${red}, ${green}, ${blue})`;

function randomBasic() {
  return Math.floor(Math.random() * 256);
}

function setColor(element, red, green, blue) {
  element.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}



