const hours = document.getElementById('hour')
const minutes = document.getElementById('minute')
const seconds = document.getElementById('second')
const bar = document.getElementById('progress')

function showWatch() {
    let date = new Date()
    let hr = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

    hours.textContent = hr < 10 ? "0" + hr : hr
    minutes.textContent = min < 10 ? "0" + min : min
    seconds.textContent = sec < 10 ? '0' + sec : sec

    bar.style.width = (sec / 60) * 100 + '%'
}
setInterval(showWatch,1000)
