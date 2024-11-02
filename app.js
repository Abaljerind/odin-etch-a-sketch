/*
Pseudocode for JavaScript

    Select the Container Element:
        In HTML, create a <div> with a class or ID of "container".
        In JavaScript, select the container element.

    Define Grid Size:
        Set a variable gridSize to 16 (for a 16x16 grid).

    Set Container Style with Flexbox:
        Apply Flexbox properties to the container to make it behave as a grid.
        Set the container’s style to display as flex.
        Use flex-wrap: wrap; to wrap elements to the next line.
        Set width and height of the container to ensure a perfect square.

    Calculate Square Size:
        Set squareSize as the width of the container divided by gridSize.

    Create Grid Squares:
        Loop through a range from 0 to gridSize * gridSize (256 times).
        For each loop iteration:
            Create a new <div>.
            Set its class to "square" for styling.
            Set its width and height to squareSize.
            Add any additional styles (e.g., border, background color).
            Append the square <div> to the container.

    Styling for Squares:
        In CSS, set .square properties to ensure consistent appearance (e.g., background color, border).

    Test and Debug:
        Check the console for errors.
        Ensure the grid displays as expected.

    Create the Button:

    In HTML, add a button with an onclick attribute that triggers a JavaScript function called generateGrid().

    Handle Button Click:

    In the generateGrid() function:
        Use prompt to ask the user for the number of squares per side.
        Limit the grid size to a maximum of 100. If the input exceeds 100, show an alert and set it to 100.
        Clear the existing grid by removing all child elements of the container.

    Generate New Grid:

    Recalculate squareSize so that the total grid width remains constant (e.g., 960px).
    Create the new squares based on the user-defined grid size.
    Append the new squares to the container.
*/

const container = document.querySelector(".container");
const generateGridButton = document.querySelector("#generateGrid");

function generateGrid() {
  const grid = prompt(
    "berapa banyak grid yang mau anda tambahkan? Nilai maksimum nya 100."
  );
  if (+grid > 100 || +grid < 1 || isNaN(+grid))
    return alert("Harap masukkan angka dari 1 sampai 100");

  container.textContent = "";

  const gridSize = +grid;

  for (let i = 1; i <= gridSize * gridSize; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    container.appendChild(div);
  }
}
