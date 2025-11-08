let noseX = 0;
let noseY = 0;
let difference = 0;
let rightWristX = 0;
let leftWristX = 0;
let video;
let canvas;
let poseNet;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150)
}