import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const refs = {
    startBtn: document.querySelector(`button[data-start]`),

    daysEl: document.querySelector('[data-days]'),
    hoursEl: document.querySelector('[data-hours]'),
    minutesEl: document.querySelector('[data-minutes]'),
    secondsEl: document.querySelector('[data-seconds]'),

};

let currentDate = new Date();
let restTime = null;
let deltaTime = null;

const options = {
    enableTime: true,
 enableSeconds: false,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const now = new Date();
        deltaTime = selectedDates[0] - now;

    if (selectedDates[0] < now) {
      return Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      refs.startBtn.removeAttribute('disabled'); 
    }
  },
};



refs.startBtn.setAttribute('disabled', 'true');

const fp = flatpickr("#datetime-picker", options);

refs.startBtn.addEventListener(`click`, startTimer);


function startTimer() {
  intervalId = setInterval(() => {
    
    const deltaTimeObj = convertMs(deltaTime);
      
    visionTimer(deltaTimeObj);
    deltaTime -= 1000; 
  }, 1000);
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
};

function visionTimer(delta) {
    const convertTime = addLeadingZero(delta); 

    refs.daysEl.textContent = convertTime.days;
    refs.hoursEl.textContent = convertTime.hours;
    refs.minutesEl.textContent = convertTime.minutes; 
    refs.secondsEl.textContent = convertTime.seconds; 

};

function addLeadingZero({ days, hours, minutes, seconds }) { 
    
    days = days.toString().padStart(2, '0');
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0'); 
    seconds = seconds.toString().padStart(2, '0'); 

    return { days, hours, minutes, seconds };
};
