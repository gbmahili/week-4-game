$(document).ready(function () {

    //1. Generate a random number between 19 and 120 to start the game:
    var randomNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    //##Set that random number in the randomNumberField;
    var randomNumberField = $("#randomNumberField");
    randomNumberField.text(randomNumber);

    //2. Generate 4 unique random numbers between 1 and 12 for each crystal:
    var crystalValuesArray = []
    while (crystalValuesArray.length < 4) {
        var crystalValueRandomNumber = Math.ceil(Math.random() * 12)
        if (crystalValuesArray.indexOf(crystalValueRandomNumber) > -1) continue;
        crystalValuesArray[crystalValuesArray.length] = crystalValueRandomNumber;
    }

    //##Set each Crystal with its random number in this order: red, blue, yellow, green:
    var crystalValues = {
        red: crystalValuesArray[0],
        blue: crystalValuesArray[1],
        yellow: crystalValuesArray[2],
        green: crystalValuesArray[3]
    }

    //Set the value of the totalScore:
    var totalScore = parseInt($("#totalScore").text());
    
    //On Red Click:
    $(".red").click(function(){
        //Set the data value and get it, then store it in a variable using chained methods..change it to a number:
        var red = parseInt(($(this).data("value", crystalValues.red)).data("value"));
        //Add the red value to the value of score:
        totalScore += red;
        //Display the new score:
        $("#totalScore").text(totalScore);
        
    });
    
});