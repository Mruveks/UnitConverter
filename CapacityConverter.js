var input3 = document.getElementById("input3");
var result3 = document.getElementById("result3");
var inputType3 = document.getElementById("inputType3");
var resultType3 = document.getElementById("resultType3");
var inputTypeValue3, resultTypeValue3;

input3.addEventListener("keyup", LengthResult);
inputType3.addEventListener("change", LengthResult);
resultType3.addEventListener("change", LengthResult);

inputTypeValue3 = inputType3.value;
resultTypeValue3 = resultType3.value;

function LengthResult(){

    inputTypeValue3 = inputType3.value;
    resultTypeValue3 = resultType3.value;

    if(inputTypeValue3 === "kilolitre" && resultTypeValue3 === "kilolitre"){
        result3.value = input3.value;
    }else if(inputTypeValue3 === "kilolitre" && resultTypeValue3 === "hectolitre"){
        result3.value = Number(input3.value) * 10;
    }else if(inputTypeValue3 === "kilolitre" && resultTypeValue3 === "decalitre"){
        result3.value = Number(input3.value) * 100;
    }else if(inputTypeValue3 === "kilolitre" && resultTypeValue3 === "litre"){
        result3.value = Number(input3.value) * 1000;
    }else if(inputTypeValue3 === "kilolitre" && resultTypeValue3 === "decilitre"){
        result3.value = Number(input3.value) * 10000;
    }else if(inputTypeValue3 === "kilolitre" && resultTypeValue3 === "centilitre"){
        result3.value = Number(input3.value) * 100000;
    }else if(inputTypeValue3 === "kilolitre" && resultTypeValue3 === "mililitre"){
        result3.value = Number(input3.value) * 1000000;
    }

    if(inputTypeValue3 === "hectolitre" && resultTypeValue3 === "kilolitre"){
        result3.value = Number(input3.value) * 0.1;
    }else if(inputTypeValue3 === "hectolitre" && resultTypeValue3 === "hectolitre"){
        result3.value = input3.value;
    }else if(inputTypeValue3 === "hectolitre" && resultTypeValue3 === "decalitre"){
        result3.value = Number(input3.value) * 10;
    }else if(inputTypeValue3 === "hectolitre" && resultTypeValue3 === "litre"){
        result3.value = Number(input3.value) * 100;
    }else if(inputTypeValue3 === "hectolitre" && resultTypeValue3 === "decilitre"){
        result3.value = Number(input3.value) * 1000;
    }else if(inputTypeValue3 === "hectolitre" && resultTypeValue3 === "centilitre"){
        result3.value = Number(input3.value) * 10000;
    }else if(inputTypeValue3 === "hectolitre" && resultTypeValue3 === "mililitre"){
        result3.value = Number(input3.value) * 100000;
    }

    if(inputTypeValue3 === "decalitre" && resultTypeValue3 === "kilolitre"){
        result3.value = Number(input3.value) * 0.01;
    }else if(inputTypeValue3 === "decalitre" && resultTypeValue3 === "hectolitre"){
        result3.value = Number(input3.value) * 0.1;
    }else if(inputTypeValue3 === "decalitre" && resultTypeValue3 === "decalitre"){
        result3.value = input3.value;
    }else if(inputTypeValue3 === "decalitre" && resultTypeValue3 === "litre"){
        result3.value = Number(input3.value) * 10;
    }else if(inputTypeValue3 === "decalitre" && resultTypeValue3 === "decilitre"){
        result3.value = Number(input3.value) * 100;
    }else if(inputTypeValue3 === "decalitre" && resultTypeValue3 === "centilitre"){
        result3.value = Number(input3.value) * 1000;
    }else if(inputTypeValue3 === "decalitre" && resultTypeValue3 === "mililitre"){
        result3.value = Number(input3.value) * 10000;
    }

    if(inputTypeValue3 === "litre" && resultTypeValue3 === "kilolitre"){
        result3.value = Number(input3.value) * 0.001;
    }else if(inputTypeValue3 === "litre" && resultTypeValue3 === "hectolitre"){
        result3.value = Number(input3.value) * 0.01;
    }else if(inputTypeValue3 === "litre" && resultTypeValue3 === "decalitre"){
        result3.value = Number(input3.value) * 0.1;
    }else if(inputTypeValue3 === "litre" && resultTypeValue3 === "litre"){
        result3.value = input3.value;
    }else if(inputTypeValue3 === "litre" && resultTypeValue3 === "decilitre"){
        result3.value = Number(input3.value) * 10;
    }else if(inputTypeValue3 === "litre" && resultTypeValue3 === "centilitre"){
        result3.value = Number(input3.value) * 100;
    }else if(inputTypeValue3 === "litre" && resultTypeValue3 === "mililitre"){
        result3.value = Number(input3.value) * 1000;
    }

    if(inputTypeValue3 === "decilitre" && resultTypeValue3 === "kilolitre"){
        result3.value = Number(input3.value) * 0.0001;
    }else if(inputTypeValue3 === "decilitre" && resultTypeValue3 === "hectolitre"){
        result3.value = Number(input3.value) * 0.001;
    }else if(inputTypeValue3 === "decilitre" && resultTypeValue3 === "decalitre"){
        result3.value = Number(input3.value) * 0.01;
    }else if(inputTypeValue3 === "decilitre" && resultTypeValue3 === "litre"){
        result3.value = Number(input3.value) * 0.1;
    }else if(inputTypeValue3 === "decilitre" && resultTypeValue3 === "decilitre"){
        result3.value = input3.value;
    }else if(inputTypeValue3 === "decilitre" && resultTypeValue3 === "centilitre"){
        result3.value = Number(input3.value) * 10;
    }else if(inputTypeValue3 === "decilitre" && resultTypeValue3 === "mililitre"){
        result3.value = Number(input3.value) * 100;
    }

    if(inputTypeValue3 === "centilitre" && resultTypeValue3 === "kilolitre"){
        result3.value = Number(input3.value) * 0.00001;
    }else if(inputTypeValue3 === "centilitre" && resultTypeValue3 === "hectolitre"){
        result3.value = Number(input3.value) * 0.0001;
    }else if(inputTypeValue3 === "centilitre" && resultTypeValue3 === "decalitre"){
        result3.value = Number(input3.value) * 0.001;
    }else if(inputTypeValue3 === "centilitre" && resultTypeValue3 === "litre"){
        result3.value = Number(input3.value) * 0.01;
    }else if(inputTypeValue3 === "centilitre" && resultTypeValue3 === "decilitre"){
        result3.value = Number(input3.value) * 0.1;
    }else if(inputTypeValue3 === "centilitre" && resultTypeValue3 === "centilitre"){
        result3.value = input3.value;
    }else if(inputTypeValue3 === "centilitre" && resultTypeValue3 === "mililitre"){
        result3.value = Number(input3.value) * 10;
    }

    if(inputTypeValue3 === "mililitre" && resultTypeValue3 === "kilometer"){
        result3.value = Number(input3.value) * 0.000001;
    }else if(inputTypeValue3 === "mililitre" && resultTypeValue3 === "hectolitre"){
        result3.value = Number(input3.value) * 0.00001;
    }else if(inputTypeValue3 === "mililitre" && resultTypeValue3 === "decalitre"){
        result3.value = Number(input3.value) * 0.0001;
    }else if(inputTypeValue3 === "mililitre" && resultTypeValue3 === "litre"){
        result3.value = Number(input3.value) * 0.001;
    }else if(inputTypeValue3 === "mililitre" && resultTypeValue3 === "decilitre"){
        result3.value = Number(input3.value) * 0.01;
    }else if(inputTypeValue3 === "mililitre" && resultTypeValue3 === "centilitre"){
        result3.value = Number(input3.value) * 0.1;
    }else if(inputTypeValue3 === "mililitre" && resultTypeValue3 === "mililitre"){
        result3.value = input3.value;
    }
}
