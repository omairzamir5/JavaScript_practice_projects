const  main = document.querySelector('#main');
const addUserButton = document.querySelector('#add-user');
const doubleButton = document.querySelector('#double');
const showMillionairesButton = document.querySelector('#show-millionaires');
const sortButton = document.querySelector('#sort');
const calculateTotalButton = document.querySelector('#calculate-total');

//Initializing Data Array
let data = [];


//Create initial User
generateRandomUser();
generateRandomUser();
generateRandomUser();

async function generateRandomUser() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();

    const user = data.results[0];
    const newUser = {
        name: `${user.name.title} ${user.name.first} ${user.name.last} `,
        worth: Math.round(Math.random()*100000) 
    };
    addData(newUser);
}

function addData(newUser) {
    data.push(newUser);   
    updateDOM(data);
}

//function to update the UI of DOM
function updateDOM(inputData = data) {
    main.innerHTML = '<h2><strong>Name</strong>Net Worth</h2>';
    data.forEach( item => {
        const worth = convetToCurrency(item.worth);
        const element = document.createElement('div');
        element.classList.add('name');
        element.innerHTML = `<strong>${item.name}</strong>$ ${worth}`;
        main.appendChild(element);
    });
}

//Function to convert number to Currency
function convetToCurrency(number) {
    return (number).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}