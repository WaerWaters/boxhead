class Zombie{
    constructor(x,y,width,height,damage,health,speed) {
     this.x = x;
     this.y = y;
     this.width = width;
     this.height = height;
     this.damage = damage;
     this.health = health;
     this.speed = speed;
     this.playerPosX = player.x;
     this.playerPosY = player.y;
   
    }
   show() {
    fill(0,255,0);
    rect(this.x,this.y,this.width,this.height);
    
    
   }
   update() {
    let v0 = createVector(this.x,this.y);
    let v1 = createVector(this.x + 20,this.y);
    let v2 = createVector(player.x,player.y);
    let angleBetween = v1.angleBetween(v2);
       print(angleBetween);    
   
   
   }
   
   }
   