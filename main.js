// TODO
//Create a 16x16 grid of html divs using JavaScript

    //Add a clear button to the top of the screen that will reset the drawing canvas. Use a button tag and make a javascript function run on click.
    //After clearing add a popup that requests the user input for grid size and updates grid accordingly. max 100
    //Make sure total grid size stays the same.
    //Add rainbow option
    //add grayscale shading option.
    //create CSS styling and illustrations for etch-a-sketch look. Goal is to look like an etch-a-sketch sitting on a table.
    
    let gridSize = 50;
    drawGridCanvas(gridSize);

    function drawGridCanvas(size) {
        let grid = document.createElement("div");
        grid.classList.add('grid');
        document.body.appendChild(grid);

        grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        grid.style.gridTemplatecolumns = `repeat(${size}, 1fr)`;
        grid.style.gridAutoFlow = "column";


        drawGridSquares(grid, gridSize);
    }
    
    function drawGridSquares(grid, numberOfSquares) {
        console.log(numberOfSquares);
        for (let j = 0; j < numberOfSquares; j++) {
            for (let i = 0; i < numberOfSquares; i++) {
                let gridSquare = document.createElement("div");
                gridSquare.classList.add("square");
                grid.appendChild(gridSquare);
                gridSquare.addEventListener('mouseenter', () => {
                    shadeSquare(gridSquare);
                });
            }
        }
    }

    function shadeSquare(location) {
        location.style.backgroundColor = "black";
    }