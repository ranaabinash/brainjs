const picked = document.getElementById("color");
const dark = document.getElementById("dark");
const white = document.getElementById("white");
const outputDiv = document.getElementById("output");
const textDiv = document.getElementById("text");
let color, backgroundColor;
picked.addEventListener(
  "input",
  function () {
    backgroundColor = picked.value;
    color = getRgb(picked.value);
    colorTest();
  },
  false
);

function getRgb(hex) {
  let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: Math.round(parseInt(result[1], 16) / 2.55) / 100,
        g: Math.round(parseInt(result[2], 16) / 2.55) / 100,
        b: Math.round(parseInt(result[3], 16) / 2.55) / 100,
      }
    : null;
}

function colorTest() {
  const net = new brain.NeuralNetwork();
  net.train([
    { input: { r: 0.06, g: 0.06, b: 0.06 }, output: { black: 1 } },
    { input: { r: 0.53, g: 0.49, b: 0.49 }, output: { white: 1 } },
    { input: { r: 0.27, g: 0.25, b: 0.25 }, output: { black: 1 } },
    { input: { r: 0.75, g: 0.71, b: 0.71 }, output: { white: 1 } },
    { input: { r: 0.22, g: 0.14, b: 0.14 }, output: { black: 1 } },
    { input: { r: 0.49, g: 0.11, b: 0.11 }, output: { black: 1 } },
    { input: { r: 0.35, g: 0.31, b: 0.31 }, output: { black: 1 } },
    { input: { r: 0.48, g: 0.24, b: 0.24 }, output: { black: 1 } },
    { input: { r: 0.5, g: 0.5, b: 1.0 }, output: { white: 1 } },
    { input: { r: 0.64, g: 0.6, b: 0.6 }, output: { white: 1 } },
    { input: { r: 0.6, g: 0.6, b: 0.6 }, output: { white: 1 } },
    { input: { r: 0.84, g: 0.52, b: 0.52 }, output: { white: 1 } },
    { input: { r: 0.91, g: 0.65, b: 0.65 }, output: { white: 1 } },
    { input: { r: 0.72, g: 0.22, b: 0.22 }, output: { black: 1 } },
    { input: { r: 0.36, g: 0.14, b: 0.14 }, output: { black: 1 } },
    { input: { r: 0.33, g: 0.25, b: 0.25 }, output: { black: 1 } },
    { input: { r: 0.84, g: 0.78, b: 0.78 }, output: { white: 1 } },
    { input: { r: 0.87, g: 0.31, b: 0.31 }, output: { white: 1 } },
    { input: { r: 0.07, g: 0.05, b: 0.05 }, output: { black: 1 } },
    { input: { r: 0.03, g: 0.01, b: 0.01 }, output: { black: 1 } },
    { input: { r: 0.96, g: 0.04, b: 0.04 }, output: { black: 1 } },
    { input: { r: 0.87, g: 0.41, b: 0.41 }, output: { white: 1 } },
    { input: { r: 0.66, g: 0.14, b: 0.14 }, output: { black: 1 } },
    { input: { r: 0.58, g: 0.02, b: 0.02 }, output: { black: 1 } },
    { input: { r: 0.41, g: 0.05, b: 0.05 }, output: { black: 1 } },
    { input: { r: 0.7, g: 0.38, b: 0.38 }, output: { white: 1 } },
    { input: { r: 0.6, g: 0.4, b: 0.4 }, output: { white: 1 } },
    { input: { r: 0.46, g: 0.38, b: 0.38 }, output: { black: 1 } },
    { input: { r: 0.45, g: 0.17, b: 0.17 }, output: { black: 1 } },
    { input: { r: 0.27, g: 0.03, b: 0.03 }, output: { black: 1 } },
    { input: { r: 1, g: 0.94, b: 0.94 }, output: { white: 1 } },
    { input: { r: 0.96, g: 0.96, b: 0.96 }, output: { white: 1 } },
    { input: { r: 0.58, g: 0.51, b: 0.51 }, output: { white: 1 } },
    { input: { r: 0.68, g: 0.32, b: 0.32 }, output: { white: 1 } },
    { input: { r: 0.79, g: 0.69, b: 0.69 }, output: { white: 1 } },
    { input: { r: 0.36, g: 0.32, b: 0.32 }, output: { black: 1 } },
    { input: { r: 0.58, g: 0.08, b: 0.08 }, output: { black: 1 } },
    { input: { r: 0.35, g: 0.03, b: 0.03 }, output: { black: 1 } },
    { input: { r: 0.31, g: 0.09, b: 0.09 }, output: { black: 1 } },
    { input: { r: 0.95, g: 0.51, b: 0.51 }, output: { white: 1 } },
    { input: { r: 0.95, g: 0.62, b: 0.62 }, output: { white: 1 } },
    { input: { r: 0.73, g: 0.47, b: 0.47 }, output: { white: 1 } },
    { input: { r: 0.83, g: 0.33, b: 0.33 }, output: { white: 1 } },
    { input: { r: 0.64, g: 0.25, b: 0.25 }, output: { black: 1 } },
    { input: { r: 0.59, g: 0.37, b: 0.37 }, output: { white: 1 } },
  ]);
  if (!color) return;
  const output = net.run(color);
  dark.innerText = `Dark: ${output.black}`;
  white.innerText = `White: ${output.white}`;
  outputDiv.style.backgroundColor = backgroundColor;
  if (output.black <= 0.5) {
    console.log(`{ input: ${JSON.stringify(color)}, output: { white: 1 } },`);
    textDiv.innerText = "The choice of color is light";
    textDiv.style.color = "black";
  } else {
    console.log(`{ input: ${JSON.stringify(color)}, output: { black: 1 } },`);
    textDiv.innerText = "The choice of color is dark.";
    textDiv.style.color = "white";
  }
}
