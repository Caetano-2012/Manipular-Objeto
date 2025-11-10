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
    video.position(350, 150);

    canvas = createCanvas(550, 550);
    canvas.position(1000, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet foi inicializado!');
}

function gotPoses(results) {
    if(results.length > 0) {
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        difference = floor(leftWristX - rightWristX);
    }
}

function draw() {
    background('#969A97');
    document.getElementById("squareSide").innerHTML = "A largura e altura do quadrado será: " + difference +"px";
    fill('rgba(0, 150, 187, 1)');
    stroke('rgba(0, 150, 187, 1)');
    square(noseX, noseY, difference);
}