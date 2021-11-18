status1 = "";
function preload() {
    clock_image = loadImage("clock.jpg");
}

function setup() {
    canvas = createCanvas(500,370);
    canvas.center;
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status1").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
    console.log("Model is Loaded")
    status1 = true;
    objectDetector.detect(clock_image, gotResult);
}


function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);

        objects = results;
    }
}