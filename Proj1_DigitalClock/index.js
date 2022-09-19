const hourEl = document.getElementById("hours")
const minEl = document.getElementById("minutes")
const secEl = document.getElementById("seconds")
const ampmEl = document.getElementById("ampm")

function updateClock(){
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let ampm = "AM"

    if(hour > 12){
        hour = hour - 12
        ampm = "PM"
    }

    hour = hour < 10 ? "0" + hour : hour;
    hourEl.innerText = hour;

    min = min < 10? "0" + min : min
    minEl.innerText = min;

    sec = sec < 10 ? "0" + sec : sec
    secEl.innerText = sec;
    ampmEl.innerText = ampm;
    setTimeout(() => {
        updateClock();
    }, 1000);
}
updateClock();