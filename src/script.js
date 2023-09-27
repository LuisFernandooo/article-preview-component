
const active = document.querySelector('.icons');

document.querySelector('.share-btn').addEventListener('click', function(){
    this.classList.toggle('press');
    active.classList.toggle('active');
});


document.querySelector('.share-btn2').addEventListener('click', function(){
    active.classList.toggle('active');
});