// TODO

//add grayscale shading option.
//Add functionality to toggle between shading styles.

//create CSS styling and illustrations for etch-a-sketch look. Goal is to look like an etch-a-sketch sitting on a table.

let gridSize = 50;
makeGrid(gridSize);

let rightKnobAngle = 0;

let clearBtn = document.querySelector("#clear-grid");
clearBtn.addEventListener("click", () => {
  clearGrid();
  resetGrid();
});

function resetGrid() {
  let userGridSizeInput = 0;
  do {
    userGridSizeInput = prompt("New Grid Size?: ");
  } while (
    Number.isInteger(userGridSizeInput) === false &&
    (userGridSizeInput < 1 || userGridSizeInput > 100)
  );

  //Deletes existing square divs from the DOM to make room for new grid in the container div.
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => square.remove());
  divideGrid(userGridSizeInput);
}

function makeGrid(size) {
  let grid = document.createElement("div");
  grid.classList.add("grid");
  let frame = document.querySelector(".frame");
  frame.prepend(grid);
  divideGrid(size);
}

function divideGrid(size) {
  let grid = document.querySelector(".grid");
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  grid.style.gridTemplatecolumns = `repeat(${size}, 1fr)`;
  grid.style.gridAutoFlow = "column";

  drawGridSquares(grid, size);
}

function drawGridSquares(grid, numberOfSquares) {
  for (let j = 0; j < numberOfSquares; j++) {
    for (let i = 0; i < numberOfSquares; i++) {
      let gridSquare = document.createElement("div");
      gridSquare.classList.add("square");
      grid.appendChild(gridSquare);
      gridSquare.addEventListener("mouseenter", () => {
        shadeSquare(gridSquare);
      });
    }
  }
}

function turnKnobs() {
  let canvas = document.querySelector(".grid");
  canvas.addEventListener("mouseup", rotateKnobUp());

  function rotateKnobUp() {
    let angleChange = 10;
    rightKnobAngle += angleChange;
    let rightKnob = document.querySelector(".knob-right");
    rightKnob.style = `transform: rotate(${rightKnobAngle}deg)`;
    let leftKnob = document.querySelector(".knob-left");
    leftKnob.style = `transform: rotate(${rightKnobAngle}deg)`;
  }
}
function shadeSquare(location) {
  turnKnobs();

  //SHADING OPTION: increase the shade 10% up to 100% each time.

  if (document.getElementById("black").checked) {
    location.style.backgroundColor = "rgba(0,0,0,1.0)";
  } else if (document.getElementById("rainbow").checked) {
    let randomRed = Math.floor(Math.random() * 255);
    let randomGreen = Math.floor(Math.random() * 255);
    let randomBlue = Math.floor(Math.random() * 255);

    location.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
  } else {
    let currentColor = location.style.backgroundColor;
    var alpha = currentColor.match(/[.?\d]+/g);
    console.log(alpha);
    var rgb = currentColor.match(/\d+/g);
    console.log(rgb);

    if (alpha < 1) {
      alpha += 0.1;
    }

    console.log("shading...");
  }
}

function clearGrid() {
  let clearSquares = document.querySelectorAll(".square");
  clearSquares.forEach((square) =>
    square.style.removeProperty("backgroundColor")
  );
}
