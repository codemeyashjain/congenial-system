function preload(){

}
function setup(){
canvas=createCanvas(640,490);
canvas.position(110,250);
video= createCapture(VIDEO);
video.hide();

 tintcolor="";
}
function draw(){
image(video,0,0,640,490);
tint(tintcolor);
}
function take_snapshot(){
save('5oject');
}
function filter_tint(){
    tintcolor=document.getElementById("color_name").value;
}