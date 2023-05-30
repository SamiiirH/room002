const doorButton = document.getElementById('doorButton');
const doorSound = document.getElementById('doorSound');

doorButton.addEventListener('click', function() {
  doorSound.play();
});    
