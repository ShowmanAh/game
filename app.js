new Vue({
  'el' : '#app',
  data: {
     playerHealth: 100,
     monesterHealth: 100,
     gameIsruning: false 
  },
  methods: {
    startGame: function(){
        this.gameIsruning = true;
        this.playerHealth = 100;
        this.monesterHealth = 100;
    },
    attack: function(){
        this.monesterHealth -= this.calculateDamage(3, 10);
        /*
        if(this.monesterHealth <=0){
            alert('you won !');
            this.gameIsruning = false;
            return;
        }
        **/
       if(this.checkWin()){
           return;
       }
        this.playerHealth -= this.calculateDamage(5, 12);
        this.checkWin();
    },
    specialAttack: function(){
       // console.log('sdf');
         this.monesterHealth = this.calculateDamage(3, 10);
         if(this.checkWin()){
             return;
         }
         this.monesterAttack();
    },
    monesterAttack: function(){
         this.playerHealth = this.calculateDamage(5, 12);
         this.checkWin();
    },
    calculateDamage: function(min, max){
        return Math.max(Math.floor(Math.random() * max) + 1, min); 
    }, 
    checkWin: function(){
        if(this.monesterHealth <= 0){
            if(confirm('you win ! new game?')){
                this.startGame();
            }else{
                this.gameIsruning = false;
            }
            return true;
        }else if(this.playerHealth <= 0){
          if(confirm('you lost ! new game ?')){
              this.startGame();
          } else{
              this.gameIsruning = false;
          }
          return true;
        }
        return false;
    }
  }
});
