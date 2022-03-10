class Zombie{
    constructor(x,y,damage,health,speed) {
     this.x = x;
     this.y = y;
     this.width = 20;
     this.height = 20;
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
    
       print(angleBetween);    
   
   
   }
   
   }
   