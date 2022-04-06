let player;
let zombieSpawned = [];
let bulletsFired = [];
let gates = [];
let bulletDamage = 100;
let round = 1
let points = 0


function setup() {
  createCanvas(600, 600);
  player = new Player();

  append(gates, new Gate(60, 240, 60, height - 240));
  append(gates, new Gate(width - 60, 240, width - 60, height - 240));
  append(gates, new Gate(240, 60, width - 240, 60));
  append(gates, new Gate(240, height - 60, width - 240, height - 60));


}




function draw() {
  background(220);
  walls()

  // UI
  textSize(32)
  fill(0)
  text(points, 20, 40)
  
  // Round system
  if (round % 10 == 0) {
    // Spawn boss
  } else if (round % 1 == 0) {
    spawn(round*2)
    round += 0.5
  }
  if (player.health == 0) {
      round = 1
      reset(round*2);
  } else if (zombieSpawned.length == 0) {
    console.log("hey")
    round += 0.5
  }
  
  // Player display
  player.show()
  player.movement()
  
  // Bullets display and out of bounds system
  for (let i = 0; i < bulletsFired.length; i++) {
    bulletsFired[i].show()
    bulletsFired[i].update()
    if (bulletsFired[i].outOfBounds()) {
      bulletsFired.splice(i, 1)
    }
  }
  
  // Zombie display and interaction with bullets
  for (let i = 0; i < zombieSpawned.length; i++) {
    zombieSpawned[i].show()
    zombieSpawned[i].update()
    for (let j = 0; j < bulletsFired.length; j++) {
      if (bulletsFired[j].x < zombieSpawned[i].x + zombieSpawned[i].width && bulletsFired[j].x > zombieSpawned[i].x - zombieSpawned[i].width && bulletsFired[j].y < zombieSpawned[i].y + zombieSpawned[i].height && bulletsFired[j].y > zombieSpawned[i].y - zombieSpawned[i].height) {
        zombieSpawned[i].health -= bulletDamage
        bulletsFired.splice(j, 1)
        if (zombieSpawned[i].health == 0) {
          points +=
          zombieSpawned.splice(i, 1)
        }
      }
    }
  }
  
  // Zombie interaction with player
  for(let i = 0; i < zombieSpawned.length; i++){
    let d = dist(zombieSpawned[i].x,zombieSpawned[i].y,player.x,player.y);
    let damage = 50;
    if(d<16) {
      player.health = player.health - damage;
      zombieSpawned.splice(i,1);
      console.log(player.health);
    }
    
  }
  
  
}

// Spawn zombies
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

// Game over, Restart
function reset(n) {
  bulletsFired=[];
  zombieSpawned=[];
  player.x = width/2
  player.y = height/2
  player.health = 100
  spawn(n)
}

// Bullet direction depending on player direction
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

// Arena
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