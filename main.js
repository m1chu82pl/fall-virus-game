const startButton = document.querySelector(".tap");
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
  startButton.classList.add("tap__active");
  window.setTimeout(function () {
    startButton.classList.remove("tap__active");
  }, 150);
  
  window.setTimeout(function () {
    startGame.style.display = "none";
  }, 320);
  
  let buildVirusesTimer = setTimeout(function buildViruses() {
    const minLeftPosition = 0;
    const maxLeftPosition = 80;
    let randomPosition = Math.floor(Math.random() * (maxLeftPosition - minLeftPosition + 1)) + minLeftPosition;
    let digit = Math.floor(Math.random() * 9) + 1;
    // let digit = 9;

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
    console.log(levelTime);

    function handleSubtract(e) {
      e.preventDefault()
      console.log("touchstart")
      virusHome.removeChild(addImg);
      counter--;
      score.innerText = `score: ${counter}`;

      clearTimeout(buildVirusesTimer);
      buildViruses();
    };

    function handleAdd(e) {
      e.preventDefault()
      console.log("touchstart")
      virusHome.removeChild(addImg);
      counter++;
      score.innerText = `score: ${counter}`;

      clearTimeout(buildVirusesTimer);
      buildViruses();
    };

    // function handleInteraction(evt) {
    //   evt.preventDefault()
    //   console.log('interacted')
    // }





    if (digit === 1) {
      addImg.setAttribute("src", `images/coronavirus1.png`);
      addImg.classList.add(`virusImg`);
      addImg.style.transition = `${levelTime}ms linear`;

      addImg.addEventListener("touchstart", handleAdd);
      addImg.addEventListener("mousedown", handleAdd);

      window.setTimeout(function () {
        if (addImg.offsetTop > innerHeight) {
          virusHome.removeChild(addImg);
          counter--;
          score.innerText = `score: ${counter}`;
        }
      }, levelTime);
    } else if (digit === 2) {
      addImg.setAttribute("src", `images/coronavirus2.png`);
      addImg.classList.add(`virusImg`);
      addImg.style.transition = `${levelTime}ms linear`;

      addImg.addEventListener("touchstart", handleAdd);
      addImg.addEventListener("mousedown", handleAdd);

      window.setTimeout(function () {
        if (addImg.offsetTop > innerHeight) {
          virusHome.removeChild(addImg);
          counter--;
          score.innerText = `score: ${counter}`;
        }
      }, levelTime);

    } else if (digit === 3) {
      addImg.setAttribute("src", `images/coronavirus3.png`);
      addImg.classList.add(`virusImg`);
      addImg.style.transition = `${levelTime}ms linear`;

      addImg.addEventListener("touchstart", handleAdd);
      addImg.addEventListener("mousedown", handleAdd);

      window.setTimeout(function () {
        if (addImg.offsetTop > innerHeight) {
          virusHome.removeChild(addImg);
          counter--;
          score.innerText = `score: ${counter}`;
        }
      }, levelTime);

    } else if (digit === 4) {
      addImg.setAttribute("src", `images/coronavirus4.png`);
      addImg.classList.add(`virusImg`);
      addImg.style.transition = `${levelTime}ms linear`;

      addImg.addEventListener("touchstart", handleAdd);
      addImg.addEventListener("mousedown", handleAdd);

      window.setTimeout(function () {
        if (addImg.offsetTop > innerHeight) {
          virusHome.removeChild(addImg);
          counter--;
          score.innerText = `score: ${counter}`;
        }
      }, levelTime);

    } else if (digit === 5) {
      addImg.setAttribute("src", `images/coronavirus5.png`);
      addImg.classList.add(`virusImg__plus`);
      addImg.style.transition = `${levelTime - 200}ms ease-in-out`;

      addImg.addEventListener("touchstart", function () {
        console.log("touchstart")
        virusHome.removeChild(addImg);
        counter += 2;
        score.innerText = `score: ${counter}`;

        clearTimeout(buildVirusesTimer);
        buildViruses();
      });

      window.setTimeout(function () {
        if (addImg.offsetTop > innerHeight) {
          virusHome.removeChild(addImg);
          counter -= 2;
          score.innerText = `score: ${counter}`;
        }
      }, levelTime);

    } else if (digit === 6) {
      addImg.setAttribute("src", `images/dentist.png`);
      addImg.classList.add(`quarantine__plus`);
      addImg.style.transition = `${levelTime - 200}ms ease-in-out`;

      addImg.addEventListener("touchstart", function () {
        console.log("touchstart")
        let randomScoreDoctor = Math.floor(Math.random() * 10) + 1;
        if ((randomScoreDoctor) % 2) {
          counter += randomScoreDoctor;
          doctorTitleFirst.innerText = "Chętnie pomogę!";
          doctorTitleSecond.innerText = `dostajesz: ${randomScoreDoctor}`;
          doctorTitle.style.transform = "translate(-50%, -50%) scale(1)";
          setTimeout(function () {
            doctorTitle.style.transform = "translate(-50%, -50%) scale(0)";
          }, levelTime / 2);
        } else {
          counter -= randomScoreDoctor;
          doctorTitleFirst.innerText = "Mamy kolejny zgon!!!";
          doctorTitleSecond.innerText = `tracisz: ${randomScoreDoctor}`;
          doctorTitle.style.transform = "translate(-50%, -50%) scale(1)";
          setTimeout(function () {
            doctorTitle.style.transform = "translate(-50%, -50%) scale(0)";
          }, levelTime / 2);
        };
        score.innerText = `score: ${counter}`;
        virusHome.removeChild(event.target);

        clearTimeout(buildVirusesTimer);
        buildViruses();
      });

      window.setTimeout(function () {
        if (addImg.offsetTop > innerHeight) {
          virusHome.removeChild(addImg);
          counter += 2;
          score.innerText = `score: ${counter}`;
        }
      }, levelTime);

    } else if (digit === 7) {
      addImg.setAttribute("src", `images/dont panic.png`);
      addImg.classList.add(`quarantine`);
      addImg.style.transition = `${levelTime}ms linear`;

      addImg.addEventListener("touchstart", handleSubtract);
      addImg.addEventListener("mousedown", handleSubtract);

      window.setTimeout(function () {
        if (addImg.offsetTop > innerHeight) {
          virusHome.removeChild(addImg);
          counter++;
          score.innerText = `score: ${counter}`;
        }
      }, levelTime);

    } else if (digit === 8) {
      addImg.setAttribute("src", `images/happy.png`);
      addImg.classList.add(`quarantine`);
      addImg.style.transition = `${levelTime}ms linear`;

      addImg.addEventListener("touchstart", handleSubtract);
      addImg.addEventListener("mousedown", handleSubtract);

      window.setTimeout(function () {
        if (addImg.offsetTop > innerHeight) {
          virusHome.removeChild(addImg);
          counter++;
          score.innerText = `score: ${counter}`;
        }
      }, levelTime);

    } else {
      addImg.setAttribute("src", `images/stay positive.png`);
      addImg.classList.add(`quarantine`);
      addImg.style.transition = `${levelTime}ms linear`;

      addImg.addEventListener("touchstart", handleSubtract);
      addImg.addEventListener("mousedown", handleSubtract);

      window.setTimeout(function () {
        if (addImg.offsetTop > innerHeight) {
          virusHome.removeChild(addImg);
          counter++;
          score.innerText = `score: ${counter}`;
        }
      }, levelTime);
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



// function handleInteraction(evt) {
//   evt.preventDefault()
//   console.log('interacted')
// }
// el.addEventListener('touchstart', handleAdd)
// el.addEventListener('click', handleAdd)