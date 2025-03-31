class Path {
  constructor(x, y) {
    this.prev = null;
    this.currentPosition = [x, y];
    this.children = [];
  }
}
const limit = 7;
const visited = new Set();

// function findPath(path, end){

//     let [xStart , yStart] = path.currentPosition;
//     let [xEnd, yEnd] = end;

//     const visited = new Set();

// }

function traverse(currentPos) {
  let [xPos, yPos] = currentPos;

  // Horizontal
  for (let i = -2; i <= 2; i += 4) {
    let xTempPos, yTempPos;
    xTempPos = xPos + i;
    if (xTempPos < 0 || xTempPos > limit) {
      console.log(1);
      continue;
    }

    for (let j = -1; j <= 1; j += 2) {
      yTempPos = yPos + j;
      console.log(yTempPos);

      if (yTempPos < 0 || yTempPos > limit) {
        console.log(2);
        continue;
      }
      visited.add(`[${xTempPos}, ${yTempPos}]`);
    }
  }

  // Vertical
  for (let i = -1; i <= 1; i += 2) {
    let xTempPos, yTempPos;
    xTempPos = xPos + i;
    if (xTempPos < 0 || xTempPos > limit) continue;

    for (let j = -2; j <= 2; j += 4) {
      yTempPos = yPos + j;
      if (yTempPos < 0 || yTempPos > limit) continue;
      visited.add(`[${xTempPos}, ${yTempPos}]`);
    }
  }
}

traverse([0, 0]);
console.log(visited);
console.log(visited.keys());

/*

    xPosition - 2 , yPosition - 1
    xPosition - 2 , yPosition + 1
    xPosition + 2 , yPosition - 1 
    xPosition + 2 , yPosition + 1

    xPosition - 1 , yPosition + 2
    xPosition - 1,  yPosition - 2
    xPosition + 1 , yPosition + 2
    xPosition + 1 , yPosition - 2


*/
