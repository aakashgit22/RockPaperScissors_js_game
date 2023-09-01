const modal = document.getElementById('myModal');
const overlay = document.getElementById('overlay');
const closeModalBtn = document.getElementById('closeModalBtn');

// Get a reference to the button that opens the modal
const openModalBtn = document.getElementById('openModalBtn');

// Function to open the modal
function openModal() {
  modal.style.display = 'block';
  overlay.style.display = 'block';
}

// Function to close the modal
function closeModal() {
  modal.style.display = 'none';
  overlay.style.display = 'none';
}

// Event listener to open the modal when the button is clicked
openModalBtn.addEventListener('click', openModal);

closeModalBtn.addEventListener('click', closeModal);





// DOM
const btnRules = document.querySelector(".rules-btn");
const btnClose = document.querySelector(".close-btn");
const modalRules = document.querySelector(".modal");

const CHOICES = [
  {
    name: "paper",
    beats: "rock",
  },
  {
    name: "scissors",
    beats: "paper",
  },
  {
    name: "rock",
    beats: "scissors",
  },
];
const choiceButtons = document.querySelectorAll(".choice-btn");
const gameDiv = document.querySelector(".game");
const resultsDiv = document.querySelector(".results");
const resultDivs = document.querySelectorAll(".results__result");

const resultWinner = document.querySelector(".results__winner");
const resultText = document.querySelector(".results__text");


// Play again button from screen 1
let playAgainBtn=document.getElementsByClassName('playAgain')[0]

const scoreNumber = document.querySelector(".score__number");
let score = 0;



// DISPLAY SCORE
let computerScore=document.getElementsByClassName('cScoree')[0]
let userScore=document.getElementsByClassName('Yscore')[0]

// Game Logic

choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const choiceName = button.dataset.choice;
    const choice = CHOICES.find((choice) => choice.name === choiceName);
    choose(choice);
  });
});

function choose(choice) {
  const aichoice = aiChoose();
  displayResults([choice, aichoice]);
  displayWinner([choice, aichoice]);
}

function aiChoose() {
  const rand = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[rand];
}



function displayResults(results) {
  resultDivs.forEach((resultDiv, idx) => {
    setTimeout(() => {
      resultDiv.innerHTML = `
        <div class="choice ${results[idx].name}">
          <img src="./images/icon-${results[idx].name}.png" alt="${results[idx].name}" />
        </div>
      `;
    }, idx * 1000);
  });

  gameDiv.classList.toggle("hidden");
  resultsDiv.classList.toggle("hidden");
}

function displayWinner(results) {
  setTimeout(() => {
    const userWins = isWinner(results);
    const aiWins = isWinner(results.reverse());

    if (userWins) {
      resultText.innerText = "you win";
      resultDivs[0].classList.toggle("winner");
    //  document.getElementsByClassName("next").style.display='inline';
      keepScore(1);
    } else if (aiWins) {
      resultText.innerText = "you lose";
      resultDivs[1].classList.toggle("winner");
      // document.getElementsByClassName("next").style.display='none';
      keepScore(-1);
    } else {
      resultText.innerText = "draw";
      // document.getElementsByClassName("next").style.display='none';
    }
    resultWinner.classList.toggle("hidden");
    resultsDiv.classList.toggle("show-winner");
  }, 1000);
}

function isWinner(results) {
  return results[0].beats === results[1].name;
}

function keepScore(point) {
  score += point;
  scoreNumber.innerText = score;
}


// Play Again
playAgainBtn.addEventListener("click", () => {
  gameDiv.classList.toggle("hidden");
  resultsDiv.classList.toggle("hidden");

  resultDivs.forEach((resultDiv) => {
    resultDiv.innerHTML = "";
    resultDiv.classList.remove("winner");
  });

  resultText.innerText = "";
  resultWinner.classList.toggle("hidden");
  resultsDiv.classList.toggle("show-winner");
});


function replay(){
  console.log('hey')
  // playArea.style.display='flex'
  afterPlay.style.display='none'
  playAgainBtn.style.display='none'
  userClassList.setAttribute('class','choiceBtn-container')
  pcClassList.setAttribute('class', 'choiceBtn-container')
  // On replay remove shadow style class
  userWin.classList.remove('winnerShadow')
  pcWin.classList.remove('winnerShadow')
  nextBtn.style.display='none'
  //              OR
  // On replay remove the shadow,  ::after
  // userWin.style.setProperty('--displayValue',  'none')
  // pcWin.style.setProperty('--displayValue', 'none')
  playAgainBtn.innerHTML='PLAY AGAIN'
}


