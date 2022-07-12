var input = document.getElementById("input");
var result = document.getElementById("result");
var inputType = document.getElementById("inputType");
var resultType = document.getElementById("resultType");
var inputTypeValue, resultTypeValue;

input.addEventListener("keyup", LengthResult);
inputType.addEventListener("change", LengthResult);
resultType.addEventListener("change", LengthResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function LengthResult(){

    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    if(inputTypeValue === "kilometre" && resultTypeValue === "kilometre"){
        result.value = input.value;
    }else if(inputTypeValue === "kilometre" && resultTypeValue === "hectometre"){
        result.value = Number(input.value) * 10;
    }else if(inputTypeValue === "kilometre" && resultTypeValue === "decametre"){
        result.value = Number(input.value) * 100;
    }else if(inputTypeValue === "kilometre" && resultTypeValue === "metre"){
        result.value = Number(input.value) * 1000;
    }else if(inputTypeValue === "kilometre" && resultTypeValue === "decimetre"){
        result.value = Number(input.value) * 10000;
    }else if(inputTypeValue === "kilometre" && resultTypeValue === "centimetre"){
        result.value = Number(input.value) * 100000;
    }else if(inputTypeValue === "kilometre" && resultTypeValue === "millimetre"){
        result.value = Number(input.value) * 1000000;
    }

    if(inputTypeValue === "hectometre" && resultTypeValue === "kilometre"){
        result.value = Number(input.value) * 0.1;
    }else if(inputTypeValue === "hectometre" && resultTypeValue === "hectometre"){
        result.value = input.value;
    }else if(inputTypeValue === "hectometre" && resultTypeValue === "decametre"){
        result.value = Number(input.value) * 10;
    }else if(inputTypeValue === "hectometre" && resultTypeValue === "metre"){
        result.value = Number(input.value) * 100;
    }else if(inputTypeValue === "hectometre" && resultTypeValue === "decimetre"){
        result.value = Number(input.value) * 1000;
    }else if(inputTypeValue === "hectometre" && resultTypeValue === "centimetre"){
        result.value = Number(input.value) * 10000;
    }else if(inputTypeValue === "hectometre" && resultTypeValue === "millimetre"){
        result.value = Number(input.value) * 100000;
    }

    if(inputTypeValue === "decametre" && resultTypeValue === "kilometre"){
        result.value = Number(input.value) * 0.01;
    }else if(inputTypeValue === "decametre" && resultTypeValue === "hectometre"){
        result.value = Number(input.value) * 0.1;
    }else if(inputTypeValue === "decametre" && resultTypeValue === "decametre"){
        result.value = input.value;
    }else if(inputTypeValue === "decametre" && resultTypeValue === "metre"){
        result.value = Number(input.value) * 10;
    }else if(inputTypeValue === "decametre" && resultTypeValue === "decimetre"){
        result.value = Number(input.value) * 100;
    }else if(inputTypeValue === "decametre" && resultTypeValue === "centimetre"){
        result.value = Number(input.value) * 1000;
    }else if(inputTypeValue === "decametre" && resultTypeValue === "millimetre"){
        result.value = Number(input.value) * 10000;
    }

    if(inputTypeValue === "metre" && resultTypeValue === "kilometre"){
        result.value = Number(input.value) * 0.001;
    }else if(inputTypeValue === "metre" && resultTypeValue === "hectometre"){
        result.value = Number(input.value) * 0.01;
    }else if(inputTypeValue === "metre" && resultTypeValue === "decametre"){
        result.value = Number(input.value) * 0.1;
    }else if(inputTypeValue === "metre" && resultTypeValue === "metre"){
        result.value = input.value;
    }else if(inputTypeValue === "metre" && resultTypeValue === "decimetre"){
        result.value = Number(input.value) * 10;
    }else if(inputTypeValue === "metre" && resultTypeValue === "centimetre"){
        result.value = Number(input.value) * 100;
    }else if(inputTypeValue === "metre" && resultTypeValue === "millimetre"){
        result.value = Number(input.value) * 1000;
    }

    if(inputTypeValue === "decimetre" && resultTypeValue === "kilometre"){
        result.value = Number(input.value) * 0.0001;
    }else if(inputTypeValue === "decimetre" && resultTypeValue === "hectometre"){
        result.value = Number(input.value) * 0.001;
    }else if(inputTypeValue === "decimetre" && resultTypeValue === "decametre"){
        result.value = Number(input.value) * 0.01;
    }else if(inputTypeValue === "decimetre" && resultTypeValue === "metre"){
        result.value = Number(input.value) * 0.1;
    }else if(inputTypeValue === "decimetre" && resultTypeValue === "decimetre"){
        result.value = input.value;
    }else if(inputTypeValue === "decimetre" && resultTypeValue === "centimetre"){
        result.value = Number(input.value) * 10;
    }else if(inputTypeValue === "decimetre" && resultTypeValue === "millimetre"){
        result.value = Number(input.value) * 100;
    }

    if(inputTypeValue === "centimetre" && resultTypeValue === "kilometre"){
        result.value = Number(input.value) * 0.00001;
    }else if(inputTypeValue === "centimetre" && resultTypeValue === "hectometre"){
        result.value = Number(input.value) * 0.0001;
    }else if(inputTypeValue === "centimetre" && resultTypeValue === "decametre"){
        result.value = Number(input.value) * 0.001;
    }else if(inputTypeValue === "centimetre" && resultTypeValue === "metre"){
        result.value = Number(input.value) * 0.01;
    }else if(inputTypeValue === "centimetre" && resultTypeValue === "decimetre"){
        result.value = Number(input.value) * 0.1;
    }else if(inputTypeValue === "centimetre" && resultTypeValue === "centimetre"){
        result.value = input.value;
    }else if(inputTypeValue === "centimetre" && resultTypeValue === "millimetre"){
        result.value = Number(input.value) * 10;
    }

    if(inputTypeValue === "millimetre" && resultTypeValue === "kilometer"){
        result.value = Number(input.value) * 0.000001;
    }else if(inputTypeValue === "millimetre" && resultTypeValue === "hectometre"){
        result.value = Number(input.value) * 0.00001;
    }else if(inputTypeValue === "millimetre" && resultTypeValue === "decametre"){
        result.value = Number(input.value) * 0.0001;
    }else if(inputTypeValue === "millimetre" && resultTypeValue === "metre"){
        result.value = Number(input.value) * 0.001;
    }else if(inputTypeValue === "millimetre" && resultTypeValue === "decimetre"){
        result.value = Number(input.value) * 0.01;
    }else if(inputTypeValue === "millimetre" && resultTypeValue === "centimetre"){
        result.value = Number(input.value) * 0.1;
    }else if(inputTypeValue === "millimetre" && resultTypeValue === "millimetre"){
        result.value = input.value;
    }
}
