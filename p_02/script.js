const container = document.querySelector('.container');
const seats = document.querySelectorAll('.container .row .seat:not(.occupied)');
let count = document.getElementById('count');
let total = document.getElementById('total');
const movieSelect = document.getElementById('movie-list');
let ticketPrice = +movieSelect.value;

populateUI();
//Function to update Selected Seats
function updateSelectedSeats() {
    const selectedSeats = container.querySelectorAll('.seat.selected');
    const countSelectedSeats = selectedSeats.length;
    
    const seatIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    
    localStorage.setItem('selectedSeats',JSON.stringify(seatIndex));

    count.innerText = countSelectedSeats;
    total.innerText = countSelectedSeats * ticketPrice;
    
}
//function to set movie Data
function setMovieData(movieIndex,ticketPrice) {
    localStorage.setItem('selectedMovieIndex',movieIndex);
    localStorage.setItem('selectedMoviePrice',ticketPrice);
}

//funtion to pull data for UI
function populateUI() {
    selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach( (seat,index) => {
            if (selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        });
    }
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if (selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}
//Event listner for on change movie select
movieSelect.addEventListener('change', (e)=> {
    
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex,ticketPrice);
    updateSelectedSeats();
});

//Event Listener for click on available seats
container.addEventListener('click', (e) => {
    
    if (e.target.classList.contains('seat')) {
        e.target.classList.toggle('selected');
        updateSelectedSeats();
    }
});
updateSelectedSeats();