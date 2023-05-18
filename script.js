const SQUARES = 400;
const COLORS = ["#562c2c", "#F2542D", "#F5DFBB", "#0E9594", "#127475"];

const containerEl = document.querySelector("#container");

for (let i = 0; i < SQUARES; i++) {
  const squareEl = document.createElement("div");
  squareEl.classList.add("square");

  squareEl.addEventListener("mouseover", () => setColor(squareEl));
  squareEl.addEventListener("mouseout", () => removeColor(squareEl));

  containerEl.appendChild(squareEl);

  function getRamdomColor() {
    return COLORS[Math.floor(Math.random() * COLORS.length - 1)];
  }

  function setColor(element) {
    const color = getRamdomColor();
    element.style.background = color;
    element.style.boxshadow = `0 0 2px ${color}, 0 0 10px ${color}`;
  }

  function removeColor(element) {
    element.style.background = "var(--secondary-color)";
    element.style.boxshadow = "0 0 2px var(--tertiary-color)";
  }
}
