  function inputUsername() {
    const username = prompt ("Please enter your username:");
    user = username;
    // alert(username);
    //transcription(user) this is how to pass an argument to another function
  }
  function getRandomCardNumber (min, max) {
    var min = 1;
    var max = 13; 
      return x = Math.random() * (max - min) + min;
    alert (x);
  }

  function transcription() { // this function changes numbers to card names
    var card = "";
    
   
    switch (stringNumber) {
      case "1":
        card = "Ace";
        break;
      case "11":
        card = "Jack";
        break;
      case "12":
        card = "Queen";
        break;
      case "13":
        card = "King";
        break;
      default:
        card = stringNumber;
    }
    cardTranscription = card;
    // alert(stringNumber);
  }
// from here down going to be card colour picking thing


function getRandomCardColour (min, max) {
    var min = 1;
    var max = 4; 
      return y = Math.random() * (max - min) + min;
    alert (y);
  }

  function transcriptionColour() { // this function changes numbers to card names
    var cardColour = "";
    
   
    switch (stringColour) {
      case "1":
        cardColour = "Club";
        break;
      case "2":
        cardColour = "Diamonds";
        break;
      case "3":
        cardColour = "Hearts";
        break;
      case "4":
        cardColour = "Spades";
        break;
      default:
        cardColour = "Error! Check the program";
    }
    cardTranscriptionColour = cardColour;
    // alert(stringNumber);
  }

// here card colour picking ends

function restartProgram () {
  var restart = prompt ("Do you want to try again? (y/n)");
  if (restart == "y") {
    inputUsername();
  }
  if (restart == "n") {
    alert ("Thanks and bye!");
    return;
  }
  else {
    alert ("Please enter y for yes and n for no");
    restartProgram();
  }
}

  inputUsername();
  getRandomCardNumber();
  getRandomCardColour();
   randomNumber = parseInt(x);
   stringNumber = randomNumber.toString();
  randomColour = parseInt(y);
   stringColour = randomColour.toString();
  var user;
  var cardTranscription;
  var cardTranscriptionColour;
  transcription();
  transcriptionColour();
  alert (user + " you drew a " + cardTranscription + " of " + cardTranscriptionColour);
  restartProgram();
  // alert (cardTranscriptionColour);
