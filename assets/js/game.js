var fightOrSkip = function() {

    // ask player if they'd like to fight or skip using fightOrSkip function
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // Conditional Recursive Function Call
    if (promptFight === "" || promptFight === null) {

        window.alert("You need to provide a valid answer! Please try again.");

        return fightOrSkip();
    }


  // if player picks "skip" confirm and then stop the loop
  promptFight = promptFight.toLowerCase();

  if (promptFight === "skip") {

    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {

      window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");

      // subtract money from playerMoney for skipping, but don't let them go into the negative
      playerInfo.money = Math.max(0, playerInfo.money - 10);

      // return true if player wants to leave
      return true;
    }
  }
  return false;
}




var fight = function (enemy){

    while (playerInfo.health > 0 && enemy.health > 0) {
        
        if (fightOrSkip()) {
            break;
        }
    
        // generate random damage value based on player's attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        enemy.health = Math.max(0, enemy.health - damage);
    
        // log message to console
        console.log(
            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
        );
    
        //check enemy's health
        if (enemy.health <= 0){
            window.alert(enemy.name + " has died!");

            //award prize money if enemy is dead
            playerInfo.money = playerInfo.money + 10;

            //leave while loop b/c enemy is dead
            break;
        }

        else {
            window.alert (enemy.name + " still has " + enemy.health + " health remaining.");
        };
    
        // subtract enemy attack from player health
        var damage = randomNumber(enemy.attack - 3, enemy.attack);

        playerInfo.health = Math.max(0, playerInfo.health - damage);
    
        //log message to console
        console.log(
            enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
        );
    
        //check player's health
        if (playerInfo.health <= 0){
            window.alert(playerInfo.name + " has died!");
            break;
        }

        else {
            window.alert (playerInfo.name + " still has " + playerInfo.health + " health remaining.");
        };
        
    }
  
}


// function to start a new game 

var startGame = function(){

    // Reset Player Stats
    playerInfo.reset();


    for (var i = 0; i < enemyInfo.length; i++){

        // let players know the round they are in
        if (playerInfo.health > 0){
            window.alert("Welcome to Robot Galdiators! Round " + (i+1) );
        }

        else {
            window.alert ("You have lost your robot in battle! Game Over!");
            break;
        }

        var pickedEnemyObj = enemyInfo[i];

        //reset enemy health before starting a new fight
        pickedEnemyObj.health = randomNumber(40, 60);

        //use debugger to pause script from running
        debugger;

        //call fight function with enemy-robot
        fight(pickedEnemyObj);    

        // if we are not at the last enemy in the array
        if (playerInfo.health > 0 && i < enemyInfo.length - 1) {

            var storeConfirm = window.confirm ("The fight is over, visit the store before the next round?");

            if(storeConfirm) {

                shop();

            }     
        }
    }

    // Play again
    endGame();

}


// function to end entire game

var endGame = function(){

    // if player is alive, count money to score
    if (playerInfo.health > 0 ) {

        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");

    }

    else {

        window.alert("The game has now ended. Let's see how you did!");

    }

    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart game
        startGame ();
    }

    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!")
    }
}

var shop = function() {

    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop? Please enter one: REFILL, UPGRADE, or LEAVE to make a choice");

    switch(shopOptionPrompt){
        
        case "REFILL":
        case "refill": 
            
            playerInfo.refillHealth();
            break;

        case "UPGRADE":
        case "upgrade":

            playerInfo.upgradeAttack();
            break;

        case "LEAVE":
        case "leave":
            window.alert("Leaving the store");

            // do nothing so function will end
            break;

        default:
            window.alert("You did not pick a valid option. Try again.");

            // call shop function again to force player to choose an option
            shop();
            break;
    }

}

// function to generate a random number
var randomNumber = function(min, max) {

    var value = Math.floor(Math.random() * (max - min + 1) + min);
  
    return value;
  };

var getPlayerName = function (){
    var name = "";

    while (name == "" || name == "null"){
        name = prompt("What is your robot's name?");
    }

    console.log("Your robot's name is: " + name);
    return name;

};


var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10, 
    reset: function() {
        this.health = 100;
        this.attack = 10;
        this.money = 10;
    },
    refillHealth: function() {

        if(this.money >= 7) {

            window.alert("Refilling player's health by 20 for 7 dollars.");

            this.health += 20;
            this.money -= 7;
        }

        else {
            window.alert("You don't have enough money!");
        }

    },
    upgradeAttack: function(){

        if (this .money) {
            
            window.alert("Upgrading player's attack by 6 for 7 dollars");

            this.attack += 6;
            this.money -= 7;
        }

        else {
            window.alert("You don't have enough money!");
        }
    }
};

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
      },
      {
        name: "Amy Android",
        attack: randomNumber(10, 14)
      },
      {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
      }
];


startGame ();