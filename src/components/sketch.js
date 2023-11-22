function setup() {
    createCanvas(400, 400);
}

function draw() {
    stroke(172, 203, 255);
    if (mouseIsPressed) {
        fill(172, 203, 255);
    } else {
        fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
}
