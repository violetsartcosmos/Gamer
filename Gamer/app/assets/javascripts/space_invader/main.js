$(document).on("ready", function(){
	console.log("Getting started")

	main();




//Main variables

var screen, input, adSprites, meSprite;
var alienAds, frames, spriteFrames, changeFrames


//Functions needed to start the game

function main() {
	screen = new Screen(900, 600);
	input = PressedKeyHandeler();

	var meSpriteImage = new Image();
	meSpriteImage.src = "/assets/nurek.png"
	var alien = new Image();
	alien.src = "/assets/UFOs.png"

	alien.addEventListener("load", function(){
		adSprites = [
			[new Sprite(alien, 0, 0, 150, 75)],
			[new Sprite(alien, 170, 0, 150, 75)],
			[new Sprite(alien, 0, 110, 150, 75)]
		];
		console.log("Trying to add images");
		initialize();
		run();
	})

	meSpriteImage.addEventListener("load", function(){
		meSprite = new Sprite(this, 0, 0, 13, 22)
		initialize();
		run();
	})
};

function initialize(){
	frames = 0;
	spriteFrames = 0;
	changeFrames = 60;

	alienAds = [];
	var rows = [0,1,2];

	for(var i = 0; i < rows.length; i++) {
		for(var j = 0; j < 3; j++) {
			var whichRow = rows[i];
			alienAds.push({
				sprite: adSprites[whichRow],
				x: 40 + j*150,
				y: 40 + i*75,
				w: adSprites[whichRow][0].w,
				h: adSprites[whichRow][0].h
			})
		}
	}
};

function run(){
	var loop = function(){
		update();
		render();

		window.requestAnimationFrame(loop, screen.canvas);
	}
	window.requestAnimationFrame(loop, screen.canvas);

};

function update(){

};

function render(){
	for(var i = 0; i < alienAds.length; i++){
		var nextAlien = alienAds[i];
		screen.drawSprite(nextAlien.sprite[0], nextAlien.x, nextAlien.y)
	}
	screen.drawSprite(meSprite, 200, 200);
};

})