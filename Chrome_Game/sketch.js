let BACKGROUND_SCROLL_SPEED = .5;
let BACKGROUND_LOOPING_PT = 345;
let gameState = "play";
let rabbit;
let eagle;
let obstacles = [];
let bgImg;
let obstacleImg;
let eagleImg;
let rabbitImg;
let score = 0;

let bgScroll = 0;

function preload() {
    obstacleImg = loadImage('Fence_Tile_EtherealDragon.png');
    eagleImg = loadImage('eagle.png');
    rabbitImg = loadImage('rabbit.png');
    bgImg = loadImage('Pixel Grass Background - Tofu.png')

    gameFont = loadFont('font.ttf')
}

function setup() {
    createCanvas(660, 370)
    rabbit = new Rabbit(rabbitImg);
    eagle = new Eagle(eagleImg);
    obstacles.push(new Obstacle(obstacleImg));
}

function displayPoint() {
    fill('white')
    textAlign(RIGHT)
    textFont(gameFont)
    textSize(20)
    text("Score: " + score, width - 100, 32)
}

function draw() {
    background(0);
    noSmooth();
    image(bgImg, -bgScroll, 0)
    bgScroll = (bgScroll + BACKGROUND_SCROLL_SPEED) % BACKGROUND_LOOPING_PT;

    if (gameState == "play") {
        play();
    } else if (gameState == "doneEagle") {
        doneEagle();
    } else if (gameState == "doneObstacle") {
        doneObstacle();
    }
}

function play() {
    rabbit.show();
    rabbit.move();
    // rabbit.jump();
    eagle.show();
    eagle.move();

    if (random(1) < 0.005) {
        obstacles.push(new Obstacle(obstacleImg));
    }
    for (let o of obstacles) {
        o.move();
        o.show();
        if (rabbit.collides(o)) {
            noLoop();
            doneObstacle();
        }
        if (!o.scored) {
            if (o.x + o.w < rabbit.x) {
                score++
                o.scored = true
            }
        }
    }
    if (rabbit.captured(eagle)) {
        noLoop();
        doneEagle();
        keyPressed();
    }

    displayPoint();
}

function doneEagle() {
    fill(255)
    textAlign(CENTER, CENTER)
    textSize(20)
    textFont(gameFont)
    text("Caught by Eagle!", width / 2, height / 2);
    textSize(16)
    text("Press Enter / Return to Play Again", width / 2, (height / 2) + 40)
    keyPressed();
}

function doneObstacle() {
    fill(255)
    textAlign(CENTER, CENTER)
    textSize(20)
    textFont(gameFont)
    text("Caught by Fence!", width / 2, height / 2);
    textSize(16)
    text("Press Enter / Return to Play Again", width / 2, (height / 2) + 40)
    keyPressed();
}

function keyPressed() {
    if (keyCode == 32) {
        rabbit.jump();
    }
    if (keyCode == 13) {
        rabbit.reset();
        score = 0;
        gameState = "play";
    }
}
