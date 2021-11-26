car_image = "";
objects = "";
status4 = "";
function preload() {
    car_image = loadImage("flower.jpg");
}

function setup() {
    canvas = createCanvas(500,370);
    canvas.center;
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded() {
    console.log("Model is Loaded")
    status4 = true;
    objectDetector.detect(clock_image, gotResult);
}

function draw() {
    image(car_image, 0, 0, 500, 370);

    if (status4 != "") {

        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status: Objects Detected";
            document.getElementById("objects4").innerHTML = "There is 1 big Object in the image from which cocossd model has detected 1 object."
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