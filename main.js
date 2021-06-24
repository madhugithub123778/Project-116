
function preload(){
moustache = loadImage("https://i.postimg.cc/rpdmkHnr/m.png");
}

function setup(){
canvas = createCanvas(600, 600);
canvas.center();
v1 = createCapture(VIDEO);
v1.hide();

poseNet = ml5.poseNet(v1, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){
console.log("PoseNet Model has Loaded");

}

moust_x = 0;
moust_y = 0;
moustache = "";

function gotPoses(results){

    if (results.length >0){
    moust_x = results[0].pose.nose.x - 70;
    moust_y = results[0].pose.nose.y + 70;
console.log("Moustache X = "+ moust_x+ " Moustache Y = "+moust_y);

    }
}

    
function draw(){
image (v1, 0, 0, 600, 600);
    
image (moustache, moust_x, moust_y, 100, 80);
}

function take_snap(){
save ("myMoustache.png"); 
}
