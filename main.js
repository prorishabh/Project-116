mustacheX=0;
mustacheY=0;

function preload()
{
    mustache=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function take_snapshot()
{
    save('Picture_Filter.png');  
}

function draw()
{
    image(video ,0,0,300,300);
    image(mustache,mustacheX,mustacheY,50,50);
}

function modelLoaded()
{
    console.log("Model is Loaded");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        console.log("nosex="+results[0].pose.nose.x);
        console.log("nosey="+results[0].pose.nose.y);
        mustacheX=results[0].pose.nose.x-15;
        mustacheY=results[0].pose.nose.y-15;
    }
}