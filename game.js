$(document).ready(function () {
  const buttonColors = ["red", "blue", "green", "yellow"];

  const gamePattern = [];
  const userClickedPattern = [];
  let level = 0;

  // nextSequence();
  function nextSequence() {
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    //flash
    $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    //level counter 
    level++;
    $("#level-title").text(`Level ${level}`);
  }

  $(".btn").click(function () {
    const userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
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

  $(document).on("keypress", nextSequence);
});
