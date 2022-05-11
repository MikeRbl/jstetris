document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')
  let squares = Array.from(document.querySelectorAll('.grid div'))
  const scoreDisplay = document.querySelector('#score')
  const startBtn = document.querySelector('#start-button')
  const width = 10

  //the Tetrominoes
  const ltetromino = [
    [1, width+1, width*2+1, 2],
    [width, width+1, width+2, width*2+2],
    [1, width+1, width*2+1, width*2],
    [width, width*2, width*2+1, width*2+2]
  ]

  const zTetromino = [
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1],
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1]
  ]

  const tTetromino = [
    [1,width,width+1,width+2],
    [1,width+1,width+2,width*2+1],
    [width,width+1,width+2,width*2+1],
    [1,width,width+1,width*2+1]
  ]

  const oTetromino = [
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1]
  ]

  const iTetromino = [
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3],
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3]
  ]
  const TheTetrominoes = [ltetromino, zTetromino, tTetromino, oTetromino, iTetromino]
  
  let currentPosition = 4
  let currentRotation = 0

  //Random tretromino
  let random = Math.floor(Math.random()*TheTetrominoes.length)
  let current = TheTetrominoes[random][currentRotation]

  // Draw the Tetromino
  function draw() {
    current.forEach(index => {
      squares[currentPosition + index].classList.add('tetromino')
      })
  }
// Undraw the Tetrominoe
function undraw() {
  current.forEach(index => {
    squares[currentPosition + index].classList.remove('tetromino')
  })
}
// Make the tetromino move down every second
timerID = setInterval(moveDown, 1000)

//Movedown function
function moveDown(){
  undraw()
  currentPosition += width
  draw()
  Freeze()
}
// Freeze function
function Freeze(){
  if(current.some(index => squares[currentPosition + index + width].classList.contains("taken"))) {
    current.forEach(index => squares[currentPosition + index].classList.add("taken"))
    // Start a new tetromino falling
    random = Math.floor(Math.random() * TheTetrominoes.length)
    current = TheTetrominoes[random][currentPosition]
    currentPosition = 4
    draw()
  }
}
})