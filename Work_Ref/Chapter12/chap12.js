//Functions

var trainSpeed = 50;
var trainPosition = 0;
var animation;

var train = document.getElementById("train");
train.addEventListener("click", speedUp);

var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

function speedUp() {
    if (trainSpeed > 10) {
        trainSpeed -= 10;
    }
    console.log("train speed: " + trainSpeed);

    clearInterval(animation);
    animation = setInterval(frame, trainSpeed);


    function frame() {
        trainPosition += 2;
        train.style.left = trainPosition + 'px';
        console.log(trainPosition);
        checkPosition(trainPosition);
    }
}

function checkPosition(currentPosition) {
    if (currentPosition === 400) {
        alert("OOOOO!");
        console.log("Crash!");
        clearInterval(animation);
        currentPosition = 0;
        train.style.left = 0 + 'px';
    }
}

function stopTrain() {
    if (trainPosition < 400) {
        clearInterval(animation);
    }
}
 

//Simple Sum of function
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(5, 10));
