const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm")

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h > 12) {    /* if h > 12(if hours > 12 i.e 13 then 13-12= 1 save to h and then set ampm = PM) */
        h = h - 12;
        ampm = "PM";
    }

    h = h < 10 ? "0" + h : h;   /* if h is > 10 ?(if this happens means use 0 + h) :(else) simply dispaly h */
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ampm;
    setTimeout(() => {
        updateClock();
    }, 1000);
}
updateClock();