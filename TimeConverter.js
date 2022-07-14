var input6 = document.getElementById("input6");
var result6 = document.getElementById("result6");
var inputType6 = document.getElementById("inputType6");
var resultType6 = document.getElementById("resultType6");
var inputTypeValue6, resultTypeValue6;

input6.addEventListener("keyup", timeResult);
inputType6.addEventListener("change", timeResult);
resultType6.addEventListener("change", timeResult);

inputTypeValue6 = inputType6.value;
resultTypeValue6 = resultType6.value;

function timeResult(){

    inputTypeValue6 = inputType6.value;
    resultTypeValue6 = resultType6.value;

    if(inputTypeValue6 === "millennium" && resultTypeValue6 === "millennium"){
        result6.value = input6.value;
    }else if(inputTypeValue6 === "millennium" && resultTypeValue6 === "century"){
        result6.value = Number(input6.value) * 10;
    }else if(inputTypeValue6 === "millennium" && resultTypeValue6 === "decade"){
        result6.value = Number(input6.value) * 100;
    }else if(inputTypeValue6 === "millennium" && resultTypeValue6 === "year"){
        result6.value = Number(input6.value) * 1000;
    }else if(inputTypeValue6 === "millennium" && resultTypeValue6 === "month"){
        result6.value = Number(input6.value) * 12000;
    }else if(inputTypeValue6 === "millennium" && resultTypeValue6 === "week"){
        result6.value = Number(input6.value) * 52178.57;
    }else if(inputTypeValue6 === "millennium" && resultTypeValue6 === "day"){
        result6.value = Number(input6.value) * 365000;
    }else if(inputTypeValue6 === "millennium" && resultTypeValue6 === "hour"){
        result6.value = Number(input6.value) * 8760000;
    }else if(inputTypeValue6 === "millennium" && resultTypeValue6 === "minute"){
        result6.value = Number(input6.value) * 525960000;
    }else if(inputTypeValue6 === "millennium" && resultTypeValue6 === "second"){
        result6.value = Number(input6.value) * 31557600000;
    }

    if(inputTypeValue6 === "century" && resultTypeValue6 === "millennium"){
        result6.value = Number(input6.value) * 0.1;
    }else if(inputTypeValue6 === "century" && resultTypeValue6 === "century"){
        result6.value = input6.value;
    }else if(inputTypeValue6 === "century" && resultTypeValue6 === "decade"){
        result6.value = Number(input6.value) * 10;
    }else if(inputTypeValue6 === "century" && resultTypeValue6 === "year"){
        result6.value = Number(input6.value) * 100;
    }else if(inputTypeValue6 === "century" && resultTypeValue6 === "month"){
        result6.value = Number(input6.value) * 1200;
    }else if(inputTypeValue6 === "century" && resultTypeValue6 === "week"){
        result6.value = Number(input6.value) *  5217.75;
    }else if(inputTypeValue6 === "century" && resultTypeValue6 === "day"){
        result6.value = Number(input6.value) * 36524.25;
    }else if(inputTypeValue6 === "century" && resultTypeValue6 === "hour"){
        result6.value = Number(input6.value) * 876582;
    }else if(inputTypeValue6 === "century" && resultTypeValue6 === "minute"){
        result6.value = Number(input6.value) * 52594920;
    }else if(inputTypeValue6 === "century" && resultTypeValue6 === "second"){
        result6.value = Number(input6.value) * 3155695200;
    }

    if(inputTypeValue6 === "decade" && resultTypeValue6 === "millennium"){
        result6.value = Number(input6.value) * 0.01;
    }else if(inputTypeValue6 === "decade" && resultTypeValue6 === "century"){
        result6.value = Number(input6.value) * 0.1;
    }else if(inputTypeValue6 === "decade" && resultTypeValue6 === "decade"){
        result6.value = input6.value;
    }else if(inputTypeValue6 === "decade" && resultTypeValue6 === "year"){
        result6.value = Number(input6.value) * 10;
    }else if(inputTypeValue6 === "decade" && resultTypeValue6 === "month"){
        result6.value = Number(input6.value) * 120;
    }else if(inputTypeValue6 === "decade" && resultTypeValue6 === "week"){
        result6.value = Number(input6.value) * 521.78;
    }else if(inputTypeValue6 === "decade" && resultTypeValue6 === "day"){
        result6.value = Number(input6.value) * 3652;
    }else if(inputTypeValue6 === "decade" && resultTypeValue6 === "hour"){
        result6.value = Number(input6.value) * 87658.2;
    }else if(inputTypeValue6 === "decade" && resultTypeValue6 === "minute"){
        result6.value = Number(input6.value) * 5259492;
    }else if(inputTypeValue6 === "decade" && resultTypeValue6 === "second"){
        result6.value = Number(input6.value) * 315569520;
    }

    if(inputTypeValue6 === "year" && resultTypeValue6 === "millennium"){
        result6.value = Number(input6.value) * 0.001;
    }else if(inputTypeValue6 === "year" && resultTypeValue6 === "century"){
        result6.value = Number(input6.value) * 0.01;
    }else if(inputTypeValue6 === "year" && resultTypeValue6 === "decade"){
        result6.value = Number(input6.value) * 0.1;
    }else if(inputTypeValue6 === "year" && resultTypeValue6 === "year"){
        result6.value = input6.value;
    }else if(inputTypeValue6 === "year" && resultTypeValue6 === "month"){
        result6.value = Number(input6.value) * 12;
    }else if(inputTypeValue6 === "year" && resultTypeValue6 === "week"){
        result6.value = Number(input6.value) * 52;
    }else if(inputTypeValue6 === "year" && resultTypeValue6 === "day"){
        result6.value = Number(input6.value) * 365;
    }else if(inputTypeValue6 === "year" && resultTypeValue6 === "hour"){
        result6.value = Number(input6.value) * 8760;
    }else if(inputTypeValue6 === "year" && resultTypeValue6 === "minute"){
        result6.value = Number(input6.value) * 525948;
    }else if(inputTypeValue6 === "year" && resultTypeValue6 === "second"){
        result6.value = Number(input6.value) * 31556926;
    }

    if(inputTypeValue6 === "month" && resultTypeValue6 === "millennium"){
        result6.value = Number(input6.value) * 0.000083;
    }else if(inputTypeValue6 === "month" && resultTypeValue6 === "century"){
        result6.value = Number(input6.value) * 0.00083;
    }else if(inputTypeValue6 === "month" && resultTypeValue6 === "decade"){
        result6.value = Number(input6.value) * 0.083;
    }else if(inputTypeValue6 === "month" && resultTypeValue6 === "year"){
        result6.value = Number(input6.value) * 0.1;
    }else if(inputTypeValue6 === "month" && resultTypeValue6 === "month"){
        result6.value = input6.value;
    }else if(inputTypeValue6 === "month" && resultTypeValue6 === "week"){
        result6.value = Number(input6.value) * 4.35;
    }else if(inputTypeValue6 === "month" && resultTypeValue6 === "day"){
        result6.value = Number(input6.value) * 30.4;
    }else if(inputTypeValue6 === "month" && resultTypeValue6 === "hour"){
        result6.value = Number(input6.value) * 730;
    }else if(inputTypeValue6 === "month" && resultTypeValue6 === "minute"){
        result6.value = Number(input6.value) * 43800;
    }else if(inputTypeValue6 === "month" && resultTypeValue6 === "second"){
        result6.value = Number(input6.value) * 2628000;
    }

    if(inputTypeValue6 === "week" && resultTypeValue6 === "millennium"){
        result6.value = Number(input6.value) * 0.000019;
    }else if(inputTypeValue6 === "week" && resultTypeValue6 === "century"){
        result6.value = Number(input6.value) * 0.00019;
    }else if(inputTypeValue6 === "week" && resultTypeValue6 === "decade"){
        result6.value = Number(input6.value) * 0.0019;
    }else if(inputTypeValue6 === "week" && resultTypeValue6 === "year"){
        result6.value = Number(input6.value) * 0.019;
    }else if(inputTypeValue6 === "week" && resultTypeValue6 === "month"){
        result6.value = Number(input6.value) * 0.229;
    }else if(inputTypeValue6 === "week" && resultTypeValue6 === "week"){
        result6.value = input6.value;
    }else if(inputTypeValue6 === "week" && resultTypeValue6 === "day"){
        result6.value = Number(input6.value) * 7;
    }else if(inputTypeValue6 === "week" && resultTypeValue6 === "hour"){
        result6.value = Number(input6.value) * 168;
    }else if(inputTypeValue6 === "week" && resultTypeValue6 === "minute"){
        result6.value = Number(input6.value) * 10080;
    }else if(inputTypeValue6 === "week" && resultTypeValue6 === "second"){
        result6.value = Number(input6.value) * 605800;
    }

    if(inputTypeValue6 === "day" && resultTypeValue6 === "millennium"){
        result6.value = Number(input6.value) * 0.0000027;
    }else if(inputTypeValue6 === "day" && resultTypeValue6 === "century"){
        result6.value = Number(input6.value) * 0.000027;
    }else if(inputTypeValue6 === "day" && resultTypeValue6 === "decade"){
        result6.value = Number(input6.value) * 0.00027;
    }else if(inputTypeValue6 === "day" && resultTypeValue6 === "year"){
        result6.value = Number(input6.value) * 0.0027;
    }else if(inputTypeValue6 === "day" && resultTypeValue6 === "month"){
        result6.value = Number(input6.value) * 0.032;
    }else if(inputTypeValue6 === "day" && resultTypeValue6 === "week"){
        result6.value = Number(input6.value) * 0.14;
    }else if(inputTypeValue6 === "day" && resultTypeValue6 === "day"){
        result6.value = input6.value;
    }else if(inputTypeValue6 === "day" && resultTypeValue6 === "hour"){
        result6.value = Number(input6.value) * 24;
    }else if(inputTypeValue6 === "day" && resultTypeValue6 === "minute"){
        result6.value = Number(input6.value) * 1440;
    }else if(inputTypeValue6 === "day" && resultTypeValue6 === "second"){
        result6.value = Number(input6.value) * 86400;
    }

    if(inputTypeValue6 === "hour" && resultTypeValue6 === "millennium"){
        result6.value = Number(input6.value) * 0.000000114;
    }else if(inputTypeValue6 === "hour" && resultTypeValue6 === "century"){
        result6.value = Number(input6.value) * 0.00000114;
    }else if(inputTypeValue6 === "hour" && resultTypeValue6 === "decade"){
        result6.value = Number(input6.value) * 0.0000114;
    }else if(inputTypeValue6 === "hour" && resultTypeValue6 === "year"){
        result6.value = Number(input6.value) * 0.000114;
    }else if(inputTypeValue6 === "hour" && resultTypeValue6 === "month"){
        result6.value = Number(input6.value) * 0.00136;
    }else if(inputTypeValue6 === "hour" && resultTypeValue6 === "week"){
        result6.value = Number(input6.value) * 0.006;
    }else if(inputTypeValue6 === "hour" && resultTypeValue6 === "day"){
        result6.value = Number(input6.value) * 0.04;
    }else if(inputTypeValue6 === "hour" && resultTypeValue6 === "hour"){
        result6.value = input6.value;
    }else if(inputTypeValue6 === "hour" && resultTypeValue6 === "minute"){
        result6.value = Number(input6.value) * 60;
    }else if(inputTypeValue6 === "hour" && resultTypeValue6 === "second"){
        result6.value = Number(input6.value) * 3600;
    }

    if(inputTypeValue6 === "minute" && resultTypeValue6 === "millennium"){
        result6.value = Number(input6.value) * 0.0000000019;
    }else if(inputTypeValue6 === "minute" && resultTypeValue6 === "century"){
        result6.value = Number(input6.value) * 0.000000019;
    }else if(inputTypeValue6 === "minute" && resultTypeValue6 === "decade"){
        result6.value = Number(input6.value) * 0.00000019;
    }else if(inputTypeValue6 === "minute" && resultTypeValue6 === "year"){
        result6.value = Number(input6.value) * 0.0000019;
    }else if(inputTypeValue6 === "minute" && resultTypeValue6 === "month"){
        result6.value = Number(input6.value) * 0.000022;
    }else if(inputTypeValue6 === "minute" && resultTypeValue6 === "week"){
        result6.value = Number(input6.value) * 0.000099;
    }else if(inputTypeValue6 === "minute" && resultTypeValue6 === "day"){
        result6.value = Number(input6.value) * 0.00069;
    }else if(inputTypeValue6 === "minute" && resultTypeValue6 === "hour"){
        result6.value = Number(input6.value) * 0.016;
    }else if(inputTypeValue6 === "minute" && resultTypeValue6 === "minute"){
        result6.value = input6.value;
    }else if(inputTypeValue6 === "minute" && resultTypeValue6 === "second"){
        result6.value = Number(input6.value) * 60;
    }

    if(inputTypeValue6 === "second" && resultTypeValue6 === "kilometer"){
        result6.value = Number(input6.value) * 0.000000000031;
    }else if(inputTypeValue6 === "second" && resultTypeValue6 === "century"){
        result6.value = Number(input6.value) * 0.00000000031;
    }else if(inputTypeValue6 === "second" && resultTypeValue6 === "decade"){
        result6.value = Number(input6.value) * 0.0000000031;
    }else if(inputTypeValue6 === "second" && resultTypeValue6 === "year"){
        result6.value = Number(input6.value) * 0.000000031;
    }else if(inputTypeValue6 === "second" && resultTypeValue6 === "month"){
        result6.value = Number(input6.value) * 0.00000038;
    }else if(inputTypeValue6 === "second" && resultTypeValue6 === "week"){
        result6.value = Number(input6.value) * 0.0000016;
    }else if(inputTypeValue6 === "second" && resultTypeValue6 === "day"){
        result6.value = Number(input6.value) * 0.000011;
    }else if(inputTypeValue6 === "second" && resultTypeValue6 === "hour"){
        result6.value = Number(input6.value) * 0.00027;
    }else if(inputTypeValue6 === "second" && resultTypeValue6 === "minute"){
        result6.value = Number(input6.value) * 0.016;
    }else if(inputTypeValue6 === "second" && resultTypeValue6 === "second"){
        result6.value = input6.value;
    }
}
