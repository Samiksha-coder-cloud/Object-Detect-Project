status4 = "";
function preload() {
    park_image = loadImage("park.jpg");
}

function setup() {
    canvas = createCanvas(500,370);
    canvas.center;
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status4").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
    console.log("Model is Loaded")
    status4 = true;
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