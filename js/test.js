// fetch('POST http://localhost:8080/api/workflow ')

//     .then( function(response){

//         return response.json();

//     })

//     .then(function(data){
//         console.log (data);

//         document.getElementById("demo").innerHTML = data[2] . title ; 
//         document.getElementById("domo").innerHTML = data[2] . url ; 
//         document.getElementById("imge").src = data[2] . thumbnailUrl ; 
    
//         document.getElementById("demo2").innerHTML = data[3] . title ; 
//         document.getElementById("domo2").innerHTML = data[3] . url ; 
//         document.getElementById("imge2").src = data[3] . thumbnailUrl ; 
    

//     })


// fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=e635ed76821741119546bd0e0019f880")
// .then((res)=>{
//     // console.log(res)
//     let myData = res.json();

//     return myData
// })
// .then((currncy)=>{

//     let amount = document.querySelector(".amount");

//     let egpPrice = document.querySelector(".egp span");

//     let sarPrice = document.querySelector(".sar span");


//     egpPrice.innerHTML = Math.round(amount.innerHTML * currncy.rates["EGP"])
//     sarPrice.innerHTML = Math.round(amount.innerHTML * currncy.rates["SAR"])

//     console.log(currncy.rates["EGP"])
//     console.log(currncy.rates["SAR"])

// }
// )


let api = `https://v6.exchangerate-api.com/v6/${apikey}/latest/USD`;

const fromDropDown = document.getElementById("from-currency-select");

const toDropDown = document.getElementById("to-currency-select");

currencies.forEach(currency => {
    const option =document.createElement("option");
    option.value = currency ; 
    option.text = currency ; 
    fromDropDown.add(option);

});


currencies.forEach(currency => {
    const option =document.createElement("option");
    option.value = currency ; 
    option.text = currency ; 
    toDropDown.add(option);

});


fromDropDown.value = "USD" ; 
toDropDown.value ="INR";

let convertCurrency = () => {
    const amount = document. querySelector("#amount").value;
    const fromCurrency = fromDropDown.value;
    const toCurrency=   toDropDown .value;


    if (amount.length != 0){
        
        fetch(api)
            .then(resp => resp .json())

            .then(data =>{

            let fromExchangeRate = data.conversion_rates[fromCurrency];

            let toExchangeRate = data.conversion_rates[toCurrency];

            const convertedAmount = (amount / fromExchangeRate ) * toExchangeRate;

            result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}  `

    });
}

    else{
        alert('Please enter an Amount');
    }
};

document
    .querySelector("#convert-button")
    .addEventListener("click",convertCurrency);
window.addEventListener("load" ,convertCurrency);






