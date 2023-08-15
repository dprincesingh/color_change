let min = 0
let sec = 0
let msec = 0
let timeid =null

let displaytimer = document.getElementById('timerdisplay')
let startbtn = document.getElementById('btn1')
let stoptbtn = document.getElementById('btn2')
let resetbtn = document.getElementById('btn3')


startbtn.addEventListener("click", function () {
    timeid = setInterval(() => {
        starttimer()
    }, 10);
})

stoptbtn.addEventListener("click", function () {
    clearInterval(timeid)
})

resetbtn.addEventListener('click', function () {
    clearInterval(timeid)
    min = 0
    sec = 0
    msec = 0   
    displaytimer.innerHTML = `00:00:00`
})




function starttimer() {
    msec++
    if (msec == 100) {
        msec = 0
        sec++

    } if (sec == 60) {
        sec = 0
        min++
    }
    let minstring = min < 10 ? `0${min}` : `${min}`
    let secstring = sec < 10 ? `0${sec}` : `${sec}`
    let msecstring = msec < 10 ? `0${msec}` : `${msec}`
    displaytimer.innerHTML = `${minstring}:${secstring}:${msecstring}`
}