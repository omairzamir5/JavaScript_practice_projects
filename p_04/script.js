const select_one = document.getElementById('currency-one');
const select_two = document.getElementById('currency-two');
const amount_one = document.getElementById('amount-one');
const amount_two = document.getElementById('amount-two');
const btn_flip = document.getElementById('flip');
const rate = document.getElementById('rate');

function calculate() {
    currOneValue = select_one.value;
    currTwoValue = select_two.value;
    
    fetch(`https://v6.exchangerate-api.com/v6/067f9474f0c89f82d2fc63ed/latest/${currOneValue}`)
    .then( res => res.json()
    .then( data => {

        const conversion_rate = data.conversion_rates[currTwoValue].toFixed(2);
        rate.innerText = `1 ${currOneValue} = ${conversion_rate} ${currTwoValue}`;
        amount_two.value =  amount_one.value*conversion_rate;
        
    }))
}

///Flip Event////
function flip() {
    const temp = select_two.value;
    select_two.value = select_one.value;
    select_one.value = temp;
    calculate();
}

///Event Listeners//////
select_one.addEventListener('change',calculate);
select_two.addEventListener('change',calculate);
amount_one.addEventListener('input',calculate);
amount_two.addEventListener('input',calculate);
btn_flip.addEventListener('click',flip);


calculate();