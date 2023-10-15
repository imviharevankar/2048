import Grid from "./grid";

const gameBoard = document.getElementById(constants.GAME_BOARD);

const grid = new Grid(gameBoard);

grid.randomEmptyCell().tile = new Tile(gameBoard);
