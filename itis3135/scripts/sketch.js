let drawing = false;

function setup() {
    createCanvas(800, 800);
    background('#f7b538');
}

function draw() {
    if (drawing) {
        stroke('#c32f27');
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
