console.log("hi");
let numResets = document.querySelector("#num-resets");
let resetButton = document.querySelector("#reset-button");
let teamOneNumShots = document.querySelector("#teamone-numshots");
let teamTwoNumShots = document.querySelector("#teamtwo-numshots");
let teamOneShootButton = document.querySelector("#teamone-shoot-button");
let teamTwoShootButton = document.querySelector("#teamtwo-shoot-button");
let teamOneNumGoals = document.querySelector("#teamone-numgoals");
let teamTwoNumGoals = document.querySelector("#teamtwo-numgoals");

teamOneShootButton.addEventListener("click", function () {
  console.log("clicked");
  let numberValue = Number(teamOneNumShots.innerHTML) + 1;
  teamOneNumShots.innerHTML = numberValue;
  if (Math.random() * 100 < 50) {
    console.log("goal");
    let numberGoal = Number(teamOneNumGoals.innerHTML) + 1;
    teamOneNumGoals.innerHTML = numberGoal;
  }
});

teamTwoShootButton.addEventListener("click", function () {
  console.log("clicked");
  let numberValue = Number(teamTwoNumShots.innerHTML) + 1;
  teamTwoNumShots.innerHTML = numberValue;
  if (Math.random() * 100 < 50) {
    console.log("T2 goal");
    let numberGoal = Number(teamTwoNumGoals.innerHTML) + 1;
    teamTwoNumGoals.innerHTML = numberGoal;
  }
});

resetButton.addEventListener("click", function () {
  console.log("reset");
  let numberSet = Number(numResets.innerHTML) + 1;
  numResets.innerHTML = numberSet;
  let numberStart = Number(teamOneNumShots.innerHTML);
  teamOneNumShots.innerHTML = 0;
  let numberEnd = Number(teamTwoNumShots.innerHTML);
  teamTwoNumShots.innerHTML = 0;
  let numberStaters = Number(teamOneNumGoals.innerHTML);
  teamOneNumGoals.innerHTML = 0;
  let numberEnders = Number(teamTwoNumGoals.innerHTML);
  teamTwoNumGoals.innerHTML = 0;
});
gi;
