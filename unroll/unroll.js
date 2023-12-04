function unroll(squareArray) {
    const rows = squareArray.length;
    const cols = squareArray[0].length;
    let top = 0;
    let right = cols-1;
    let bottom = rows-1;
    let left = 0;
    let dir = "right";

    const res = [];

    while (top<=bottom && left<=right) {
        if(dir ==="right") {
            for(let i=left; i<=right;i++) {
                res.push(squareArray[top][i])
            }

            ++top;
            dir = "down"
        } else if(dir ==="down") {
            for(let i=top; i<=bottom;i++) {
                res.push(squareArray[i][right])
            }

            --right;
            dir = "left"
        } else if(dir ==="left") {
            for(let i=right; i>=left;i--) {
                res.push(squareArray[bottom][i])
            }

            --bottom;
            dir = "up"
        } else if(dir ==="up") {
            for(let i=bottom; i>=top;i--) {
                res.push(squareArray[i][left])
            }

            ++left;
            dir = "right"
        }
    }
    return res;
}


module.exports = unroll;
