var playerName  = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (){
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt ("Would you like to FIGHT or SKIP this fight? Enter FIGHT or SKIP to choose.");

    if (promptFight == "FIGHT" || promptFight == "fight"){

        // subtract player attack from enemy health
        enemyHealth = enemyHealth - playerAttack;

        // log message to console
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        //check enemy's health
        if (enemyHealth <= 0){
            window.alert(enemyName + "has died!");
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
            window.alert(playerName + "has died!");
        }
        else {
            window.alert (playerName + " still has " + playerHealth + " health remaining.");
        };
    
    }

    else if (promptFight == "SKIP" || promptFight == "skip") {
        window.alert(playerName + " has chosen to skip the fight.");

        //confirm player wants to skip
       var confirmSkip = window.confirm ("Are you sure you'd like to quit?");

        if (confirmSkip) {
            window.alert (playerName + " has decided to skip this fight. Goodbye.");

            //subtract 2 from player's money
            playerMoney = playerMoney - 2;
        }

        // if not skipping, run fight() again
        else {
            fight ();
        }

    }

    else {
        window.alert ("Please choose a valid option");
    }
}

fight();