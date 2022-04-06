let player;
let zombieSpawned = [];
let bulletsFired = [];
let boss = [];

function setup() {
  createCanvas(600, 600);
  player = new Player();
  spawn(5)
  spawnBoss(1)
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

  console.log(zombieSpawned.length)

  player.show()
  player.movement()
  for(let i = 0; i < zombieSpawned.length; i++) {
    zombieSpawned[i].update();
  }
  
  for (let i = 0; i < bulletsFired.length; i++) {
    bulletsFired[i].show()
    bulletsFired[i].update()
    if (bulletsFired[i].outOfBounds()) {
      bulletsFired.splice(i, 1)
    }
  }
  
  for (let i = 0; i < zombieSpawned.length; i++) {
    zombieSpawned[i].show();

  

    /*let v0 = createVector(zombieSpawned[i].x,zombieSpawned[i].y);
    let v1 = createVector(0-player.x,0-player.y);
    v1.normalize();
    console.log(v1);
    console.log(v0);
    if(v1.normalize().x > -0.25 && v1.normalize().x < 0.25 && v1.normalize().y < -0.75) {
      zombieSpawned[i].y += 1
    } /*else if(angleBetween < 1.125 && angleBetween > 0.375) {
        zombieSpawned[i].x = zombieSpawned[i].x + 5
        zombieSpawned[i].y = zombieSpawned[i].y - 5
    } else if(angleBetween < 1.875 && angleBetween > 1.125) {
        zombieSpawned[i].y = zombieSpawned[i].y - 5
    } else if(angleBetween < 1.875 && angleBetween > 1.125) {
        zombieSpawned[i].y = zombieSpawned[i].y - 5
    } else if(angleBetween < 2.625 && angleBetween > 1.875) {
        zombieSpawned[i].x = zombieSpawned[i].x - 5
        zombieSpawned[i].y = zombieSpawned[i].y - 5
    } else if(angleBetween < -2.625 && angleBetween > 2.625) {
        zombieSpawned[i].x = zombieSpawned[i].x - 5
    } else if(angleBetween < -1.875 && angleBetween > -2.625) {
        zombieSpawned[i].x = zombieSpawned[i].x - 5
        zombieSpawned[i].y = zombieSpawned[i].y + 5
    } else if(angleBetween < -1.125 && angleBetween > -1.875) {
        zombieSpawned[i].y = zombieSpawned[i].y + 5
    } else if(angleBetween < -1.125 && angleBetween > -0.375) {
        zombieSpawned[i].x = zombieSpawned[i].x + 5
        zombieSpawned[i].y = zombieSpawned[i].y + 5
    }*/
  }
  
  for(let j = 0; j < boss.length; j++) {
    boss[j].update();
  }

  for(let j = 0; j < boss.length; j++) {
    boss[j].show();
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
      reset();
    }
  }
  for(let j = 0; j < boss.length; j++){
    let d = dist(boss[j].x,boss[j].y,player.x,player.y);
    let damage = 100;
    if(d<22) {
      player.health = player.health - damage;
      boss.splice(j,1);
      console.log(player.health);
    }
    if(player.health == 0) {
      reset();
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
function spawnBoss(m){ 
 for (let j = 0; j < m; j++) {
   rand = Math.floor(Math.random() * 4)
   if (rand == 0) {
     boss[j] = new Boss(width/2, 20);
   } else if (rand == 1) {
    boss[j] = new Boss(20, height/2);
   } else if (rand == 2) {
     boss[j] = new Boss(width/2, height - 40);
   } else if (rand == 3) {
     boss[j] = new Boss(width - 40, height/2);
   }
 }
}

function reset(n) {
  bulletsFired=[];
  zombieSpawned=[];
  boss=[];
  player.x = width/2
  player.y = height/2
  player.health = 100
  
  spawn(n)
  
}

for(let i = 0; i < zombieSpawned.length; i++) {
  if(zombieSpawned[i].x - 10 < zombieSpawned[i].x + 10){
    zombieSpawned[i].x += 10;
  } else if(zombieSpawned[i].x + 10 < zombieSpawned[i].x - 10) {
    zombieSpawned[i].x -=10;
  } else if(zombieSpawned[i].y - 10 < zombieSpawned[i].y + 10) {
    zombieSpawned[i].x +=10;
  } else if(zombieSpawned[i].y + 10 < zombieSpawned[i].y - 10) {
    zombieSpawned[i].x -=10;
  }
}
for(let i = 0; i < zombieSpawned.length; i++) {
  random(zombieSpawned[i].x - 1, zombieSpawned[i].x + 1, zombieSpawned[i].y - 1, zombieSpawned[i].y + 1);
}
