class Path {
  constructor(position, parent = null, visited = new Set()) {
    this.position = position;
    this.parent = parent;
    this.visited = visited;
  }
}

const graph = {
  limit: 7,
};

function traverse(path) {
  let [xPos, yPos] = JSON.parse(path.position);

  let temp = [];

  // Horizontal
  for (let i = -2; i <= 2; i += 4) {
    let xTempPos, yTempPos;
    xTempPos = xPos + i;
    if (xTempPos < 0 || xTempPos > graph.limit) continue;

    for (let j = -1; j <= 1; j += 2) {
      yTempPos = yPos + j;

      if (yTempPos < 0 || yTempPos > graph.limit) continue;

      temp.push(JSON.stringify([xTempPos, yTempPos]));
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
      temp.push(JSON.stringify([xTempPos, yTempPos]));
    }
  }

  temp = temp.filter((element) => (path.visited.has(element) ? false : true));

  return temp;
}

function checkEnd(paths) {
  if (paths.includes(graph.end)) return true;

  return false;
}

function findPath(start, end) {
  let path = new Path(JSON.stringify(start));
  graph.end = JSON.stringify(end);
  const queue = [path];
  path.visited.add(path.position);

  let i = 0;

  while (queue.length !== 0) {
    const paths = traverse(path);
    
    if (paths.includes(graph.end)) {
      console.log(`queue len : ${queue.length}`);
      console.table(queue);
      console.log(path.parent.parent);
      return;
    }
    console.log(paths);
    
    paths.forEach((pos) => {
      const temp = new Path(pos, path);
      for(const key of path.visited.keys()) temp.visited.add(key);
      // temp.visited.add(path.position);  
      temp.visited.add(temp.position);
      queue.push(temp);
    });
    queue.shift();
    path = queue[0];
    //  TESTING
    i++;
  }
}

findPath([0, 0], [7, 7]);
