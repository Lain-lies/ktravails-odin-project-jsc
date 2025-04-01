class Path {
  constructor(position, prev = null) {
    this.prev = null;
    this.position = position;
  }
}

const graph = {
  limit: 7,
  visited: new Set(),
};

function traverse(currentPos) {
  let [xPos, yPos] = currentPos;

  let temp = [];

  // Horizontal
  for (let i = -2; i <= 2; i += 4) {
    let xTempPos, yTempPos;
    xTempPos = xPos + i;
    if (xTempPos < 0 || xTempPos > graph.limit) continue;

    for (let j = -1; j <= 1; j += 2) {
      yTempPos = yPos + j;

      if (yTempPos < 0 || yTempPos > graph.limit) continue;

      temp.push(`[${xTempPos}, ${yTempPos}]`);
    }
  }

  // Vertical
  for (let i = -1; i <= 1; i += 2) {
    let xTempPos, yTempPos;
    xTempPos = xPos + i;
    if (xTempPos < 0 || xTempPos > graph.limit) continue;

    for (let j = -2; j <= 2; j += 4) {
      yTempPos = yPos + j;
      if (yTempPos < 0 || yTempPos > graph.limit) continue;
      temp.push(`[${xTempPos}, ${yTempPos}]`);
    }
  }

  temp = temp.filter((element) =>
    graph.visited.has(`${element}`) ? false : true
  );

  temp.forEach((element) => graph.visited.add(`${element}`));

  return temp;
}

function checkEnd(paths) {
  if (paths.includes(graph.end)) return true;

  return false;
}

function findPath(start, end) {
  const startingPath = new Path(start);
  graph.end = `[${end[0]}, ${end[1]}]`;

  const queue = [startingPath];

  while (queue.length !== 0) {
    const current = queue[0];

    const paths = traverse(current.position);

    if (checkEnd(paths)) {
    }
  }
}

findPath([0, 0], [1, 2]);
