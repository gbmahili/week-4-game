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
            crystalValueRandomNumber = Math.ceil(Math.random() * 12);
            if (crystalValuesArray.indexOf(crystalValueRandomNumber) > -1) continue;
            crystalValuesArray[crystalValuesArray.length] = crystalValueRandomNumber;
        }
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
        //Call the updateWinsLosses function
        updateWinsLosses();
        
    });

    //On Blue Click: Same concept as red.
    $(".blue").click(function () {
        blueValue = parseInt(($(this).data("value", crystalValues.blue)).data("value"));
        totalScore += blueValue;
        $("#totalScore").text(totalScore);        
        updateWinsLosses();

    });

    //On Blue Click:
    $(".yellow").click(function () {
        yellowValue = parseInt(($(this).data("value", crystalValues.yellow)).data("value"));
        totalScore += yellowValue;
        $("#totalScore").text(totalScore);
        updateWinsLosses();

    });

    //On Blue Click:
    $(".green").click(function () {
        greenValue = parseInt(($(this).data("value", crystalValues.green)).data("value"));
        totalScore += greenValue;
        $("#totalScore").text(totalScore);
        updateWinsLosses();

    });

    //Create function to check if totalScore is equal or greater than the random number
    function updateWinsLosses(){
        
        //Update Wins
        if (totalScore == randomNumber) {
            $(".modal-title").text("CONGRATULATIONS");
            $(".modal-body").text("Way to go...YOU WON!");
            $(".win-modal").click();
            
            //Increase wins count
            wins++;
            //Update wins value field
            $("#wins").text(wins).css("color", "green");
            //Call the getNewValues
            getNewValues(); 
        }

        //Update losses: same concept as update wins above
        if (totalScore > randomNumber) {
            $(".modal-title").text("UH OH...");
            $(".modal-body").text("You just lost...Try again!");
            $(".win-modal").click();
            losses++;
            $("#losses").text(losses).css("color", "red");
            getNewValues();
        }        
    };

    //Get New Values
    function getNewValues() {
        //Reset the score to zero 
        totalScore = 0;
        //The update the score field with the zero
        $("#totalScore").text(totalScore);
        //We then generate a new random number
        generateRandomNumber();
        //Followed by generating new crystal values from the random number between 1 and 12
        generateCrystalValues();
        //We then set the generated numbers to each crystal
        setCrystalsValues();
    };
});