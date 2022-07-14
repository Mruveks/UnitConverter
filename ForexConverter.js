var data = "";

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
      console.log(this.responseText);
    }
  });

xhr.open("GET", "https://api.xchangeapi.com/csv/chart/EURUSD?starttime=1577836800&endtime=1577836920");

xhr.setRequestHeader("api-key", "0YVyDs9mQi9Zr59R1nVxH9rz33rEDSh7");

xhr.send(data);
 