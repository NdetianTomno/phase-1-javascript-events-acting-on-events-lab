// Your code here
const dodger = document.getElementById('dodger');

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  const GAME_WIDTH = 400;
  const DODGER_WIDTH = 40;

function positionToInteger(position) {
  return parseInt(position.split('px')[0]) || 0;
}

function moveDodgerRight() {
  const rightEdge = GAME_WIDTH - DODGER_WIDTH;
  const left = positionToInteger(DODGER.style.left);

  if (left < rightEdge) {
    DODGER.style.left = `${left + 4}px`;
  }
}