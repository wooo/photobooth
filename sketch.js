var video;
var button;

function setup() {
  createCanvas (320, 240);
  background (51);
  video = createCapture (VIDEO);
  video.size(320, 240);
  button = createButton ('snap');
  button.mousePressed(takesnap);
}

function takesnap (){
  image(video, 0, 0);
}

function draw() {
  tint (100, 0, 100, 200)
  image(video, 0, 0, width, height)
}