var companyName = "Brown & Company";
let userName;
let userMood;

function sayDate() {
    let day = new Date();
    let today = day.toDateString();
    let currentHour = day.getHours();
    let currentMinute = day.getMinutes();
    let am_pm = "am";
    if (currentHour == 12) {
        am_pm = "pm";
    } else if (currentHour > 12) {
        currentHour -= 12;
        am_pm = "pm";
    }
    if (currentMinute < 10) {
        currentMinute = ('0' + currentMinute);
    } else if (currentMinute == 0) {
        currentMinute = "00";
    }
    document.getElementById("time-header").innerHTML = "It Is Currently " + currentHour + ":" + currentMinute + " " + am_pm + " On " + today;
}

function greetingSubmit () {
    
}

function greetingOutput() {
    let x = document.getElementById("field1");
    userName = x.elements[0].value;
    userMood = x.elements[1].value;
    document.getElementById("greetings-label").innerHTML = companyName + " welcomes you, " + userName + "! We're glad you are feeling " + userMood + "!";
}