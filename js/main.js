
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('I LOVE YOU ARI').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};

// Birthday Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('birthday-modal');
  const btn = document.getElementById('birthday-btn');
  const span = document.getElementsByClassName('close')[0];

  // When the user clicks the button, open the modal
  btn.onclick = function() {
    modal.style.display = 'block';
    createConfetti();
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = 'none';
    removeConfetti();
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
      removeConfetti();
    }
  }
});

// Confetti Function
function createConfetti() {
  const modal = document.getElementById('birthday-modal');
  const modalContent = modal.querySelector('.modal-content');
  const confettiContainer = document.createElement('div');
  confettiContainer.className = 'confetti-container';
  modalContent.appendChild(confettiContainer);

  for (let i = 0; i < 140; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti-piece';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = -(Math.random() * 40 + 20) + 'px';
    confetti.style.animationDelay = (Math.random() * 3) + 's';
    confetti.style.setProperty('--confetti-duration', (Math.random() * 2 + 4) + 's');
    confetti.style.backgroundColor = getRandomColor();
    const size = Math.random() * 3 + 2;
    confetti.style.width = size + 'px';
    confetti.style.height = size + 'px';
    confetti.style.opacity = 0.6 + Math.random() * 0.3;
    confettiContainer.appendChild(confetti);
  }
}

function removeConfetti() {
  const confettiContainer = document.querySelector('.confetti-container');
  if (confettiContainer) {
    confettiContainer.remove();
  }
}

function getRandomColor() {
  const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7', '#a29bfe', '#fd79a8', '#e17055'];
  return colors[Math.floor(Math.random() * colors.length)];
}