const btnPlay = document.querySelector('.btn-play');
const modalOverlay = document.querySelector('.modal-overlay');

btnPlay.addEventListener('click', function(){
  modalOverlay.classList.add('active');
})

document.querySelector('.close-modal').addEventListener('click', function(){
  modalOverlay.classList.remove('active');
})