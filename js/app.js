const items = document.querySelectorAll(".countdown-item > h4");
const countdownElement = document.querySelector(".countdown");

// Получаем дату отсчета
let countdownDate = new Date(2025, 9, 29, 0, 0, 0).getTime();
// let countdownDate = new Date(2024, 10, 1, 17, 12, 0).getTime();

function getCountdownTime(){
    const now = new Date().getTime();

    // Получаем разницу времни
    const distance = countdownDate - now;

    // Получаем переменные в милисекундах
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    
    // Подсчет дней, часов, минут, секунд
    let days = Math.floor(distance / oneDay);
    let hours = Math.floor((distance % oneDay) / oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMinute);
    let seconds = Math.floor((distance % oneMinute) / 1000);

    let values = [days, hours, minutes, seconds];
    
    items.forEach(function(item, index){
        item.textContent = values[index];
    })

    if(distance < 0){
        clearInterval(countdown);
        countdownElement.innerHTML = "<h4>Служба закончилась!</h4>"
    }

}

let countdown = setInterval(getCountdownTime, 1000);
getCountdownTime();