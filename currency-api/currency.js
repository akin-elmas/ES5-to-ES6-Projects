class Currency {
    constructor(firstCurrency,secondCurrency){
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "https://api.exchangeratesapi.io/latest?base=";
        this.amount = null;
    }
    exchange(){
        return new Promise((resolve,reject) => {
            fetch(this.url + this.firstCurrency) // veriyi bir response obj olarak vericek
            .then(response =>response.json()) // buda bir promise doner
            .then(data => {
                let parity = data.rates[this.secondCurrency];
                let amount2 = Number(this.amount);

                let total = parity * amount2;
                resolve(total);
                
            })
            .catch(err=>reject(err));
        });
        
    }
    changeAmount(amount){
        this.amount = amount;
    }
    changeFirstCurrency(newFirstCurrency){ // dinamik input
        this.firstCurrency = newFirstCurrency;
    }
    changeSecondCurrency(newSecondCurrency){
        this.secondCurrency = newSecondCurrency;
    }
}