function binomialCoefficient(x, n) {
  if (x < 0 || x > n) {
    return 0;
  }

  if (x == 0 || x == n) {
    return 1;
  }

  let c = 1;

  for (let i = 0; i < x; i +=1 ) {
    c = c * (n - i) / (i + 1);
  }

  return c;
}

function binomialPMF(x, p, n) {
  return binomialCoefficient(x, n) * Math.pow(p, x) * Math.pow(1 - p, n - x);
}

function binomialCDF(x, p, n) {
  let sum = 0;

  for (let i = 0; i <= x; i += 1) {
    sum += binomialPMF(i, p, n);
  }

  return sum;
}

function bootstrap() {
  const luckRangeEl = document.querySelector('#luckRange');
  const answerEl = document.querySelector('#answer');
  const tellMeMoreButtonEl = document.querySelector('#tellMeMoreButton');
  const panel1El = document.querySelector('#panel-1');
  const panel2El = document.querySelector('#panel-2');
  const panel3El = document.querySelector('#panel-3');

  tellMeMoreButtonEl.addEventListener('click', (event) => {
    panel1El.classList.toggle('hidden');
    panel2El.classList.toggle('hidden');
    event.preventDefault();
  });

  luckRange.addEventListener('change', (event) => {
    const value = window.parseFloat(event.target.value);
    const currentAnswer = window.parseFloat(answerEl.innerHTML);

    panel3El.classList.remove('hidden');

    for (let n = 1; n < 40; n += 1) {
      const chance = 1 - binomialCDF(0, value, n);
      if (chance > 0.98) {
        answerEl.innerHTML = n;
        break;
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', bootstrap);
