        var wins = 0;
        var losses = 0;
        var guessesLeft = 9;
        var guessesSoFar = []; // array to push user choices to
        var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //list of letters to choose from
    

     /* //need to find a onkey button to trigger when a button is pushed  still working on this function */


        document.onkeyup = function(event) {
            var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //user guess
            console.log("User guess" +userGuess);
            var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)]; //random computer selection of letter
            console.log("Computer Guess: "+computerGuess);
            guessesSoFar.push(userGuess+" "); //users pushing guess so far
            document.getElementById("guessesSoFar").innerHTML = guessesSoFar;

           
            if (userGuess == computerGuess) {
                wins++;
                alert('Way to go! You Won!');
                guessesLeft = 9; //reset the guesses back to 9 so that the user can continue to play
                guessesSoFar.length = 0; //this removes everything from the guesses so far array, so that the guesses from the previous round don't show
                document.getElementById("wins").innerHTML = wins;
            }
            else {
                guessesLeft--;
                document.getElementById("guessesLeft").innerHTML = guessesLeft;

                if(guessesLeft === 0){
                losses++;
                alert('You didn\'t guess the correct letter. You lost. Try again.');
                guessesLeft = 9;
                guessesSoFar.length = 0;
                document.getElementById("losses").innerHTML = losses;
            }
        }
            
        };    
