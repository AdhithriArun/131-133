img = "bedroom.jpeg";

function preload()
{
    img = loadImage("bedroom.jpeg")
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw()
{
    image(bedroom_img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Bed", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);
}