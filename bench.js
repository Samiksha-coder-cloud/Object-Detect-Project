bench_image = "";
objects = "";
status3 = "";
function preload() {
    bench_image = loadImage("bench.jpg");
}

function setup() {
    canvas = createCanvas(500,370);
    canvas.center;
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
    console.log("Model is Loaded")
    status3 = true;
    objectDetector.detect(bench_image, gotResult);
}

function draw() {
    image(bench_image, 0, 0, 500, 370);

    if (status3 != "") {

        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status: Objects Detected";
            document.getElementById("objects3").innerHTML = "There is 1 Object in the image from which cocossd model has detected 1 object."
            fill("#ff0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + " % ", objects[i].x + 15 ,  objects[i].y + 15);
            noFill();
            stroke("#ff0000");
            rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
        }
    }
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