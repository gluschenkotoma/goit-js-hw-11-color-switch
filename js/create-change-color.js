import refs from "./refs.js";

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];
// функция рандомного переключения цвета
function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let intervalId = null; //идентификатор сетинтервала
let isActive = false;

export function startСhangeСolor() {
  if (isActive) {
    return;
  }

  isActive = true;
  refs.startBtn.setAttribute("disabled", "disabled");

  intervalId = setInterval(() => {
    refs.body.style.backgroundColor = `${
      colors[randomIntegerFromInterval(0, colors.length - 1)]
    }`;
  }, 1000);
}

export function stopСhangeСolor() {
  clearInterval(intervalId); //зачистка интеравала
  isActive = false;
  refs.startBtn.removeAttribute("disabled"); //снять класс disabled  при клике стоп
}
