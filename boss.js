class Boss extends Zombie{
    constructor(x,y,health,damage,armor,round) {
     super(x,y)
      this.width = 30;
      this.height = 30;
      this.damage = damage;
      this.health = (200 * round) / 4;
      this.armor = (300 * round) / 4;
      this.playerPosX = player.x;
      this.playerPosY = player.y;
      this.speed = 1;
   
    }
   show() {
    fill(255,0,0);
    rect(this.x,this.y,this.width,this.height);
    
    
   }
   update() {
    let d = dist(this.x,this.y,player.x,player.y)
      let vx = (player.x-this.x)/d*this.speed;
      let vy = (player.y-this.y)/d*this.speed;
      this.x+=vx;
      this.y+=vy;  
   }
   healthBar(round) {
    let maxHealth = (200 * round - (200 / 2)) / 4
    let maxArmor = (300 * round - (300 / 2)) / 4

    console.log(maxHealth, this.health)


    stroke(0);
    strokeWeight(2);
    noFill();
    rect(this.x - 10, this.y - 10, 50, 5);
    noStroke();
    fill(255, 0, 0);
    rect(this.x - 10, this.y - 10, map(this.health, 0, maxHealth, 0, 50), 5);

    stroke(0);
    strokeWeight(2);
    noFill();
    rect(this.x - 10, this.y - 20, 50, 5);
    noStroke();
    fill(255/2, 255/2, 255/2);
    rect(this.x - 10, this.y - 20, map(this.armor, 0, maxArmor, 0, 50), 5);
    strokeWeight(1)
    stroke(0)
   }
}