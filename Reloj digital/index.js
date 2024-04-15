console.log("JavaScript enlazado")

function updateClock(){
    var currentDateHour = new Date()

    var hour = currentDateHour.getHours();
    var minutes = currentDateHour.getMinutes();
    var seconds = currentDateHour.getSeconds();

    hour = (hour < 10 ? "0": "") + hour;
    minutes = (minutes < 10 ? "0": "") + minutes;
    seconds = (seconds < 10 ? "0": "") + seconds;

    document.querySelector('.clock-hours__numbers').textContent = hour;
    document.querySelector('.clock-minutes__numbers').textContent = minutes;
    document.querySelector('.clock-seconds__numbers').textContent = seconds;
    
}

setInterval(updateClock, 1000)

updateClock();