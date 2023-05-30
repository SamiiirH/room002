const doorButton = document.getElementById('doorButton');
const doorSound = document.getElementById('doorSound');

doorButton.addEventListener('click', function() {
  doorSound.currentTime = 0;
  doorSound.play().catch(function(error) {
    console.error('Failed to play audio:', error);
  });
});
