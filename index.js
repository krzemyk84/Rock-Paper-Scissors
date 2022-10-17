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



  inputUsername();
  getRandomCardNumber();
   randomNumber = parseInt(x);
   stringNumber = randomNumber.toString();
  var user;
  var cardTranscription;
  transcription();
  alert (user + " you drew a " + cardTranscription);
