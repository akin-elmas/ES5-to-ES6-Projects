// Element secimi

let amountElement = document.querySelector("#amount");
let firstSelect = document.querySelector("#firstCurrency");
let secondSelect = document.querySelector("#secondCurrency");
let currency = new Currency("USD","TRY");
let ui = new UI(firstSelect,secondSelect);
eventListeners();

function eventListeners(){
    amountElement.addEventListener("input",exchangeCurrency);
    firstSelect.onchange = function(){
        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent); // input1 deki secimi aldik ve yolladik
        ui.changeFirst();
    };
    secondSelect.onchange = function(){
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent);
        ui.changeSecond();
    };
}

function exchangeCurrency(){
    currency.changeAmount(amountElement.value);
    currency.exchange()
    .then(result =>{
        ui.displayResult(result);
    })
    .catch(err => console.log(err));
}