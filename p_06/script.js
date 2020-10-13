// Get DOM Element 
const toggle = document.getElementById('toggle');
const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');

//Event Listeners

// 1 - Toggle the Nav
toggle.addEventListener('click',() => 
    document.body.classList.toggle('show-nav')
);

// 2 - Open Modal
open.addEventListener('click',() => 
    modal.classList.add('show-modal')
);

// 3 - close Modal
close.addEventListener('click',() => 
    modal.classList.remove('show-modal')
);

// 4 - close modal on click outside modal
window.addEventListener('click', (e) => {
    console.log(e.target)
    e.target === modal ? modal.classList.remove('show-modal') : false
} 

);