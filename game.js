$(document).ready(function () {
  const buttonColors = ["red", "blue", "green", "yellow"];

  const gamePattern = [];
  const userClickedPattern = [];

  nextSequence();
  function nextSequence() {
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    //flash
    $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100);
    //audio
    const audio = new Audio(`sounds/${randomChosenColor}.mp3`);
    audio.play();
  }

  $(".btn").click(function () {
    const userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);

    const audio = new Audio(`sounds/${userChosenColor}.mp3`);
    audio.play();
  });
});
