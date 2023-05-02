const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");
// getting new date, current year and month
let date = new Date(),
currYear = date.getFullYear(),
currMonth = date.getMonth();
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
    console.log('test','id= '+id, 'month= '+month)
    let content = document.getElementById("time-content")
    content.textContent = ""
    content.innerHTML += `
    <section class="choose-time">
    <h4>Выберите время</h4>
      <ul class="list-group">
        <li id='1.1' class="list-group-item" (click)=current_time()>10:00-11:00</li>
        <li id='2.2' class="list-group-item">11:00-12:00</li>
        <li id='3.3' class="list-group-item">12:00-13:00</li>
        <li id='4.4' class="list-group-item">15:00-16:00</li>
        <li id='5.5' class="list-group-item">16:00-17:00</li>
      </ul>
      <button class="btn-login">Подтвердить</button>
      </section>
      `
      content.addEventListener('click',e => {current_time(e.target.textContent, e.target.id)})
}

function current_time(el_time, id){
    console.log('time= '+el_time, 'id= '+id)
    document.getElementById(id).style.background = "#8501c242";

}
