// initialize a variable for selecting the square element parent in order to use it to add squares to the grid later on 
let container = document.getElementsByClassName('square-container');

// function to generate a new grid with a width that the user inputs 
function generateGrid(gridWidth) {
    // determines the total number of squares in the grid by squaring the width that the user inputs 
    let numberOfSquares = Math.pow(gridWidth, 2);
    // takes the total fixed width of the container and divides it by the chosen width 
    let squareSize = 595 / gridWidth;

        // for loop creates the total number of square using the numberofSquares variable while using the squareSize variable for the width and height of the individual squares and appends it to the HTML
        for (let i = 0; i < numberOfSquares; i++) {
            let grid = document.createElement('div');
            grid.classList.add('square');
            container[0].appendChild(grid);
            grid.style.cssText = `min-width: ${squareSize.toFixed(2)}px; min-height: ${squareSize.toFixed(2)}px;`;
        }
}
//default grid of 16 squares wide - will show up on page load 
generateGrid(16);
// stores square selecter in a variable 
let squares = document.querySelectorAll('.square');
// uses that variable to iterate through each square in order for them to be selected via an event listener to apply the pixelation function 
squares.forEach(div => div.addEventListener('mouseover',pixelation));
// function to remove the grid
function removeGrid () {
    // stores the number of squares in the childCount variable by counting the amount of child elements there are for the parent container node 
    let childCount = container[0].childElementCount;
    // if statement allows the function to operate only if there are greater than 1 squares currently in the grid  and for loop uses that count to remove all the squares in the grid 
        if (childCount > 0) {
            for (let i = 0; i < childCount; i++) {
            // store selector to select the square class in an element
            let child = document.getElementsByClassName('square');
            // removes square from container parent element 
            container[0].removeChild(child[0]);
            }}
}

// function to apply user Input to grid generation 
function getUserInput () {
    //prompts user to input grid width
    let getUserData = prompt('How wide would you like your grid?');
        // grid cannot be larger than 99 squares wide - causes issues with webpage 
        if (getUserData <= 99) {
        // removes grid first 
        removeGrid();
        // generates grid after container is empty 
        generateGrid(getUserData);
        }
        // prompts alert if previous conditions are not met 
        else {alert('Error')}
    // prompts pixelation effect in order for it to apply to new grid, without this line, I could not get this event listener and function to operate properly on the new grid 
    let squares = document.querySelectorAll('.square');
    squares.forEach(div => div.addEventListener('mouseover',pixelation));
}
// function to apply the mouseover pixelation affect that randomizes the background color of the square using the mouseover event as a trigger 
function pixelation (e) {
    // min and max set the possible values that the random function can call 
    min = Math.ceil(0);
    max = Math.floor(255);
    // three random functions pull 3 completely random numbers that are then later inputted in as RBG values 
    random = Math.floor(Math.random() * (max - min) + min);
    random2 = Math.floor(Math.random() * (max - min) + min);
    random3 = Math.floor(Math.random() * (max - min) + min);
    e.target.style.backgroundColor = `rgb(${random2},${random3}, ${random})`;
}
// button to generate grid
let gridSetup = document.getElementsByClassName('grid-setup');
let setup = gridSetup[0].addEventListener('click',getUserInput);
// button to clear grid 
let clear = document.getElementsByClassName('grid-clear');
let clearGrid = clear[0].addEventListener('click',removeGrid);

