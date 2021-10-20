var playerName  = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//show the array in the console (dev tools) using a for loop



var fight = function (enemyName){

    while (playerHealth > 0 && enemyHealth > 0) {
        
        var promptFight = window.prompt ("Would you like to FIGHT or SKIP this fight? Enter FIGHT or SKIP to choose.");
    
        if (promptFight == "SKIP" || promptFight == "skip") {
    
            //confirm player wants to skip
           var confirmSkip = window.confirm ("Are you sure you'd like to quit?");
    
            if (confirmSkip) {
                window.alert (playerName + " has decided to skip this fight. Goodbye.");
    
                //subtract 2 from player's money
                playerMoney = (0, playerMoney - 10);

                console.log("player money" + playerMoney);

                break;
            }
        }
    
        // generate random damage value based on player's attack power
        var damage = randomNumber(playerAttack - 3, playerAttack);

        enemyHealth = Math.max(0, enemyHealth - damage);
    
        // log message to console
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
    
        //check enemy's health
        if (enemyHealth <= 0){
            window.alert(enemyName + " has died!");

            //award prize money if enemy is dead
            playerMoney = playerMoney + 10;

            //leave while loop b/c enemy is dead
            break;
        }

        else {
            window.alert (enemyName + " still has " + enemyHealth + " health remaining.");
        };
    
        // subtract enemy attack from player health
        var damage = randomNumber(enemyAttack - 3, enemyAttack);

        playerHealth = Math.max(0, playerHealth - damage);
    
        //log message to console
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
    
        //check player's health
        if (playerHealth <= 0){
            window.alert(playerName + " has died!");
            break;
        }

        else {
            window.alert (playerName + " still has " + playerHealth + " health remaining.");
        };
        
    }
  
}


// function to start a new game 

var startGame = function(){

    // Reset Player Stats
    var playerHealth = 100;
    var playerAttack = 10;
    var playerMoney = 10;


    for (var i = 0; i < enemyNames.length; i++){

        // let players know the round they are in
        if (playerHealth > 0){
            window.alert("Welcome to Robot Galdiators! Round " + (i+1) );
        }

        else {
            window.alert ("You have lost your robot in battle! Game Over!");
            break;
        }

        var pickedEnemyName = enemyNames[i];

        //reset enemy health before starting a new fight
        enemyHealth = randomNumber(40, 60);

        //use debugger to pause script from running
        debugger;

        //call fight function with enemy-robot
        fight(pickedEnemyName);    

        // if we are not at the last enemy in the array
        if (playerHealth > 0 && i < enemyNames.length - 1) {

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
    if (playerHealth > 0 ) {

        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");

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
            
            if (playerMoney>=7){

                window.alert("Refilling player's health by 20 for 7 dollars.");

                // increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }

            else {
                window.alert("You don't have enough money!");
            }

            break;

        case "UPGRADE":
        case "upgrade":

            if (playerMoney>=7){

                window.alert("Upgrading player's attack by 6 for 7 dollars");

                // increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }

            else {
                window.alert("You don't have enough money!");
            }

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


startGame();