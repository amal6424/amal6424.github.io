const up_btn = document.querySelector("#up");
const down_btn = document.querySelector("#down");
const left_btn = document.querySelector("#left");
const right_btn = document.querySelector("#right");


let snake = [{ x: 200, y: 200 }];
let food = { x: 0, y: 0 };
let dx = 0;
let dy = 0;
let score = 0;
let gameInterval;

const score_card = document.querySelector("#score-card");
const game_board = document.querySelector("#game-board");
const score_text = "Your score: "
startGame();
function startGame() {
  resetGame();
  createSnake();
  createFood();
  gameInterval = setInterval(moveSnake, 100);
}

function resetGame() {
  snake = [{ x: 200, y: 200 }];
  dx = 0;
  dy = 0;
  score = 0;
  score_card.textContent = score_text + '0';
  game_board.innerHTML = '';
  clearInterval(gameInterval);
}

function createSnake() {
  snake.forEach(segment => {
    const snakeElement = document.createElement('div');
    snakeElement.style.left = segment.x + 'px';
    snakeElement.style.top = segment.y + 'px';
    snakeElement.classList.add('snake');
    game_board.appendChild(snakeElement);
  });
}

function createFood() {
  const x = Math.floor(Math.random() * 20) * 20;
  const y = Math.floor(Math.random() * 20) * 20;
  food = { x, y };
  const foodElement = document.createElement('div');
  foodElement.style.left = x + 'px';
  foodElement.style.top = y + 'px';
  foodElement.classList.add('food');
  game_board.appendChild(foodElement);
}

function moveSnake() {
  const head = { x: snake[0].x + dx, y: snake[0].y + dy };
  snake.unshift(head);
  if (head.x === food.x && head.y === food.y) {
    score++;
    createFood();
    score_card.textContent = score_text + score;
  } else {
    snake.pop();
  }
  if (checkCollision()) {
    endGame();
  } else {
    updateGame();
  }
}

function updateGame() {
  const gameBoard = game_board;
  gameBoard.innerHTML = '';
  let isHead = true;
  snake.forEach(segment => {
    const snakeElement = document.createElement('div');
    snakeElement.style.left = segment.x + 'px';
    snakeElement.style.top = segment.y + 'px';
    snakeElement.classList.add('snake');
    if(isHead){
      snakeElement.style.backgroundColor = "purple"
      isHead = false;
    }
    gameBoard.appendChild(snakeElement);
  });
  const foodElement = document.createElement('div');
  foodElement.style.left = food.x + 'px';
  foodElement.style.top = food.y + 'px';
  foodElement.classList.add('food');
  gameBoard.appendChild(foodElement);
}

function checkCollision() {
  const head = snake[0];
  return (
    head.x < 0 ||
    head.x >= 400 ||
    head.y < 0 ||
    head.y >= 400 ||
    snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)
  );
}

function endGame() {
  clearInterval(gameInterval);
  alert('Game Over! Your score: ' + score);
}
function event_handler(key){
  const SEGMENT = 20;
  if (key == 'ArrowUp' && dy !== SEGMENT) {
    dx = 0;
    dy = -SEGMENT;
  } else if (key == 'ArrowDown' && dy !== -SEGMENT) {
    dx = 0;
    dy = SEGMENT;
  } else if (key == 'ArrowLeft' && dx !== SEGMENT) {
    dx = -SEGMENT;
    dy = 0;
  } else if (key == 'ArrowRight' && dx !== -SEGMENT) {
    dx = SEGMENT;
    dy = 0;
  }
}
document.addEventListener('keydown', function(event) {
  event_handler(event.key);
});
function main(){
  up_btn.addEventListener("click", ()=>{event_handler("ArrowUp")});
  down_btn.addEventListener("click", ()=>{event_handler("ArrowDown")});
  left_btn.addEventListener("click", ()=>{event_handler("ArrowLeft")});
  right_btn.addEventListener("click", ()=>{event_handler("ArrowRight")});
}
main();