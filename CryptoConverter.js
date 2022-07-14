let eth = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');
let ethLastPrice = null;
eth.onmessage = (event) => {
    let ethStockObject = JSON.parse(event.data);
    let ethPrice = parseFloat(ethStockObject.p).toFixed(2);
    ethLastPrice = ethPrice;
};

let ada = new WebSocket('wss://stream.binance.com:9443/ws/adausdt@trade');
let adaLastPrice = null;
ada.onmessage = (event) => {
    let adaStockObject = JSON.parse(event.data);
    let adaPrice = parseFloat(adaStockObject.p).toFixed(2);
    adaLastPrice = adaPrice;
};

let btc = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
let btcLastPrice = null;
btc.onmessage = (event) => {
    let btcStockObject = JSON.parse(event.data);
    let btcPrice = parseFloat(btcStockObject.p).toFixed(2);
    btcLastPrice = btcPrice;
};

let avax = new WebSocket('wss://stream.binance.com:9443/ws/avaxusdt@trade');
let avaxLastPrice = null;
avax.onmessage = (event) => {
    let avaxStockObject = JSON.parse(event.data);
    let avaxPrice = parseFloat(avaxStockObject.p).toFixed(2);
    avaxLastPrice = avaxPrice;
};

let sol = new WebSocket('wss://stream.binance.com:9443/ws/solusdt@trade');
let solLastPrice = null;
sol.onmessage = (event) => {
    let solStockObject = JSON.parse(event.data);
    let solPrice = parseFloat(solStockObject.p).toFixed(2);
    solLastPrice = solPrice;
};

let matic = new WebSocket('wss://stream.binance.com:9443/ws/maticusdt@trade');
let maticLastPrice = null;
matic.onmessage = (event) => {
    let maticStockObject = JSON.parse(event.data);
    let maticPrice = parseFloat(maticStockObject.p).toFixed(2);
    maticLastPrice = maticPrice;
};

let doge = new WebSocket('wss://stream.binance.com:9443/ws/dogeusdt@trade');
let dogeLastPrice = null;
doge.onmessage = (event) => {
    let dogeStockObject = JSON.parse(event.data);
    let dogePrice = parseFloat(dogeStockObject.p).toFixed(2);
    dogeLastPrice = dogePrice;
};

var input4 = document.getElementById("input4");
var result4 = document.getElementById("result4");
var inputType4 = document.getElementById("inputType4");
var resultType4 = document.getElementById("resultType4");
var inputTypeValue4, resultTypeValue4;

input4.addEventListener("keyup", CryptoResult);
inputType4.addEventListener("change", CryptoResult);
resultType4.addEventListener("change", CryptoResult);

inputTypeValue4 = inputType4.value;
resultTypeValue4 = resultType4.value;

function CryptoResult(){

    inputTypeValue4 = inputType4.value;
    resultTypeValue4 = resultType4.value;

    if(inputTypeValue4 === "eth" && resultTypeValue4 === "usd"){
        result4.value = Number(input4.value) * ethLastPrice;
    }else if(inputTypeValue4 === "eth" && resultTypeValue4 === "eur"){
        result4.value = Number(input4.value) * 10;
    }else if(inputTypeValue4 === "eth" && resultTypeValue4 === "gbp"){
        result4.value = Number(input4.value) * 100;
    }else if(inputTypeValue4 === "eth" && resultTypeValue4 === "yen"){
        result4.value = Number(input4.value) * 1000;
    }else if(inputTypeValue4 === "eth" && resultTypeValue4 === "pln"){
        result4.value = Number(input4.value) * 10000;
    }else if(inputTypeValue4 === "eth" && resultTypeValue4 === "chf"){
        result4.value = Number(input4.value) * 100000;
    }else if(inputTypeValue4 === "eth" && resultTypeValue4 === "rub"){
        result4.value = Number(input4.value) * 1000000;
    }

    if(inputTypeValue4 === "btc" && resultTypeValue4 === "usd"){
        result4.value = Number(input4.value) * btcLastPrice;
    }else if(inputTypeValue4 === "btc" && resultTypeValue4 === "eur"){
        result4.value = Number(input4.value) * 10;
    }else if(inputTypeValue4 === "btc" && resultTypeValue4 === "gbp"){
        result4.value = Number(input4.value) * 100;
    }else if(inputTypeValue4 === "btc" && resultTypeValue4 === "yen"){
        result4.value = Number(input4.value) * 1000;
    }else if(inputTypeValue4 === "btc" && resultTypeValue4 === "pln"){
        result4.value = Number(input4.value) * 10000;
    }else if(inputTypeValue4 === "btc" && resultTypeValue4 === "chf"){
        result4.value = Number(input4.value) * 100000;
    }else if(inputTypeValue4 === "btc" && resultTypeValue4 === "rub"){
        result4.value = Number(input4.value) * 1000000;
    }

    if(inputTypeValue4 === "avax" && resultTypeValue4 === "usd"){
        result4.value = Number(input4.value) * avaxLastPrice;
    }else if(inputTypeValue4 === "avax" && resultTypeValue4 === "eur"){
        result4.value = Number(input4.value) * 10;
    }else if(inputTypeValue4 === "avax" && resultTypeValue4 === "gbp"){
        result4.value = Number(input4.value) * 100;
    }else if(inputTypeValue4 === "avax" && resultTypeValue4 === "yen"){
        result4.value = Number(input4.value) * 1000;
    }else if(inputTypeValue4 === "avax" && resultTypeValue4 === "pln"){
        result4.value = Number(input4.value) * 10000;
    }else if(inputTypeValue4 === "avax" && resultTypeValue4 === "chf"){
        result4.value = Number(input4.value) * 100000;
    }else if(inputTypeValue4 === "avax" && resultTypeValue4 === "rub"){
        result4.value = Number(input4.value) * 1000000;
    }
    
    if(inputTypeValue4 === "sol" && resultTypeValue4 === "usd"){
        result4.value = Number(input4.value) * solLastPrice;
    }else if(inputTypeValue4 === "sol" && resultTypeValue4 === "eur"){
        result4.value = Number(input4.value) * 10;
    }else if(inputTypeValue4 === "sol" && resultTypeValue4 === "gbp"){
        result4.value = Number(input4.value) * 100;
    }else if(inputTypeValue4 === "sol" && resultTypeValue4 === "yen"){
        result4.value = Number(input4.value) * 1000;
    }else if(inputTypeValue4 === "sol" && resultTypeValue4 === "pln"){
        result4.value = Number(input4.value) * 10000;
    }else if(inputTypeValue4 === "sol" && resultTypeValue4 === "chf"){
        result4.value = Number(input4.value) * 100000;
    }else if(inputTypeValue4 === "sol" && resultTypeValue4 === "rub"){
        result4.value = Number(input4.value) * 1000000;
    }

    if(inputTypeValue4 === "ada" && resultTypeValue4 === "usd"){
        result4.value = Number(input4.value) * adaLastPrice;
    }else if(inputTypeValue4 === "ada" && resultTypeValue4 === "eur"){
        result4.value = Number(input4.value) * 10;
    }else if(inputTypeValue4 === "ada" && resultTypeValue4 === "gbp"){
        result4.value = Number(input4.value) * 100;
    }else if(inputTypeValue4 === "ada" && resultTypeValue4 === "yen"){
        result4.value = Number(input4.value) * 1000;
    }else if(inputTypeValue4 === "ada" && resultTypeValue4 === "pln"){
        result4.value = Number(input4.value) * 10000;
    }else if(inputTypeValue4 === "ada" && resultTypeValue4 === "chf"){
        result4.value = Number(input4.value) * 100000;
    }else if(inputTypeValue4 === "ada" && resultTypeValue4 === "rub"){
        result4.value = Number(input4.value) * 1000000;
    }

    
    if(inputTypeValue4 === "matic" && resultTypeValue4 === "usd"){
        result4.value = Number(input4.value) * maticLastPrice;
    }else if(inputTypeValue4 === "matic" && resultTypeValue4 === "eur"){
        result4.value = Number(input4.value) * 10;
    }else if(inputTypeValue4 === "matic" && resultTypeValue4 === "gbp"){
        result4.value = Number(input4.value) * 100;
    }else if(inputTypeValue4 === "matic" && resultTypeValue4 === "yen"){
        result4.value = Number(input4.value) * 1000;
    }else if(inputTypeValue4 === "matic" && resultTypeValue4 === "pln"){
        result4.value = Number(input4.value) * 10000;
    }else if(inputTypeValue4 === "matic" && resultTypeValue4 === "chf"){
        result4.value = Number(input4.value) * 100000;
    }else if(inputTypeValue4 === "matic" && resultTypeValue4 === "rub"){
        result4.value = Number(input4.value) * 1000000;
    }
    
    if(inputTypeValue4 === "doge" && resultTypeValue4 === "usd"){
        result4.value = Number(input4.value) * dogeLastPrice;
    }else if(inputTypeValue4 === "doge" && resultTypeValue4 === "eur"){
        result4.value = Number(input4.value) * 10;
    }else if(inputTypeValue4 === "doge" && resultTypeValue4 === "gbp"){
        result4.value = Number(input4.value) * 100;
    }else if(inputTypeValue4 === "doge" && resultTypeValue4 === "yen"){
        result4.value = Number(input4.value) * 1000;
    }else if(inputTypeValue4 === "doge" && resultTypeValue4 === "pln"){
        result4.value = Number(input4.value) * 10000;
    }else if(inputTypeValue4 === "doge" && resultTypeValue4 === "chf"){
        result4.value = Number(input4.value) * 100000;
    }else if(inputTypeValue4 === "doge" && resultTypeValue4 === "rub"){
        result4.value = Number(input4.value) * 1000000;
    }
    
    

}
