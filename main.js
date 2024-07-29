var paddle2 =10,paddle=10;
var paddle1X = 10,paddle1Height = 110;
var paddle2X = 685,paddle2Height = 70;
var score1 = 0, score2 = 0;
var paddleY;

var playerscore = 0;
var pcscore = 0;
var ball = {
    x:350/2,
    y:480/2,
    r:20,
    dx:3,
    dy:3
}

function setup()
{
    var canvas = createCanvas(700,600);
    canvas.parent("canvas");
}

function draw()
{
    background(0);
    fill("black")
    stroke("black");
    rect(680,0,20,700);

    fill("black");
    stroke("black");
    rect(0,0,20,700);
}