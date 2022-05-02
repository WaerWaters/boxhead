class Player{
  constructor() {
    this.x = width/2
    this.y = height/2
    this.width = 20
    this.height = 20
    this.speed = 4
    this.health = 100;
    this.punchDamage = 5
    this.currentDirection
  }
  
  show() {
    fill(0,0,255)
    rect(this.x, this.y, this.width, this.height)
    if (keyCode === 65) {
      
    } else if (keyCode === 68) {

    } else if (keyCode === 87) {
      
    } else if (keyCode === 83) {
      
    } else {
      
    }
  }

  movement() {
    if (keyIsDown(65)) {
      this.x = this.x - this.speed
      this.currentDirection = 1
    }
    if (keyIsDown(68)) {
      this.x = this.x + this.speed
      this.currentDirection = 2
    }
    if (keyIsDown(87)) {
      this.y = this.y - this.speed
      this.currentDirection = 3
    }
    if (keyIsDown(83)) {
      this.y = this.y + this.speed
      this.currentDirection = 4
    }
    
    if (this.x <= 58) {
      this.x = this.x + this.speed
    }
    if (this.x >= width-78) {
      this.x = this.x - this.speed
    }
    if (this.y <= 58) {
      this.y = this.y + this.speed
    }
    if (this.y >= height-78) {
      this.y = this.y - this.speed
    }
  }
  outOfBounds() {
    return(this.x < 0 || this.x > width || this.y < 0 || this.y > height || this.x < 60 && this.y < 240 || this.x < 240 && this.y < 60 || this.x > width-240 && this.y < 60 || this.x > width-60 && this.y < 240 || this.x < 60 && this.y > height-240 || this.x < 240 && this.y > height-60 || this.x > width-240 && this.y > height-60 || this.x > width-60 && this.y > height-240)
  }
  barShow() {
    stroke(0);
    strokeWeight(2);
    noFill();
    rect(this.x - 15, this.y - 10, 50, 5);
    let maxHealth = 100;
    noStroke();
    fill(255, 0, 0);
    rect(this.x - 15, this.y - 10, map(this.health, 0, maxHealth, 0, 50), 5);
    strokeWeight(1)
    stroke(0)
  }
}





