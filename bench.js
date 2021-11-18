status3 = "";
function preload() {
    bench_image = loadImage("bench.jpg");
}

function setup() {
    canvas = createCanvas(500,370);
    canvas.center;
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status3").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
    console.log("Model is Loaded")
    status3 = true;
    objectDetector.detect(bench_image, gotResult);
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