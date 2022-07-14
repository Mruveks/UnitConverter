var input5 = document.getElementById("input5");
var result5 = document.getElementById("result5");
var inputType5 = document.getElementById("inputType5");
var resultType5 = document.getElementById("resultType5");
var inputTypeValue5, resultTypeValue5;

input5.addEventListener("keyup", temperatureResult);
inputType5.addEventListener("change", temperatureResult);
resultType5.addEventListener("change", temperatureResult);

inputTypeValue5 = inputType5.value;
resultTypeValue5 = resultType5.value;

function temperatureResult(){

    inputTypeValue5 = inputType5.value;
    resultTypeValue5 = resultType5.value;

    if(inputTypeValue5 === "celcius" && resultTypeValue5 === "celcius"){
        result5.value = input5.value;
    }else if(inputTypeValue5 === "celcius" && resultTypeValue5 === "fahrenheit"){
        result5.value = (Number(input5.value) * 1.8) + 32 ;
    }else if(inputTypeValue5 === "celcius" && resultTypeValue5 === "kelvin"){
        result5.value = Number(input5.value) + 273.15;
    }

    if(inputTypeValue5 === "fahrenheit" && resultTypeValue5 === "celcius"){
        result5.value = (Number(input5.value) / 1.8) - 32;
    }else if(inputTypeValue5 === "fahrenheit" && resultTypeValue5 === "fahrenheit"){
        result5.value = input5.value;
    }else if(inputTypeValue5 === "fahrenheit" && resultTypeValue5 === "kelvin"){
        result5.value = (((Number(input5.value) - 32) * 5) / 9) + 263.15;
    }

    if(inputTypeValue5 === "kelvin" && resultTypeValue5 === "celcius"){
        result5.value = Number(input5.value) - 273.15;
    }else if(inputTypeValue5 === "kelvin" && resultTypeValue5 === "fahrenheit"){
        result5.value = ((Number(input5.value) - 273.15) * 1.8) + 32;
    }else if(inputTypeValue5 === "kelvin" && resultTypeValue5 === "kelvin"){
        result5.value = input5.value;
    }
}