/**
 * 
 * @param {number [][]} grid 
 * @return {number}
 */
var islandPerimeter = function (grid) {
    let perimeter = 0;
    let width = grid[0].length;
    let height = grid.length;
    let arr = [];
    for (let i = 0; i < width; i++) {
        arr.push(0);
    }
    grid.push(arr);
    grid.unshift(arr);
    for (let i = 1; i <= height; i++) {
        for (let j = 0; j < width; j++) {
            if (grid[i][j] === 1) {
                if (!(grid[i][j + 1] === 1)) {
                    perimeter++;
                }
                if (!(grid[i][j - 1] === 1)) {
                    perimeter++;
                }
                if (!(grid[i + 1][j] === 1)) {
                    perimeter++;
                }
                if (!(grid[i - 1][j] === 1)) {
                    perimeter++;
                }
            }
        }
    }
    return perimeter;
};



console.log(islandPerimeter([[0, 1, 0, 0],
                             [1, 1, 1, 0],
                             [0, 1, 0, 0],
                             [1, 1, 0, 0]]));