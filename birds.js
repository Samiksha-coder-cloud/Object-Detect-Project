status5 = "";
function preload() {
    birds_image = loadImage("birds.jpg");
}

function setup() {
    canvas = createCanvas(500,370);
    canvas.center;
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status5").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
    console.log("Model is Loaded")
    status5 = true;
    objectDetector.detect(birds_image, gotResult);
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