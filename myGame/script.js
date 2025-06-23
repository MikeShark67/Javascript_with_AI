const board = document.getElementById("game-board");
const status = document.getElementById("status");

// Simple 10x10 dungeon map
const map = [
  "##########",
  "#        #",
  "#  ##    #",
  "#    #   #",
  "# ## # T #",
  "#    #   #",
  "###  ######",
  "#    #    #",
  "#  H      #",
  "##########"
];

let playerPos = { x: 3, y: 8 };

function drawBoard() {
  board.innerHTML = "";
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      const char = map[y][x];

      if (x === playerPos.x && y === playerPos.y) {
        cell.classList.add("hero");
        cell.textContent = "🧍";
      } else if (char === "#") {
        cell.classList.add("wall");
      } else if (char === "T") {
        cell.classList.add("treasure");
        cell.textContent = "💎";
      }

      board.appendChild(cell);
    }
  }
}

function move(dx, dy) {
  const newX = playerPos.x + dx;
  const newY = playerPos.y + dy;

  if (map[newY][newX] === "#") return; // wall collision

  playerPos = { x: newX, y: newY };
  drawBoard();

  if (map[newY][newX] === "T") {
    status.textContent = "🎉 You found the treasure!";
    document.removeEventListener("keydown", handleKeydown);
  }
}

function handleKeydown(e) {
  switch (e.key) {
    case "ArrowUp":
      move(0, -1);
      break;
    case "ArrowDown":
      move(0, 1);
      break;
    case "ArrowLeft":
      move(-1, 0);
      break;
    case "ArrowRight":
      move(1, 0);
      break;
  }
}

document.addEventListener("keydown", handleKeydown);
drawBoard();