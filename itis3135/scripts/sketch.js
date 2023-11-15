let drawing = false;

function setup() {
    createCanvas(400, 400);
    background(255);
}

function draw() {
    if (drawing) {
        stroke(0);
        strokeWeight(3);
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function mousePressed() {
    drawing = true;
}

function mouseReleased() {
    drawing = false;
}

function keyPressed() {
    if (keyCode === ENTER) {
        background(255);
    }
}
