// 1. Get value of bill
// 2. Get value of tip
// 3. Get number of people
// (Maybe ask if they are splitting the bill t.b.d)
// 4. Calculate the tip based on the given input
// 5. Calculate the total per person (if they are not splitting the bill, then this will change)


const billAmount = document.querySelector('#bill')
const customButton = document.querySelector('#custom')
const numOfPeople = document.querySelector('#people')
const tipButtons = document.getElementsByClassName('tip')
const tipAM = document.querySelector('#tip-amount')
const tipAMPer = document.querySelector('#tip-amount-per');
const totalAM = document.querySelector('#total')
const peopleErr = document.querySelector('#people-err')
const billErr = document.querySelector('#bill-err')
const totalAMPer = document.querySelector('#totalAmPer')
const reset = document.querySelector('#reset')

let tipAmount = 0;

for (let button of tipButtons) {
    button.addEventListener('click', () => {
        tipAmount = Number(button.value) / 100

    })
}


// how much their bill/ is, gets the value

numOfPeople.addEventListener('input', function() {
    if (Number(billAmount.value) < 1) {
        billErr.style.visibility = 'visible'
        tipAM.textContent = `$0.00`
        totalAM.textContent = `$0.00`
        tipAMPer.textContent = `$0.00`;
        totalAMPer.textContent = `$0.00`;
    } else if (Number(numOfPeople.value) == 0) {
        peopleErr.style.visibility = 'visible'
        tipAM.textContent = `$0.00`
        totalAM.textContent = `$0.00`
        tipAMPer.textContent = `$0.00`;
        totalAMPer.textContent = `$0.00`;
    } else if (Number(numOfPeople.value) == 0 && Number(billAmount.value) == 0) {
        billErr.style.visibility = 'visible'
        peopleErr.style.visibility = 'visible'
        tipAM.textContent = `$0.00`
        totalAM.textContent = `$0.00`
        tipAMPer.textContent = `$0.00`;
        totalAMPer.textContent = `$0.00`;
    } else {
        if (customButton.value !== '') {
            tipAmount = Number((customButton.value) / 100)
        }
        peopleErr.style.visibility = 'hidden';
        billErr.style.visibility = 'hidden'
        const bill = Number(billAmount.value)
        const peopleAmount = Number(numOfPeople.value);

        const tipTotal = bill * tipAmount;
        const tipTotalPerPerson = tipTotal / peopleAmount;

        tipAM.textContent = `$${tipTotal.toFixed(2)}`;
        tipAMPer.textContent = `$${tipTotalPerPerson.toFixed(2)}`;

        const totalAmount = bill + tipTotal
        const totalAmountPerPerson = totalAmount / peopleAmount;
        totalAM.textContent = `$${totalAmount.toFixed(2)}`
        totalAMPer.textContent =  `$${totalAmountPerPerson.toFixed(2)}`
        if (tipTotal < 0 || !Number.isFinite(tipTotalPerPerson)) {
            resetAllValues();
        }  
    } 
}) 


function resetAllValues() {
    tipAM.textContent = `$0.00`
    totalAM.textContent = `$0.00`
    tipAMPer.textContent = `$0.00`;
    totalAMPer.textContent = `$0.00`;
}

reset.addEventListener('click', function() {
    resetAllValues();
})