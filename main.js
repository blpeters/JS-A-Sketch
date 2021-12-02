// TODO

    //Figure out how to move the clear button/other controls to be below the canvas.
    //Add rainbow option
    //add grayscale shading option.
    //create CSS styling and illustrations for etch-a-sketch look. Goal is to look like an etch-a-sketch sitting on a table.


    
    let gridSize = 16;
    setupDefaultGrid(gridSize);
 
    let clearBtn = document.querySelector("#clear-grid");
    clearBtn.addEventListener('click', () => {
        clearGrid(); 
        resetGrid();
    });
    
    function resetGrid() {
        let userGridSizeInput = 0;
        do {
            userGridSizeInput = prompt("New Grid Size?: ");
        } while(Number.isInteger(userGridSizeInput) === false && (userGridSizeInput < 1 || userGridSizeInput > 100)); 
              
        //Deletes existing square divs from the DOM to make room for new grid in the container div.
        let squares = document.querySelectorAll(".square");
        squares.forEach((square) => square.remove());
        divideGrid(userGridSizeInput);      
    }

    function setupDefaultGrid(size) {
        let grid = document.createElement("div");
        grid.classList.add('grid');
        document.body.appendChild(grid);
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
                gridSquare.addEventListener('mouseenter', () => {
                    shadeSquare(gridSquare);
                });
            }
        }
    }

    function shadeSquare(location) {
        
        //Add counter to each square to count how many times it has been moused, and increase the shade 10% up to 100% each time.
        //Use counter to determine if it has been oused before or not, and if it has, do not allow a new rainbow color to replace the existing.
        
        let randomRed = Math.floor(Math.random()*255);
        let randomGreen = Math.floor(Math.random()*255);
        let randomBlue = Math.floor(Math.random()*255);
        
        location.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;

        // location.style.backgroundColor = "black";
    }

    function clearGrid() {
        let clearSquares = document.querySelectorAll(".square");
        clearSquares.forEach((square) => square.style.removeProperty("backgroundColor"));
    }