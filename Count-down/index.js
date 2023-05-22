let currNewDate = new Date("Sep 27, 2023 00:00:00").getTime();
let x = setInterval(function(){
    let now = new Date().getTime();
    let distance = currNewDate - now;

    let days = Math.floor(distance/(24*60*60*1000));
    let hours = Math.floor((distance%(24*60*60*1000))/(60*60*1000));
    let minutes = Math.floor((distance%(60*60*1000))/(60*1000));
    let seconds = Math.floor((distance%(60*1000))/(1000));

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(distance<0){
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }
},1000);