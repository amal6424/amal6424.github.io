const up_btn = document.querySelector("#up");
const down_btn = document.querySelector("#down");
const left_btn = document.querySelector("#left");
const right_btn = document.querySelector("#right");
const pause_btn = document.querySelector("#pause");


const current_direction={dx:0,dy:0,isPaused:true};
const game_speed = 300;


let snake = [{ x: 200, y: 200 }];
let food = { x: 0, y: 0 };
let dx = 0;
let dy = 0;
let score = 0;
let gameInterval;

const score_card = document.querySelector("#score-card");
const game_board = document.querySelector("#game-board");
const score_text = "Your score: "

function startGame() {
  resetGame();
  createSnake();
  createFood();
  //gameInterval = setInterval(moveSnake, game_speed);
}

function resetGame() {
  snake = [{ x: 200, y: 200 }];
  dx = 0;
  dy = 0;
  score = 0;
  score_card.textContent = score_text + '0';
  game_board.innerHTML = '';
  current_direction.dx = 0;
  current_direction.dy = 0;
  current_direction.isPaused = true;
  pause_btn.innerHTML = "play";
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
  const LEFT_BORDER = 0;
  const RIGHT_BORDER = 400;
  const TOP_BORDER = 0;
  const BOTTOM_BORDER = 400;
  const head = snake[0];
  return (
    head.x < LEFT_BORDER ||
    head.x >= RIGHT_BORDER ||
    head.y < TOP_BORDER ||
    head.y >= BOTTOM_BORDER ||
    snake.slice(1)
      .some(bodySegment => bodySegment.x === head.x 
      && bodySegment.y === head.y)
  );
}

function endGame() {
  clearInterval(gameInterval);
  alert('Game Over! Your score: ' + score);
  startGame();
}
function event_handler(key){
  const SEGMENT = 20;
  const UP = {dx:0,dy:-SEGMENT};
  const DOWN = {dx:0,dy:SEGMENT};
  const LEFT = {dx:-SEGMENT,dy:0};
  const RIGHT = {dx:SEGMENT,dy:0};
  if(key == 'Pause' || key == ''){
    if(!current_direction.isPaused){
      current_direction.dx = dx;
      current_direction.dy = dy;
      dx = 0;
      dy = 0;
      current_direction.isPaused = true;
      clearInterval(gameInterval);
      pause_btn.innerHTML = "play"
    }else{
      if(current_direction.dx === 0&& current_direction.dy === 0){
        current_direction.dx =  RIGHT.dx;
        current_direction.dy = RIGHT.dy;
      }
      dx = current_direction.dx;
      dy = current_direction.dy;
      current_direction.isPaused = false;
      gameInterval = setInterval(moveSnake, game_speed);
      pause_btn.innerHTML = "pause"
    }
  }else if(current_direction.isPaused){
    return;
  }else if (key == 'ArrowUp' && dy !== SEGMENT) {
    dx = UP.dx;
    dy = UP.dy;
  } else if (key == 'ArrowDown' && dy !== -SEGMENT) {
    dx = DOWN.dx;
    dy = DOWN.dy;
  } else if (key == 'ArrowLeft' && dx !== SEGMENT) {
    dx = LEFT.dx;
    dy = LEFT.dy;
  } else if (key == 'ArrowRight' && dx !== -SEGMENT) {
    dx = RIGHT.dx;
    dy = RIGHT.dy;
  }
}
function main(){
  up_btn.addEventListener("click", ()=>{event_handler("ArrowUp")});
  down_btn.addEventListener("click", ()=>{event_handler("ArrowDown")});
  left_btn.addEventListener("click", ()=>{event_handler("ArrowLeft")});
  right_btn.addEventListener("click", ()=>{event_handler("ArrowRight")});
  pause_btn.addEventListener("click",()=>{
    event_handler("Pause");
  })
  
  document.addEventListener('keydown', function(event) {
    event_handler(event.key);
  });

  startGame();
}
main();