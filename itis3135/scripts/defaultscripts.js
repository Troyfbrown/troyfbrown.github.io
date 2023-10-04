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

function greetingOutput() {
    userName = document.getElementById("name").value;
    userMood = document.getElementById("mood").value;

    userName.trim();
    userMood.trim();

    if (userName == '' || userMood == '') {
        const errorParagraph = document.getElementById("error");
        errorParagraph.textContent = "Please fill out all fields.";
        return;
    }

    const errorParagraph = document.getElementById("error");
    errorParagraph.textContent = "";

    const greetingsParagraph = document.getElementById("greetings");
    resultParagraph.textContent = " ${companyName} welcomes you, ${userName}! We're glad you are feeling ${userMood}!";
}