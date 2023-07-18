function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    viedo.center()
}

function draw() {
    image(video, 0, 0, 600, 500);
}
