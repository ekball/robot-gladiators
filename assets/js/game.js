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
                playerMoney = playerMoney - 10;

                console.log("player money" + playerMoney);

                break;
            }
        }
    
        // subtract player attack from enemy health
        enemyHealth = enemyHealth - playerAttack;
    
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
        playerHealth = playerHealth - enemyAttack;
    
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
    enemyHealth = 50;

    //use debugger to pause script from running
    debugger;

    //call fight function with enemy-robot
    fight(pickedEnemyName);

    
}

