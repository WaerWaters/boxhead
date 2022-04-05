let player;
let zombieSpawned = [];
let bulletsFired = [];
let gates = [];


function setup() {
  createCanvas(600, 600);
  player = new Player();

  append(gates, new Gate(60, 240, 60, height - 240));
  append(gates, new Gate(width - 60, 240, width - 60, height - 240));
  append(gates, new Gate(240, 60, width - 240, 60));
  append(gates, new Gate(240, height - 60, width - 240, height - 60));
  
  spawn(5)
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
  for (let i = 0; i < gates.length; i++) {
    gates[i].show()
    for (let j = 0; j < zombieSpawned.length; j++) {
      if (dist(zombieSpawned[j].x, zombieSpawned[j].y, gates[i].x1, gates[i].y1) < 75) {
        console.log("you suck")
        gates[i].update()
      }
      stroke(0)
      strokeWeight(1)
    }
  }
  

  player.show()
  player.movement()
  
  for (let i = 0; i < bulletsFired.length; i++) {
    bulletsFired[i].show()
    bulletsFired[i].update()
    if (bulletsFired[i].outOfBounds()) {
      bulletsFired.splice(i, 1)
    }
  }
  
  for (let i = 0; i < zombieSpawned.length; i++) {
    zombieSpawned[i].show()
    zombieSpawned[i].update()
    for (let j = 0; j < bulletsFired.length; j++) {
      if (bulletsFired[j].x < zombieSpawned[i].x + zombieSpawned[i].width && bulletsFired[j].x > zombieSpawned[i].x - zombieSpawned[i].width && bulletsFired[j].y < zombieSpawned[i].y + zombieSpawned[i].height && bulletsFired[j].y > zombieSpawned[i].y - zombieSpawned[i].height) {
        zombieSpawned[i].health -= 50
        bulletsFired.splice(j, 1)
        if (zombieSpawned[i].health == 0) {
          zombieSpawned.splice(i, 1)
        }
      }
    }
  }
  
  
  for(let i = 0; i < zombieSpawned.length; i++){
    let d = dist(zombieSpawned[i].x,zombieSpawned[i].y,player.x,player.y);
    let damage = 50;
    if(d<16) {
      player.health = player.health - damage;
      zombieSpawned.splice(i,1);
      console.log(player.health);
    }
    if(player.health == 0) {
      reset(5);
    }
  }
  
  
}

function spawn(n) {
  for (let i = 0; i < n; i++) {
    rand = Math.floor(Math.random() * 4)
    if (rand == 0) {
      zombieSpawned[i] = new Zombie(width/2, 20);
    } else if (rand == 1) {
      zombieSpawned[i] = new Zombie(20, height/2);
    } else if (rand == 2) {
      zombieSpawned[i] = new Zombie(width/2, height - 40);
    } else if (rand == 3) {
      zombieSpawned[i] = new Zombie(width - 40, height/2);
    }
  }
}

function reset(n) {
  bulletsFired=[];
  zombieSpawned=[];
  player.x = width/2
  player.y = height/2
  player.health = 100
  
  spawn(n)
}

