$(document).ready(function () {
    generateRandomNumber();
    generateCrystalValues();
    setCrystalsValues();

    function generateRandomNumber() {
        //1. Generate a random number between 19 and 120 to start the game:
        randomNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
        //##Set that random number in the randomNumberField;
        randomNumberField = $("#randomNumberField");
        randomNumberField.text(randomNumber);
    }

    //2. Generate 4 unique random numbers between 1 and 12 for each crystal:
    function generateCrystalValues() {        
    
        crystalValuesArray = []
        while (crystalValuesArray.length < 4) {
            crystalValueRandomNumber = Math.ceil(Math.random() * 12)
            if (crystalValuesArray.indexOf(crystalValueRandomNumber) > -1) continue;
            crystalValuesArray[crystalValuesArray.length] = crystalValueRandomNumber;
        }
        return crystalValuesArray;

    }

    //##Set each Crystal with its random number in this order: red, blue, yellow, green:
    function setCrystalsValues() {        
    
        crystalValues = {
            red: crystalValuesArray[0],
            blue: crystalValuesArray[1],
            yellow: crystalValuesArray[2],
            green: crystalValuesArray[3]
        }
    }

    //Get the value of the totalScore:
    var totalScore = parseInt($("#totalScore").text());
    //Get the value of the wins
    var wins = parseInt($("#wins").text());
    //Get the value of the losses
    var losses = parseInt($("#losses").text());
    
    //On Red Click:
    $(".red").click(function(){
        //Set the data value and get it, then store it in a variable using chained methods..change it to a number:
        redValue = parseInt(($(this).data("value", crystalValues.red)).data("value"));
        //Add the red value to the value of score:
        totalScore += redValue;
        //Display the new score:
        $("#totalScore").text(totalScore);
        updateWinsLosses();
        
    });

    //On Blue Click:
    $(".blue").click(function () {
        //Set the data value and get it, then store it in a variable using chained methods..change it to a number:
        blueValue = parseInt(($(this).data("value", crystalValues.blue)).data("value"));
        //Add the blue value to the value of score:
        totalScore += blueValue;
        //Display the new score:
        $("#totalScore").text(totalScore);
        
        updateWinsLosses();

    });

    //On Blue Click:
    $(".yellow").click(function () {
        //Set the data value and get it, then store it in a variable using chained methods..change it to a number:
        yellowValue = parseInt(($(this).data("value", crystalValues.yellow)).data("value"));
        //Add the yellow value to the value of score:
        totalScore += yellowValue;
        //Display the new score:
        $("#totalScore").text(totalScore);
        updateWinsLosses();

    });

    //On Blue Click:
    $(".green").click(function () {
        //Set the data value and get it, then store it in a variable using chained methods..change it to a number:
        greenValue = parseInt(($(this).data("value", crystalValues.green)).data("value"));
        //Add the green value to the value of score:
        totalScore += greenValue;
        //Display the new score:
        $("#totalScore").text(totalScore);
        updateWinsLosses();

    });

    //Create function to check if totalScore is equal or greater than the random number
    function updateWinsLosses(){
        //Update Wins
        if (totalScore == randomNumber) {
            //Increase wins count
            wins++;
            //Update wins value field
            $("#wins").text(wins).css("color", "green");
            generateRandomNumber(); 
            totalScore = 0;
            $("#totalScore").text(totalScore);
            generateCrystalValues();
            setCrystalsValues();

        }

        //Update losses
        if (totalScore > randomNumber) {
            //Increment losses value
            losses++;
            //Update losses value field
            $("#losses").text(losses).css("color", "red");
            generateRandomNumber();
            //We then set the totalScore back to 0;
            totalScore = 0;
            $("#totalScore").text(totalScore);
            generateCrystalValues();
            setCrystalsValues();
        }
        
    }

    
});