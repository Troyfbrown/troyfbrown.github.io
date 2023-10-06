var companyName = "Brown & Company";
let userName;
let userMood;
let woodInDam = 0;
let woodAdded = 0;
let woodTaken = 0;
let damsDestroyed = 0;
let timesPet = 0;

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

    polyNumber = Math.abs(polyNumber);
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
            polyName = "Polygon with and unknown number of sides";
            break;
    }
    alert(`The number you selected, (${polyNumber}) corresponds to the polygon ${polyName}`);
}

function checkDam() {
    if (woodInDam < 1) {
        alert(`There is no wood in the beaver's dam. There is no dam.`);
        return;
    } else if (woodInDam < 6) {
        alert(`There are ${woodInDam} pieces of wood in the dam, this is a small dam.`);
        return;
    } else if (woodInDam < 11) {
        alert(`There are ${woodInDam} pieces of wood in the dam, it's getting there.`);
        return;
    } else {
        alert(`There are ${woodInDam} pieces of wood in the dam, thats a pretty big dam!`);
    }
}

function addDam() {
    woodInDam++;
    woodAdded++;
    alert(`Thank you for adding wood to the dam! This pleases the beaver.
    You have now added ${woodAdded} pieces of wood to the dam.`);
}

function subtractDam() {
    if (woodInDam < 1) {
        alert (`You cannot take what is not there, trying adding some wood first`);
        return;
    }

    woodInDam--;
    woodTaken++;
    if (woodInDam < 10) {
        alert(`Oh No! You've taken wood from the beaver's dam.
        You have now taken ${woodTaken} pieces of wood from the dam.`);
    } else {
        alert(`Oh No! You've taken wood from the beaver's dam.
        You have now taken ${woodTaken} pieces of wood from the dam. HOW CRUEL!`);
    }
}

function destroyDam() {
    if (woodInDam < 1) {
        alert (`You cannot destroy what is not there, trying adding some wood first`);
        return;
    }
    woodInDam = 0;
    woodAdded = 0;
    woodTaken = 0;
    damsDestroyed++;
    alert(`You monster! You destroyed his dam! This makes ${damsDestroyed} times now!`);
}

function petBeaver() {
    timesPet++;
    if (timesPet <= 5) {
        alert(`Thank you for petting the beaver! You have pet him ${timesPet} now!
        He appreciates it!`);
        return;
    } else if (timesPet <= 10) {
        alert(`Thank you for petting the beaver! You have pet him ${timesPet} now!
        He seems quite pleased!`);
        return;
    } else if (timesPet <= 15) {
        alert(`Thank you for petting the beaver! You have pet him ${timesPet} now!
        He's starting to purr! I didn't know beavers did that.`);
        return;
    } else if (timesPet <= 20) {
        alert(`Thank you for petting the beaver! You have pet him ${timesPet} now!
        He is starting to calm down from his pet high.`);
        return;
    } else if (timesPet <= 21) {
        alert(`You have pet him ${timesPet} now!
        He seems honestly a little bothered.`);
        return;
    } else if (timesPet <= 22) {
        alert(`You have pet him ${timesPet} now!
        He's pretty indifferent now. He is num to the pets.`);
        return;
    } else if (timesPet <= 23) {
        alert(`You're still petting though, ${timesPet} now.`);
        return;
    } else if (timesPet <= 24) {
        alert(`Stiiiiiiiiiill going, ${timesPet} pets.`);
        return;
    } else if (timesPet <= 25) {
        alert(`Alright That's probably enough pets, ${timesPet} now.`);
        return;
    } else if (timesPet <= 26) {
        alert(`I give up... ${timesPet}`);
        return;
    } else {
        alert(`Times you've pet the beaver: ${timesPet}`);
    }
}