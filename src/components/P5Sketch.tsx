"use client"
import React, { useEffect, useState } from 'react';
import { type Sketch } from "@p5-wrapper/react";
// import { NextReactP5Wrapper } from "@p5-wrapper/next";
import dynamic from 'next/dynamic'

const NextReactP5Wrapper = dynamic(() => import('@p5-wrapper/next').then((mod) => mod.NextReactP5Wrapper), {
    ssr: false,
})

const sketch: Sketch = p5 => {
    p5.setup = () => p5.createCanvas(600, 400, p5.WEBGL);

    p5.draw = () => {
        p5.background(250);
        p5.normalMaterial();
        p5.push();
        p5.rotateZ(p5.frameCount * 0.01);
        p5.rotateX(p5.frameCount * 0.01);
        p5.rotateY(p5.frameCount * 0.01);
        p5.plane(100);
        p5.pop();
    };
};

function P5Sketch() {
    return (
        <NextReactP5Wrapper sketch={sketch} />
    )
}

export default P5Sketch;
