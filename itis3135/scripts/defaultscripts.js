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
    const timeHeader = document.getElementById("time-header");
    timeHeader.textContent = `It Is Currently ${currentHour}:${currentMinute} ${am_pm} On ${today}`;
}

function greetings() {
    userName = document.getElementById("name").value;
    userMood = document.getElementById("mood").value;

    userName.trim();
    userMood.trim();

    if (userName === '' || userMood === '') {
        const errorParagraph = document.getElementById("error");
        errorParagraph.textContent = "Please fill out all fields.";
        return;
    }

    const errorParagraph = document.getElementById("error");
    errorParagraph.textContent = "";

    const greetingsParagraph = document.getElementById("greetings");
    greetingsParagraph.textContent = `${companyName} welcomes you, ${userName}! We\'re glad you are feeling ${userMood}!`;
}

function findPolygon() {
    var polyNumberInput = document.getElementById("polygon-num");
    let polyNumber = parseFloat(polyNumberInput.value);

    polyNumber = Math.abs(polynumber);
    polyNumber = Math.round(polyNumber);

    if (polyNumber < 0) {
        polyNumber = 0;
    } else if (polyNumber > 10) {
        polyNumber = 10;
    }

    let polyName = "";
    switch (polyNumber) {
        case 0:
            polyName = "Circle";
            break;
        case 1:
            polyName = "henagon";
            break;
        case 2:
            polyName = "Digon";
            break;
        case 3:
            polyName = "Trigon";
            break;
        case 4:
            polyName = "Tetragon";
            break;
        case 5:
            polyName = "Pentagon";
            break;
        case 6:
            polyName = "Hexagon";
            break;
        case 7:
            polyName = "Heptagon";
            break;
        case 8:
            polyName = "Octagon";
            break;
        case 9:
            polyName = "Enneagon";
            break;
        case 10:
            polyName = "Decagon";
            break;
        default:
            polyName = "Polygon with and unknown number of sides"
            break;
    }
    alert(`The number you selected, (${polyNumberInput}) corresponds to the polygon ${polyName}`);
}