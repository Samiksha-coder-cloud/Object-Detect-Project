status2 = "";
function preload() {
    fish_image = loadImage("fish_bowl.jpg");
}

function setup() {
    canvas = createCanvas(500,370);
    canvas.center;
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status2").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
    console.log("Model is Loaded")
    status2 = true;
    objectDetector.detect(fish_image, gotResult);
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