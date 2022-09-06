/*----- constants -----*/
const DIFFICULT = 20;
/*----- app's state (variables) -----*/
let gameState;
/*----- cached element references -----*/
sectionStart = document.querySelector('.js-section-start');
sectionGame = document.querySelector('.js-section-game');
sectionEnd = document.querySelector('.js-section-end');
buttonStart = document.querySelector('#buttonStart');
buttonPlayAgain = document.querySelector('#buttonPlayAgain');
body = document.querySelector('body');
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
});
/*----- functions -----*/
function init() {
	render();
}

function render() {
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
