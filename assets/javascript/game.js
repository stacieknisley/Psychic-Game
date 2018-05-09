
<script type="text/javascript">
        var wins = 0;
        var losses = 0;
        var guessesLeft = 9;
        var guessesSoFar = []; // array to push user choices to
        var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //list of letters to choose from
    
        document.onkeyup = function(event) {
            var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //user guess
            var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)]; //random computer selection of letter
            guessesSoFar.push(userGuess); //users pushing guess so far
           
           
            if (userGuess == computerGuess) {
                wins++;
                alert('Way to go! You\'ve guesesed corrrectly. You Won!');
                guessesLeft = 9; //reset the guesses back to 9 so that the user can continue to play
                guessesSoFar.length = 0; //this removes everything from the guesses so far array, so that the guesses from the previous round don't show
            }


            else if (guessesLeft == 0){
                losses++;
                alert('You didn\'t guess the correct letter. You lost. Let\'s try again.');
                guessesLeft = 9;
                guessesSoFar.length = 0;
            }


            else if (userGuess !== computerGuess){
                guessesLeft--; //decreasing guesses left
            }  
            
            
            // Tallies and display in HTML    
            var html = "<h1>The Psychic Game</h1>" + 
            "<p>Guess what letter I'm thinking of?</p>" +
            "<p> Wins: " + 
            wins + 
            "</p>" +
            "<p> Losses: " + 
            losses + 
            "</p>" +
            "<p> Guesses Left: " + 
            guessesLeft + 
            "</p>" +
            "<p> Your Guesses so far: " +
            guessesSoFar +
            "</p>"
            ;


    
 </script>