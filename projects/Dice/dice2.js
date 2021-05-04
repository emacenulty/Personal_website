function rollTheDice() {
    setTimeout(function () {
      var randomNumber1 = Math.floor(Math.random() * 6) + 1;
      var randomNumber2 = Math.floor(Math.random() * 6) + 1;

      document.querySelector(".die1").setAttribute("src",
        "pip" + randomNumber1 + ".png");

      document.querySelector(".die2").setAttribute("src",
        "pip" + randomNumber2 + ".png");

      if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").innerHTML = "We both won!?";
      }

      else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML
                = ("I WIN");
      }

      else {
        document.querySelector("h1").innerHTML
                = ( "You WIN");
      }
    }, 500); }
        