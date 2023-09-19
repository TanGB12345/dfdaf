function preload(){

}
function setup(){
Canvas = createCanvas(400,400);
Canvas.position(540,150);
video = createCapture(VIDEO);
video.size(400,400);
posenet = ml5.poseNet(video,modelloaded);
posenet.on('pose',gotpose);
}
function modelloaded(){
    console.log("posenet is ready!");
}
function gotpose(result){
    if(result.lenght>0){
        console.log(result);
    }
}
function draw(){
    background("white");
}