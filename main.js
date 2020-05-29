const startButton = document.querySelector(".tap");
const startGame = document.querySelector(".start-game");
const virusHome = document.querySelector(".virus-home");
const score = document.querySelector('.score');
const wraper = document.querySelector('.wraper');
const viruses = document.querySelectorAll('.virusImg');
const doctorTitle = document.querySelector('.doctorTitle');
const doctorTitleFirst = document.querySelector('.doctorTitle__first');
const doctorTitleSecond = document.querySelector('.doctorTitle__second');


let counter = 3;
let levelTime;

function scoreLevel(counter) {
  if (counter < 5) {
    levelTime = 4000;
  } else if (counter >= 5 && counter < 10) {
    levelTime = 3400;
  } else if (counter >= 10 && counter < 20) {
    levelTime = 3000;
  } else if (counter >= 20 && counter < 30) {
    levelTime = 2800;
  } else if (counter >= 30 && counter < 40) {
    levelTime = 2600;
  } else if (counter >= 40 && counter < 50) {
    levelTime = 2400;
  } else if (counter >= 50 && counter < 60) {
    levelTime = 2200;
  } else if (counter >= 60 && counter < 70) {
    levelTime = 2000;
  } else if (counter >= 70 && counter < 85) {
    levelTime = 1800;
  } else {
    levelTime = 1600;
  };
};

console.log(levelTime);

startButton.addEventListener("click", function () {

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

    const addImg = document.createElement("img");
    addImg.style.left = randomPosition + "%";

    window.setTimeout(function () {
      let rotate = (digit % 2 === 0 ? "+" : "-") + (randomPosition < 30 ? 80 - randomPosition : randomPosition);
      addImg.style.top = "115%"; /* czy można przypisać od razu w css podczas dodawania klasy? */
      addImg.style.transform = `rotate(${rotate}deg)`;
    }, 150);

    scoreLevel(counter);

    window.setTimeout(function () {
      if (addImg.offsetTop > innerHeight) {
        if (addImg.className === "virusImg") {
          virusHome.removeChild(addImg);
          counter--;
          score.innerText = `score: ${counter}`;
        } else if (addImg.className === "virusImg__plus") {
          virusHome.removeChild(addImg);
          counter -= 2;
          score.innerText = `score: ${counter}`;
        } else if (addImg.className === "quarantine") {
          virusHome.removeChild(addImg);
          counter++;
          score.innerText = `score: ${counter}`;
        } else if (addImg.className === "quarantine__plus") {
          virusHome.removeChild(addImg);
          counter += 2;
          score.innerText = `score: ${counter}`;
        }
      }
    }, levelTime);

    if (digit === 1) {
      addImg.setAttribute("src", `images/coronavirus1.png`);
      addImg.classList.add(`virusImg`);
      addImg.style.transition = `${levelTime}ms linear`;
    } else if (digit === 2) {
      addImg.setAttribute("src", `images/coronavirus2.png`);
      addImg.classList.add(`virusImg`);
      addImg.style.transition = `${levelTime}ms linear`;
    } else if (digit === 3) {
      addImg.setAttribute("src", `images/coronavirus3.png`);
      addImg.classList.add(`virusImg`);
      addImg.style.transition = `${levelTime}ms linear`;
    } else if (digit === 4) {
      addImg.setAttribute("src", `images/coronavirus4.png`);
      addImg.classList.add(`virusImg`);
      addImg.style.transition = `${levelTime}ms linear`;
    } else if (digit === 5) {
      addImg.setAttribute("src", `images/coronavirus5.png`);
      addImg.classList.add(`virusImg__plus`);
      addImg.style.transition = `${levelTime - 200}ms ease-in-out`;
    } else if (digit === 6) {
      addImg.setAttribute("src", `images/dentist.png`);
      addImg.classList.add(`quarantine__plus`);
      addImg.style.transition = `${levelTime - 200}ms ease-in-out`;
    } else if (digit === 7) {
      addImg.setAttribute("src", `images/dont panic.png`);
      addImg.classList.add(`quarantine`);
      addImg.style.transition = `${levelTime}ms linear`;
    } else if (digit === 8) {
      addImg.setAttribute("src", `images/happy.png`);
      addImg.classList.add(`quarantine`);
      addImg.style.transition = `${levelTime}ms linear`;
    } else {
      addImg.setAttribute("src", `images/stay positive.png`);
      addImg.classList.add(`quarantine`);
      addImg.style.transition = `${levelTime}ms linear`;
    };
    virusHome.appendChild(addImg);

    buildVirusesTimer = setTimeout(buildViruses, levelTime);

    if (counter >= 10) {
      virusHome.removeChild(addImg);
      clearTimeout(buildVirusesTimer);
      console.log("masz: " + counter + " punktów. Czas skończyć grę!");
    };
  }, levelTime);
});

wraper.addEventListener('touchstart', function (event) {
  if (event.target.className === 'virusImg') {
    virusHome.removeChild(event.target);
    counter++;
    score.innerText = `score: ${counter}`;
  } else if (event.target.className === 'virusImg__plus') {
    virusHome.removeChild(event.target);
    counter += 2;
    score.innerText = `score: ${counter}`;
  } else if (event.target.className === 'quarantine') {
    virusHome.removeChild(event.target);
    counter--;
    score.innerText = `score: ${counter}`;
  } else if (event.target.className === 'quarantine__plus') {
    let randomScoreDoctor = Math.floor(Math.random() * 10) + 1;
    if ((randomScoreDoctor) % 2) {
      counter += randomScoreDoctor;
      doctorTitleFirst.innerText = "Chętnie pomogę!";
      doctorTitleSecond.innerText = `dostajesz: ${randomScoreDoctor}`;
      doctorTitle.style.transform = "translate(-50%, -50%) scale(1)";
      setTimeout(function () {
        doctorTitle.style.transform = "translate(-50%, -50%) scale(0)";
      }, levelTime / 2);
      console.log(levelTime);
    } else {
      counter -= randomScoreDoctor;
      doctorTitleFirst.innerText = "Mamy kolejny zgon!!!";
      doctorTitleSecond.innerText = `tracisz: ${randomScoreDoctor}`;
      doctorTitle.style.transform = "translate(-50%, -50%) scale(1)";
      setTimeout(function () {
        doctorTitle.style.transform = "translate(-50%, -50%) scale(0)";
      }, levelTime / 2);
      console.log(levelTime);
    };
    score.innerText = `score: ${counter}`;
    virusHome.removeChild(event.target);
  };
  console.log("po kliknięciu " + counter);
});