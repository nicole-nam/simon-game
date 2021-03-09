$(document).ready(function () {
  const buttonColors = ["red", "blue", "green", "yellow"];

  const gamePattern = [];
  let userClickedPattern = [];
  let level = 0;

  //start game
  $(document).on("keypress", nextSequence);

  function nextSequence() {
    userClickedPattern = [];
    level = 0;
    //level counter
    level++;
    $("#level-title").text(`Level ${level}`);
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    //flash effect + sound
    $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
  }

  $(".btn").click(function () {
    const userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
  });

  function playSound(name) {
    const audio = new Audio(`sounds/${name}.mp3`);
    audio.play();
  }

  function animatePress(currentColor) {
    $(`#${currentColor}`).addClass("pressed");
    setTimeout(() => {
      $(`#${currentColor}`).removeClass("pressed");
    }, 100);
  }

  function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      console.log("success");
      if (gamePattern.length === userClickedPattern.length) {
        setTimeout(() => {
          nextSequence();
        }, 1000);
      }
    } else {
      console.log("wrong");
      playSound("wrong");
      $("body").addClass("game-over");
      setTimeout(() => {
        $("body").removeClass("game-over");
      }, 200);
      $("#level-title").text("Game Over, Press Any Key to Restart");
    }
  }
});
