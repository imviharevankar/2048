import Cell from "./cell";

const { GRID_SIZE, CELL_SIZE, CELL_GAP } = constants;

export default class Grid {
    constructor(gridElement) {
        gridElement.style.setProperty("--grid-size", `${GRID_SIZE}vmin`);
        gridElement.style.setProperty("--cell-size", `${CELL_SIZE}vmin`);
        gridElement.style.setProperty("--cell-gap", `${CELL_GAP}vmin`);
        this.cells = createCellElements(gridElement).map((cellElement, index) => {
            return new Cell(cellElement, index % GRID_SIZE, Math.floor(index / GRID_SIZE));
        });
    };

    get #emptyCells() {
        return this.cells.filter((cell) => cell.tile === null);
    };

    randomEmptyCell() {
        const randomIndex = Math.floor((Math.random() * this.#emptyCells.length));
        return this.#emptyCells[randomIndex];
    };

    
};

function createCellElements(gridElement) {
    const cells = [];

    for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cells.push(cell);
        gridElement.append(cell);
    }

    return cells;
}

