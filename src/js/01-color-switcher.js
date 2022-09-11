// Обращаемся к кнопкам 
  const btnStart = document.querySelector('button[data-start]');
  const btnStop = document.querySelector('button[data-stop]');

  //  вешаем слушателся событий
btnStart.addEventListener('click', onStartButton);
btnStop.addEventListener('click', onStopButton);
  
  let timerId = null;
// функция для генерации случайного цвета
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
// функция старта генерации цветов
  function onStartButton() {
    timerId = setInterval(
      () => (document.body.style.backgroundColor = getRandomHexColor()),
      1000
    );
  // блокируем и чистим кнопки
    btnStart.setAttribute('disabled', true);
    btnStop.removeAttribute('disabled');
  }
  // функция остановки генерации цветов
  function onStopButton() {
    btnStop.setAttribute('disabled', true);
    btnStart.removeAttribute('disabled', false);
  
    clearInterval(timerId);
  }