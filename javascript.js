/// This function creates the grid
function createGrid(size) {
    for (let i = 0; i < (size * size); i++) {
        let grid = document.createElement("div");
        let gridWidth = `calc(100% / ${size} - 1px)`;
        grid.style.flexBasis = gridWidth;
        grid.style.paddingTop = gridWidth;
        grid.classList.add("grid");
        container.appendChild(grid);
    }

    const gridItems = document.querySelectorAll(".grid");

    gridItems.forEach((div) => {
            div.addEventListener("mouseover", () => {
            div.style.backgroundColor = getRandomColor();
        });
    });
}

/// This function refreshes the grid with the new squares
function editGrid() {
    let sign = prompt("Enter the number of squares per side for the new grid (Max: 100): ");

    if (sign > 100 || isNaN(sign) || sign < 1) {
        alert("Invalid input. Please try again.");
    } else {
        refresh();
        createGrid(sign);
    }
}

/// This function refreshes the grid
function refresh() {
  document
    .querySelectorAll(".grid")
    .forEach((e) => e.parentNode.removeChild(e));
}

const container = document.querySelector(".container");
const body = document.querySelector("body");
const button = document.createElement("button");
button.textContent = "Edit Grid";
body.insertBefore(button, container);

createGrid(16);

button.addEventListener("click", () => {
    editGrid();
});

function getRGBNum() {
  return Math.floor(Math.random() * 256);
}

function getRandomColor() {
    return "rgb(" + getRGBNum() + "," + getRGBNum() + "," + getRGBNum() + ")";
}