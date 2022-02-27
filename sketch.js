let player;
let bulletsFired = []
let obstacles = []

function setup() {
  createCanvas(600, 600);
  player = new Player();
}

function keyPressed() {
  if (keyCode === 32) {
    if (player.currentDirection === 1) {
      bullet = new Bullet(player.x + 10, player.y + 10, -1, 0)
      bulletsFired.push(bullet)
    } else if (player.currentDirection === 2) {
      bullet = new Bullet(player.x + 10, player.y + 10, 1, 0)
      bulletsFired.push(bullet)
    } else if (player.currentDirection === 3) {
      bullet = new Bullet(player.x + 10, player.y + 10, 0, -1)
      bulletsFired.push(bullet)
    } else if (player.currentDirection === 4) {
      bullet = new Bullet(player.x + 10, player.y + 10, 0, 1)
      bulletsFired.push(bullet)
    }
  }
}
function walls() {
  fill(200)
  beginShape()
  vertex(0,0)
  vertex(240,0)
  vertex(240,60)
  vertex(60,60)
  vertex(60,240)
  vertex(0,240)
  endShape()

  beginShape()
  vertex(width,0)
  vertex(width,240)
  vertex(width-60,240)
  vertex(width-60,60)
  vertex(width-240,60)
  vertex(width-240,0)
  endShape()

  beginShape()
  vertex(0,height)
  vertex(0,height-240)
  vertex(60,height-240)
  vertex(60,height-60)
  vertex(240,height-60)
  vertex(240,height)
  endShape()

  beginShape()
  vertex(width, height)
  vertex(width,height-240)
  vertex(width-60,height-240)
  vertex(width-60,height-60)
  vertex(width-240,height-60)
  vertex(width-240,height)
  endShape()
}

function draw() {
  background(220);
  walls()

  player.show()
  player.movement()
  for (let i = 0; i < bulletsFired.length; i++) {
    bulletsFired[i].show()
    bulletsFired[i].update()
    if (bulletsFired[i].outOfBounds()) {
      bulletsFired.splice(i, 1)
    }
  }
}

