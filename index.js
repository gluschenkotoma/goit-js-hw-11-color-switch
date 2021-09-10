const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let intervalId = null;
// let hasPressedBtn = false;

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('body'),
}

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function onStartBtnClick() {
  // if (hasPressedBtn) {
  //   return;
  // };
  intervalId = setInterval(() => {
    // hasPressedBtn = true;
    refs.startBtn.disabled = true;
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000)
};

function onStopBtnClick() {
  clearInterval(intervalId);
  // hasPressedBtn = false;
  refs.startBtn.disabled = false;
};



