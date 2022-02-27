let player;
let bulletsFired = []

function setup() {
  createCanvas(400, 400);
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

function draw() {
  background(220);
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

