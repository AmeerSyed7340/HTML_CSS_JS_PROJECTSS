const hourEl = document.getElementById("hours")
const minEl = document.getElementById("minutes")
const secEl = document.getElementById("seconds")
const ampmEl = document.getElementById("ampm")
const msgEl = document.getElementById("msg");

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

    if(ampm == "AM"){
        msgEl.innerText = "Good Morning Ameer"
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1490682143684-14369e18dce8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)";
    }
    else{
        msgEl.innerText = "Good Evening Ameer"
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1492273840898-6102ad35701e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')";
    }
    ampmEl.innerText = ampm;
    setTimeout(() => {
        updateClock();
    }, 1000);
    
}
updateClock();