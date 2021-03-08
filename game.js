$(document).ready(function () {
  const buttonColors = ["red", "blue", "green", "yellow"];

  const gamePattern = [];

  nextSequence();

  function nextSequence() {
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    console.log(gamePattern);
  }
});
