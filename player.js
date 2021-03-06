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
    if (keyCode === 65) {
      fill(0,0,255)
      rect(this.x, this.y, this.width, this.height)
    } else if (keyCode === 68) {
      fill(0,0,255)
      rect(this.x, this.y, this.width, this.height)
    } else if (keyCode === 87) {
      fill(0,0,255)
      rect(this.x, this.y, this.width, this.height)
    } else if (keyCode === 83) {
      fill(0,0,255)
      rect(this.x, this.y, this.width, this.height)
    } else {
      fill(0,0,255)
      rect(this.x, this.y, this.width, this.height)
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
    
    if (this.x <= -2) {
      this.x = this.x + this.speed
    }
    if (this.x >= width-18) {
      this.x = this.x - this.speed
    }
    if (this.y <= -2) {
      this.y = this.y + this.speed
    }
    if (this.y >= height-18) {
      this.y = this.y - this.speed
    }
  }
  outOfBounds() {
    return(this.x < 0 || this.x > width || this.y < 0 || this.y > height || this.x < 60 && this.y < 240 || this.x < 240 && this.y < 60 || this.x > width-240 && this.y < 60 || this.x > width-60 && this.y < 240 || this.x < 60 && this.y > height-240 || this.x < 240 && this.y > height-60 || this.x > width-240 && this.y > height-60 || this.x > width-60 && this.y > height-240)
  }
}





