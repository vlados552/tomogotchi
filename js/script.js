/*----- constants -----*/
const DIFFICULT = 20;
const SPEED_AGE = 5 * 1000;
const SPEED_HUNGER = 2 * 1000;
const SPEED_BOREDOM = 1 * 1000;
const SPEED_SLEEP = 4 * 1000;
/*----- app's state (variables) -----*/
let gameState;
const pet = new Object();
/*----- cached element references -----*/
body = document.querySelector('body');
sectionStart = document.querySelector('.js-section-start');
sectionGame = document.querySelector('.js-section-game');
sectionEnd = document.querySelector('.js-section-end');
buttonStart = document.querySelector('#buttonStart');
buttonPlayAgain = document.querySelector('#buttonPlayAgain');
statAge = document.querySelector('#statAge');
statHunger = document.querySelector('#statHunger');
statBoredom = document.querySelector('#statBoredom');
statSleep = document.querySelector('#statSleep');
actionFeed = document.querySelector('#actionFeed');
actionPlay = document.querySelector('#actionPlay');
actionSleep = document.querySelector('#actionSleep');
/*----- event listeners -----*/
body.addEventListener('click', function (e) {
	if (e.target === buttonStart) {
		gameState = 1;
		init();
	}
	if (e.target === buttonPlayAgain) {
		gameState = 0;
		render();
	}
	if (e.target === actionFeed) {
		decreaseHunger(pet);
	}
	if (e.target === actionPlay) {
		decreaseBoredom(pet);
	}
	if (e.target === actionSleep) {
		decreaseSleep(pet);
	}
});
/*----- functions -----*/
function init() {
	pet.age = 0;
	pet.hunger = 0;
	pet.boredom = 0;
	pet.sleep = 0;
	render();
}

function render() {
	checkDifficult(pet);
	if (gameState === 0) {
		setHidden(sectionGame);
		setHidden(sectionEnd);
		removeHidden(sectionStart);
	} else if (gameState === 1) {
		setHidden(sectionStart);
		setHidden(sectionEnd);
		removeHidden(sectionGame);
	} else if (gameState === 2) {
		setHidden(sectionStart);
		setHidden(sectionGame);
		removeHidden(sectionEnd);
	}
	statAge.innerText = `Age: ${pet.age}`;
	statHunger.innerText = `Age: ${pet.hunger}`;
	statBoredom.innerText = `Age: ${pet.boredom}`;
	statSleep.innerText = `Age: ${pet.sleep}`;
}

function toggleHidden(target) {
	target.classList.toggle('hidden');
}
function setHidden(target) {
	target.classList.add('hidden');
}
function removeHidden(target) {
	target.classList.remove('hidden');
}
function increaseHunger(obj) {
	obj.hunger += 1;
	render();
}
function decreaseHunger(obj) {
	obj.hunger -= 1;
	render();
}
function increaseBoredom(obj) {
	obj.boredom += 1;
	render();
}
function decreaseBoredom(obj) {
	obj.boredom -= 1;
	render();
}
function increaseSleep(obj) {
	obj.sleep += 1;
	render();
}
function decreaseSleep(obj) {
	obj.sleep -= 1;
	render();
}
function increaseAge(obj) {
	obj.age += 1;
	render();
}
function checkDifficult(obj) {
	if (obj.hunger >= DIFFICULT) {
		gameState = 2;
	}
	if (obj.boredom >= DIFFICULT) {
		gameState = 2;
	}
	if (obj.sleep >= DIFFICULT) {
		gameState = 2;
	}
}
