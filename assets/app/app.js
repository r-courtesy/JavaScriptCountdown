const countdown = () => {
    const countDate = new Date('May 19, 2021, 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const txtDay = Math.floor(gap / day);
    const txtHour = Math.floor((gap % day) / hour);
    const txtMinute = Math.floor((gap % hour) / minute);
    const txtSecond = Math.floor((gap % minute) / second);

    document.querySelector('.day').innerHTML = txtDay;
    document.querySelector('.hour').innerHTML = txtHour;
    document.querySelector('.minute').innerHTML = txtMinute;
    document.querySelector('.second').innerHTML = txtSecond;
};

setInterval(countdown, 1000);