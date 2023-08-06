
const refs = {
    startBtn: document.querySelector(`button[data-start]`),
    stopBtn: document.querySelector(`button[data-stop]`),
    bodyField: document.querySelector(`body`),
};

let timerId; 

refs.startBtn.addEventListener(`click`, () => {
    if (!timerId) {
    timerId = setInterval(() => {
        refs.bodyField.style.backgroundColor = getRandomHexColor();
    }, 1000);
        
    refs.startBtn.disabled = true;
    }
} 
    
);

refs.stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
    timerId = null; 
    refs.startBtn.disabled = false;
});
    

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

