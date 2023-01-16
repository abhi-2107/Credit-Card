const card2 = 'linear-gradient(217deg, rgba(20,0,0,.8), rgba(25,0,0,0) 70.71%),linear-gradient(127deg, rgba(65,30,10,.8), rgba(15,30,10,0) 70.71%),linear-gradient(336deg, rgba(10,0,25,.8), rgba(10,0,25,0) 70.71%)'


const card1 = 'repeating-radial-gradient(circle at 0%, #123, #333 80px, #eee 70px, #eee 70px)'

const card3 ='linear-gradient(0.12turn, #0a58ca, #212529, #373b3e)'


const cardColor = document.getElementById('card-color');
const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const purple = document.getElementById('purple');
cardColor.style.background = card1;

red.addEventListener('click', () => {
  cardColor.style.background = card1 ;
});
green.addEventListener('click', () => {
  cardColor.style.background = card2;
});
blue.addEventListener('click', () => {
  cardColor.style.background = card3;
});
purple.addEventListener('click', () => {
  cardColor.style.background = 'linear-gradient(268.73deg, #FFB9B9 9.36%, #84B5F3 99.72%)';
});

