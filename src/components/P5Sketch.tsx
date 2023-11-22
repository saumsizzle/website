import React from 'react';
import Sketch from 'react-p5';

function P5Sketch() {
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(400, 400).parent(canvasParentRef)
    }

    const draw = (p5) => {
        p5.stroke(172, 203, 255);
        if (p5.mouseIsPressed) {
            p5.fill(172, 203, 255);
        } else {
            p5.fill(255);
        }
        p5.ellipse(p5.mouseX, p5.mouseY, 80, 80);

    }

    return (
        <Sketch setup={setup} draw={draw} />
    )
}

export default P5Sketch;
