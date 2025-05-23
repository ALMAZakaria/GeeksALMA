function playSound(e) {
  // Check for keyboard event or mouse click
  const keyCode = e.keyCode || parseInt(this.getAttribute('data-key'));
  
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  
  if (!audio) return; // stop if no audio element
  
  audio.currentTime = 0; // rewind to start
  audio.play();
  
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

// Keyboard events
window.addEventListener('keydown', playSound);

// Click events
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
  key.addEventListener('click', playSound);
  key.addEventListener('transitionend', removeTransition);
});