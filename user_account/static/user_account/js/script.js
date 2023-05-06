const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");
// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();
let result_time = "";
// storing full name of all months in array
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль",
              "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";
    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }
    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li id="${i}" class="${isToday}">${i}</li>`;
    }
    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;
    daysTag.addEventListener('click',e => {
        let current_data_id =e.target.id;
        if (current_data_id !== undefined && current_data_id!==""){
            currentData(current_data_id, currMonth)
        }})

}
renderCalendar();
prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
        if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); // updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month
        } else {
            date = new Date(); // pass the current date as date value
        }
        renderCalendar(); // calling renderCalendar function
    });
});

function currentData(id, month){
    console.log('id= '+id, 'month '+month)
    let current_day=id
    let current_month = month+1
    let content = document.getElementById("time-content")
    content.textContent = ""
    content.innerHTML += `
    <section class="choose-time">
    <h4>Выберите время</h4>
      <div class="free-time">
        <div class="row">
            <a id="1.1" class="free-time-item col-sm">00:00-00:30</a>
            <a id="2.1" class="free-time-item col-sm">00:30-01:00</a>
            <a id="3.1" class="free-time-item col-sm red">01:00-01:30</a>
            <a id="4.1" class="free-time-item col-sm red">01:30-02:00</a>
            <a id="5.1" class="free-time-item col-sm">02:00-02:30</a>
            <a id="6.1" class="free-time-item col-sm">02:30-03:00</a>
        </div>
        <div class="row">
            <a id="7.1" class="free-time-item col-sm">03:00-03:30</a>
            <a id="8.1" class="free-time-item col-sm">03:30-04:00</a>
            <a id="9.1" class="free-time-item col-sm">04:00-04:30</a>
            <a id="10.1" class="free-time-item col-sm">04:30-05:00</a>
            <a id="11.1" class="free-time-item col-sm red">05:00-05:30</a>
            <a id="12.1" class="free-time-item col-sm red">05:30-06:00</a>
        </div>
        <div class="row">
            <a id="13.1" class="free-time-item col-sm">06:00-06:30</a>
            <a id="14.1" class="free-time-item col-sm">06:30-07:00</a>
            <a id="15.1" class="free-time-item col-sm">07:00-07:30</a>
            <a id="16.1" class="free-time-item col-sm">07:30-08:00</a>
            <a id="17.1" class="free-time-item col-sm">08:00-08:30</a>
            <a id="18.1" class="free-time-item col-sm">08:30-09:00</a>
        </div>
        <div class="row">
            <a id="19.1" class="free-time-item col-sm">09:00-09:30</a>
            <a id=20.1" class="free-time-item col-sm">09:30-10:00</a>
            <a id="21.1" class="free-time-item col-sm red">10:00-10:30</a>
            <a id="22.1" class="free-time-item col-sm red">10:30-11:00</a>
            <a id="23.1" class="free-time-item col-sm red">11:00-11:30</a>
            <a id=24.1" class="free-time-item col-sm red">11:30-12:00</a>
        </div>
        <div class="row">
            <a id="25.1" class="free-time-item col-sm">12:00-12:30</a>
            <a id="26.1" class="free-time-item col-sm">12:30-13:00</a>
            <a id="27.1" class="free-time-item col-sm">13:00-13:30</a>
            <a id="28.1" class="free-time-item col-sm">13:30-14:00</a>
            <a id="29.1" class="free-time-item col-sm">14:00-14:30</a>
            <a id="30.1" class="free-time-item col-sm">14:30-15:00</a>
        </div>
        <div class="row">
            <a id="31.1" class="free-time-item col-sm">15:00-15:30</a>
            <a id="32.1" class="free-time-item col-sm">15:30-16:00</a>
            <a id="33.1" class="free-time-item col-sm">16:00-16:30</a>
            <a id="34.1" class="free-time-item col-sm">16:30-17:00</a>
            <a id="35.1" class="free-time-item col-sm">17:00-17:30</a>
            <a id="36.1" class="free-time-item col-sm">17:30-18:00</a>
        </div>
        <div class="row">
            <a id="37.1" class="free-time-item col-sm">18:00-18:30</a>
            <a id="38.1" class="free-time-item col-sm">18:30-19:00</a>
            <a id="39.1" class="free-time-item col-sm red">19:00-19:30</a>
            <a id="40.1" class="free-time-item col-sm red">19:30-20:00</a>
            <a id="41.1" class="free-time-item col-sm">20:00-20:30</a>
            <a id="42.1" class="free-time-item col-sm">20:30-21:00</a>
        </div>
        <div class="row">
            <a id="43.1" class="free-time-item col-sm">21:00-21:30</a>
            <a id="44.1" class="free-time-item col-sm">21:30-22:00</a>
            <a id="45.1" class="free-time-item col-sm">22:00-22:30</a>
            <a id="46.1" class="free-time-item col-sm">22:30-23:00</a>
            <a id="47.1" class="free-time-item col-sm">23:00-23:30</a>
            <a id="48.1" class="free-time-item col-sm">23:30-00:00</a>
        </div>
      </div>
      <button id="submit_btn" class="btn-login">Подтвердить</button>
      </section>
      `
      content.addEventListener('click',e => {current_time(e.target.textContent, e.target.id, current_day, current_month)})

}

function current_time(current_time, id, current_day, current_month){
    this.result_time = this.result_time + current_time;
    document.getElementById(id).style.background = "#8501c242";
    document.getElementById(id).style.color = "black";
    let submit = document.getElementById("submit_btn");
    submit.addEventListener('click', submit_data(result_time, current_day, current_month))

}

//const xhttp = new XMLHttpRequest();
//xhttp.onload = function() {
  // What to do when the response is ready
//}

function submit_data(result_time, current_day, current_month){
    result = {
    'resul_time': result_time,
    'current_day': current_day,
    'current_month': current_month
    };
    time_in_json = JSON.stringify(result)
    console.log(time_in_json)
}
