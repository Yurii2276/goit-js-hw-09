import Notiflix from 'notiflix';

const refs = {
  formField: document.querySelector(`form`),
  delayField: document.querySelector(`input[name="delay"]`),
  stepField: document.querySelector(`input[name="step"]`),
  amountField: document.querySelector(`input[name="amount"]`),
};

addEventListener(`submit`, onHandleForm);

function onHandleForm() {
  event.preventDefault();
  
  let delay = Number(refs.delayField.value);
  let step = Number(refs.stepField.value);
  let amount = Number(refs.amountField.value);
  let position = 0;
 
  if (amount <= 0 || delay < 0 || step < 0) {
    Notiflix.Notify.failure(` Please input correct values (>=0)`);
  }

for (let i = 1; i <= amount; i += 1) {
    position = i;
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay += step;
  }
  refs.formField.reset();



  console.log(delay, step, amount, position);
  console.log(`функціям генерайт`);

};


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const intervalId = setInterval(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        clearInterval(intervalId); 
        resolve({ position, delay });
      } else {
        clearInterval(intervalId); 
        reject({ position, delay });
      }
    }, delay);
  });
}


  
  
