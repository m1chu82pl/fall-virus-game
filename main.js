const startButton = document.querySelector(".tap__img");
const startGame = document.querySelector(".start-game");
const virusHome = document.querySelector(".virus-home");
const score = document.querySelector('.score');
const wraper = document.querySelector('.wraper');
const viruses = document.querySelectorAll('.virusImg');
const doctorTitle = document.querySelector('.doctorTitle');
const doctorTitleFirst = document.querySelector('.doctorTitle__first');
const doctorTitleSecond = document.querySelector('.doctorTitle__second');
const endGame = document.querySelector('.end-game');
const endGameButton = document.querySelector('.button');

let counter = 0;
let levelTime;

function scoreLevel(counter) {
  if (counter < 0) {
    levelTime = 4500;
  } else if (counter >= 0 && counter < 5) {
    levelTime = 3500;
  } else if (counter >= 5 && counter < 10) {
    levelTime = 2700;
  } else if (counter >= 10 && counter < 20) {
    levelTime = 2000;
  } else if (counter >= 20 && counter < 30) {
    levelTime = 1800;
  } else if (counter >= 30 && counter < 40) {
    levelTime = 1700;
  } else if (counter >= 40 && counter < 50) {
    levelTime = 1600;
  } else if (counter >= 50 && counter < 60) {
    levelTime = 1500;
  } else if (counter >= 60 && counter < 70) {
    levelTime = 1400;
  } else if (counter >= 70 && counter < 85) {
    levelTime = 1300;
  } else {
    levelTime = 1200;
  };
};

function theGame() {
  startButton.classList.add("tap__img--active");
  window.setTimeout(function () {
    startButton.classList.remove("tap__img--active");
  }, 150);
  
  window.setTimeout(function () {
    startGame.style.display = "none";
  }, 320);
  
  let buildVirusesTimer = setTimeout(function buildViruses() {
    const minLeftPosition = 0;
    const maxLeftPosition = 80;
    let randomPosition = Math.floor(Math.random() * (maxLeftPosition - minLeftPosition + 1)) + minLeftPosition;
    let digit = Math.floor(Math.random() * 9) + 1;

    const addImg = document.createElement("img");
    addImg.style.left = randomPosition + "%";
    
    window.setTimeout(function () {
      addImg.style.top = "115%";
      if (counter < 50) {
        let rotate = (digit % 2 === 0 ? "+" : "-") + (randomPosition < 30 ? 80 - randomPosition : randomPosition);
        addImg.style.transform = `rotate(${rotate}deg)`;
      };
    },100);
    
    scoreLevel(counter);

    function handleSubtract(e) {
      e.preventDefault();
      virusHome.removeChild(addImg);
      counter--;
      score.innerText = `score: ${counter}`;
      clearTimeout(buildVirusesTimer);
      buildViruses();
    };

    function handleAdd(e) {
      e.preventDefault();
      virusHome.removeChild(addImg);
      counter++;
      score.innerText = `score: ${counter}`;
      clearTimeout(buildVirusesTimer);
      buildViruses();
    };

    function virusOutOfView() {
      if (addImg.offsetTop > innerHeight) {
        virusHome.removeChild(addImg);
        counter--;
        score.innerText = `score: ${counter}`;
      }
    };
    
    function positiveOutOfView() {
      if (addImg.offsetTop > innerHeight) {
        virusHome.removeChild(addImg);
        counter++;
        score.innerText = `score: ${counter}`;
      }
    };

    function handleAdd2(e) {
      e.preventDefault();
      virusHome.removeChild(addImg);
      counter += 2;
      score.innerText = `score: ${counter}`;
      clearTimeout(buildVirusesTimer);
      buildViruses();
    };

    function touchDentist(e) {
      e.preventDefault();
      let randomScoreDoctor = Math.floor(Math.random() * 10) + 1;
      if ((randomScoreDoctor) % 2) {
        counter += randomScoreDoctor;
        doctorTitleFirst.innerText = "I'll save your life!";
        doctorTitleSecond.innerText = `you get: ${randomScoreDoctor}`;
        doctorTitle.style.transform = "translate(-50%, -50%) scale(1)";
        doctorTitle.style.color = "rgb(86, 168, 53)";
        setTimeout(function () {
          doctorTitle.style.transform = "translate(-50%, -50%) scale(0)";
        }, levelTime / 2);
      } else {
        counter -= randomScoreDoctor;
        doctorTitleFirst.innerText = "We've got another death!";
        doctorTitleSecond.innerText = `you lose: ${randomScoreDoctor}`;
        doctorTitle.style.transform = "translate(-50%, -50%) scale(1)";
        doctorTitle.style.color = "rgb(182, 68, 68)";
        setTimeout(function () {
          doctorTitle.style.transform = "translate(-50%, -50%) scale(0)";
        }, levelTime / 2);
      };
      score.innerText = `score: ${counter}`;
      virusHome.removeChild(event.target);

      clearTimeout(buildVirusesTimer);
      buildViruses();
    };

    if (digit === 1) {
      addImg.setAttribute("src", `images/coronavirus1.png`);
      addImg.classList.add(`virusImg`);
      addImg.style.transition = `${levelTime}ms linear`;
      addImg.addEventListener("touchstart", handleAdd);
      addImg.addEventListener("mousedown", handleAdd);
      window.setTimeout(virusOutOfView, levelTime);
    } else if (digit === 2) {
      addImg.setAttribute("src", `images/coronavirus2.png`);
      addImg.classList.add(`virusImg`);
      addImg.style.transition = `${levelTime}ms linear`;
      addImg.addEventListener("touchstart", handleAdd);
      addImg.addEventListener("mousedown", handleAdd);
      window.setTimeout(virusOutOfView, levelTime);
    } else if (digit === 3) {
      addImg.setAttribute("src", `images/coronavirus3.png`);
      addImg.classList.add(`virusImg`);
      addImg.style.transition = `${levelTime}ms linear`;
      addImg.addEventListener("touchstart", handleAdd);
      addImg.addEventListener("mousedown", handleAdd);
      window.setTimeout(virusOutOfView, levelTime);
    } else if (digit === 4) {
      addImg.setAttribute("src", `images/coronavirus4.png`);
      addImg.classList.add(`virusImg`);
      addImg.style.transition = `${levelTime}ms linear`;
      addImg.addEventListener("touchstart", handleAdd);
      addImg.addEventListener("mousedown", handleAdd);
      window.setTimeout(virusOutOfView, levelTime);
    } else if (digit === 5) {
      addImg.setAttribute("src", `images/coronavirus5.png`);
      addImg.classList.add(`virusImg__plus`);
      addImg.style.transition = `${levelTime - 200}ms ease-in-out`;
      addImg.addEventListener("touchstart", handleAdd2);
      addImg.addEventListener("mousedown", handleAdd2);
      window.setTimeout(function () {
        if (addImg.offsetTop > innerHeight) {
          virusHome.removeChild(addImg);
          counter -= 2; /* virusOutOfView have got counter -1 */
          score.innerText = `score: ${counter}`;
        };
      }, levelTime);
    } else if (digit === 6) {
      addImg.setAttribute("src", `images/dentist.png`);
      addImg.classList.add(`quarantine__plus`);
      addImg.style.transition = `${levelTime - 200}ms ease-in-out`;      
      addImg.addEventListener("touchstart", touchDentist);
      addImg.addEventListener("mousedown", touchDentist);
      window.setTimeout(function () {
        if (addImg.offsetTop > innerHeight) {
          virusHome.removeChild(addImg);
          counter += 2; /* virusOutOfView have got counter -1 */
          score.innerText = `score: ${counter}`;
        };
      }, levelTime);
    } else if (digit === 7) {
      addImg.setAttribute("src", `images/dont panic.png`);
      addImg.classList.add(`quarantine`);
      addImg.style.transition = `${levelTime}ms linear`;
      addImg.addEventListener("touchstart", handleSubtract);
      addImg.addEventListener("mousedown", handleSubtract);
      window.setTimeout(positiveOutOfView, levelTime);
    } else if (digit === 8) {
      addImg.setAttribute("src", `images/happy.png`);
      addImg.classList.add(`quarantine`);
      addImg.style.transition = `${levelTime}ms linear`;
      addImg.addEventListener("touchstart", handleSubtract);
      addImg.addEventListener("mousedown", handleSubtract);
      window.setTimeout(positiveOutOfView, levelTime);
    } else {
      addImg.setAttribute("src", `images/stay positive.png`);
      addImg.classList.add(`quarantine`);
      addImg.style.transition = `${levelTime}ms linear`;
      addImg.addEventListener("touchstart", handleSubtract);
      addImg.addEventListener("mousedown", handleSubtract);
      window.setTimeout(positiveOutOfView, levelTime);
    };
    virusHome.appendChild(addImg);
    buildVirusesTimer = setTimeout(buildViruses, levelTime);
    if (counter >= 100) {
      virusHome.removeChild(addImg);
      clearTimeout(buildVirusesTimer);
      score.innerText = `you win!`;
      window.setTimeout(function () {
        endGame.style.display = "flex";
        counter = 0;
        score.innerText = "are you sure?";
      }, 2000);
    };
  }, levelTime);
};

function newGame() {
  endGame.style.display = "none";
  startGame.style.display = "flex";
};

startButton.addEventListener("click", theGame);
endGameButton.addEventListener("click", newGame);