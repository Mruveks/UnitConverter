var input2 = document.getElementById("input2");
var result2 = document.getElementById("result2");
var inputType2 = document.getElementById("inputType2");
var resultType2 = document.getElementById("resultType2");
var inputTypeValue2, resultTypeValue2;

input2.addEventListener("keyup", myResult);
inputType2.addEventListener("change", myResult);
resultType2.addEventListener("change", myResult);

inputTypeValue2 = inputType2.value;
resultTypeValue2 = resultType2.value;

function myResult(){

    inputTypeValue2 = inputType2.value;
    resultTypeValue2 = resultType2.value;

    if(inputTypeValue2 === "kilogram" && resultTypeValue2 === "kilogram"){
        result2.value = input2.value;
    }else if(inputTypeValue2 === "kilogram" && resultTypeValue2 === "hectogram"){
        result2.value = Number(input2.value) * 10;
    }else if(inputTypeValue2 === "kilogram" && resultTypeValue2 === "decagram"){
        result2.value = Number(input2.value) * 100;
    }else if(inputTypeValue2 === "kilogram" && resultTypeValue2 === "gram"){
        result2.value = Number(input2.value) * 1000;
    }else if(inputTypeValue2 === "kilogram" && resultTypeValue2 === "decigram"){
        result2.value = Number(input2.value) * 10000;
    }else if(inputTypeValue2 === "kilogram" && resultTypeValue2 === "centigram"){
        result2.value = Number(input2.value) * 100000;
    }else if(inputTypeValue2 === "kilogram" && resultTypeValue2 === "milligram"){
        result2.value = Number(input2.value) * 1000000;
    }

    if(inputTypeValue2 === "hectogram" && resultTypeValue2 === "kilogram"){
        result2.value = Number(input2.value) * 0.1;
    }else if(inputTypeValue2 === "hectogram" && resultTypeValue2 === "hectogram"){
        result2.value = input2.value;
    }else if(inputTypeValue2 === "hectogram" && resultTypeValue2 === "decagram"){
        result2.value = Number(input2.value) * 10;
    }else if(inputTypeValue2 === "hectogram" && resultTypeValue2 === "gram"){
        result2.value = Number(input2.value) * 100;
    }else if(inputTypeValue2 === "hectogram" && resultTypeValue2 === "decigram"){
        result2.value = Number(input2.value) * 1000;
    }else if(inputTypeValue2 === "hectogram" && resultTypeValue2 === "centigram"){
        result2.value = Number(input2.value) * 10000;
    }else if(inputTypeValue2 === "hectogram" && resultTypeValue2 === "milligram"){
        result2.value = Number(input2.value) * 100000;
    }

    if(inputTypeValue2 === "decagram" && resultTypeValue2 === "kilogram"){
        result2.value = Number(input2.value) * 0.01;
    }else if(inputTypeValue2 === "decagram" && resultTypeValue2 === "hectogram"){
        result2.value = Number(input2.value) * 0.1;
    }else if(inputTypeValue2 === "decagram" && resultTypeValue2 === "decagram"){
        result2.value = input2.value;
    }else if(inputTypeValue2 === "decagram" && resultTypeValue2 === "gram"){
        result2.value = Number(input2.value) * 10;
    }else if(inputTypeValue2 === "decagram" && resultTypeValue2 === "decigram"){
        result2.value = Number(input2.value) * 100;
    }else if(inputTypeValue2 === "decagram" && resultTypeValue2 === "centigram"){
        result2.value = Number(input2.value) * 1000;
    }else if(inputTypeValue2 === "decagram" && resultTypeValue2 === "milligram"){
        result2.value = Number(input2.value) * 10000;
    }

    if(inputTypeValue2 === "gram" && resultTypeValue2 === "kilogram"){
        result2.value = Number(input2.value) * 0.001;
    }else if(inputTypeValue2 === "gram" && resultTypeValue2 === "hectogram"){
        result2.value = Number(input2.value) * 0.01;
    }else if(inputTypeValue2 === "gram" && resultTypeValue2 === "decagram"){
        result2.value = Number(input2.value) * 0.1;
    }else if(inputTypeValue2 === "gram" && resultTypeValue2 === "gram"){
        result2.value = input2.value;
    }else if(inputTypeValue2 === "gram" && resultTypeValue2 === "decigram"){
        result2.value = Number(input2.value) * 10;
    }else if(inputTypeValue2 === "gram" && resultTypeValue2 === "centigram"){
        result2.value = Number(input2.value) * 100;
    }else if(inputTypeValue2 === "gram" && resultTypeValue2 === "milligram"){
        result2.value = Number(input2.value) * 1000;
    }

    if(inputTypeValue2 === "decigram" && resultTypeValue2 === "kilogram"){
        result2.value = Number(input2.value) * 0.0001;
    }else if(inputTypeValue2 === "decigram" && resultTypeValue2 === "hectogram"){
        result2.value = Number(input2.value) * 0.001;
    }else if(inputTypeValue2 === "decigram" && resultTypeValue2 === "decagram"){
        result2.value = Number(input2.value) * 0.01;
    }else if(inputTypeValue2 === "decigram" && resultTypeValue2 === "gram"){
        result2.value = Number(input2.value) * 0.1;
    }else if(inputTypeValue2 === "decigram" && resultTypeValue2 === "decigram"){
        result2.value = input2.value;
    }else if(inputTypeValue2 === "decigram" && resultTypeValue2 === "centigram"){
        result2.value = Number(input2.value) * 10;
    }else if(inputTypeValue2 === "decigram" && resultTypeValue2 === "milligram"){
        result2.value = Number(input2.value) * 100;
    }

    if(inputTypeValue2 === "centigram" && resultTypeValue2 === "kilogram"){
        result2.value = Number(input2.value) * 0.00001;
    }else if(inputTypeValue2 === "centigram" && resultTypeValue2 === "hectogram"){
        result2.value = Number(input2.value) * 0.0001;
    }else if(inputTypeValue2 === "centigram" && resultTypeValue2 === "decagram"){
        result2.value = Number(input2.value) * 0.001;
    }else if(inputTypeValue2 === "centigram" && resultTypeValue2 === "gram"){
        result2.value = Number(input2.value) * 0.01;
    }else if(inputTypeValue2 === "centigram" && resultTypeValue2 === "decigram"){
        result2.value = Number(input2.value) * 0.1;
    }else if(inputTypeValue2 === "centigram" && resultTypeValue2 === "centigram"){
        result2.value = input2.value;
    }else if(inputTypeValue2 === "centigram" && resultTypeValue2 === "milligram"){
        result2.value = Number(input2.value) * 10;
    }

    if(inputTypeValue2 === "milligram" && resultTypeValue2 === "kilometer"){
        result2.value = Number(input2.value) * 0.000001;
    }else if(inputTypeValue2 === "milligram" && resultTypeValue2 === "hectogram"){
        result2.value = Number(input2.value) * 0.00001;
    }else if(inputTypeValue2 === "milligram" && resultTypeValue2 === "decagram"){
        result2.value = Number(input2.value) * 0.0001;
    }else if(inputTypeValue2 === "milligram" && resultTypeValue2 === "gram"){
        result2.value = Number(input2.value) * 0.001;
    }else if(inputTypeValue2 === "milligram" && resultTypeValue2 === "decigram"){
        result2.value = Number(input2.value) * 0.01;
    }else if(inputTypeValue2 === "milligram" && resultTypeValue2 === "centigram"){
        result2.value = Number(input2.value) * 0.1;
    }else if(inputTypeValue2 === "milligram" && resultTypeValue2 === "milligram"){
        result2.value = input2.value;
    }
}
