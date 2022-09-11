// библиотека flatpickr
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


// библиотека notiflix
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startBtn = document.querySelector('button[data-start]');
const daysData = document.querySelector('span[data-days]');
const hoursData = document.querySelector('span[data-hours]');
const minutesData = document.querySelector('span[data-minutes]');
const secondsData = document.querySelector('span[data-seconds]');

let selectedTime = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    minDate: 'today', 
  

  onReady() {
    startBtn.setAttribute('disabled', true);
  },

  onClose(selectedDates) {
    selectedTime = selectedDates[0].getTime();

    if (startBtn.hasAttribute('disabled')) {
      Notify.success('Thank you.'); 
      startBtn.removeAttribute('disabled');
    }
  },
};

startBtn.addEventListener('click', onStartBtnClick);

flatpickr('#datetime-picker', options);

function onStartBtnClick() {
  startBtn.setAttribute('disabled', true);

  const intervalId = setInterval(() => {
    if (selectedTime - Date.now() < 0) {
      clearInterval(intervalId);
      return;
    }

    const toSelectedDate = convertMs(selectedTime - Date.now());
    updateDate(toSelectedDate);
  }, 1000);
}

function convertMs(Ms) {
  
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(Ms / day);
  const hours = Math.floor((Ms % day) / hour);
  const minutes = Math.floor(((Ms % day) % hour) / minute);
  const seconds = Math.floor((((Ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}

function updateDate({ days, hours, minutes, seconds }) {
    daysData.textContent = addLeadingZero(days);
    hoursData.textContent = addLeadingZero(hours);
    minutesData.textContent = addLeadingZero(minutes);
    secondsData.textContent = addLeadingZero(seconds);
}