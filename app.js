let btn = document.getElementById('btn');
const offBulb = document.getElementById('offBulb');
const onBulb = document.getElementById('onBulb');
let container = document.querySelector('.container');
let imgs = document.createElement('img');
imgs.src = 'bulb_light.jpg';
imgs.id = 'onBulb';
imgs.className = 'active';

btn.addEventListener('click', () => {
  if (btn.innerText === 'ON') {
    container.appendChild(imgs);
    btn.innerText = 'OFF';
  } else {
    container.removeChild(imgs);
    btn.innerText = 'ON';
  }
});
