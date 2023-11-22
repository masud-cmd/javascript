
/*

---- TO DO ------


*/

//Knapp som döljer första sidan
//Saknar: Spara ner värdet
const startPage = document.querySelector('#startSection')
const gamePage = document.querySelector('#gamePage')
const killBtn = document.querySelector('#kill-btn')

const play = document.querySelector('#play-btn')

document.querySelectorAll('input[name="difficulty"]').forEach(input => {
    input.addEventListener('change', function(event) {
        selectedDifficulty = event.target.value;
    });
});


play.addEventListener('click', () => {
	startPage.classList.add('invisible')
	gamePage.classList.remove('invisible')

	//Osäker på dessa men en skiss
	// localStorage.setItem("Name", input.name);
	// localStorage.setItem("Level", input.level);

})

// Kroppsdelar upp
const svgElement = document.querySelector('.gubbe svg');
const ground = svgElement.querySelector('#ground');
const scaffold = svgElement.querySelector('#scaffold');
const head = svgElement.querySelector('#head');
const body = svgElement.querySelector('#body');
const arms = svgElement.querySelector('#arms');
const legs = svgElement.querySelector('#legs');

const parts = [ground, scaffold, head, body, arms, legs];
let currentIndex = 0; // Håller reda på vilken del som ska visas nästa


// Döljer gubbben från start
parts.forEach(part => part.classList.add('invisible'));

// Varje klick lägger till en kroppsdel
killBtn.addEventListener('click', () => {

    // Visa nuvarande del
    if (currentIndex < parts.length) {
        parts[currentIndex].classList.remove('invisible');
        currentIndex++; // Öka indexet för nästa klick
    } else {
        // Återställ indexet om alla delar har visats
        parts.forEach(part => part.classList.add('invisible'));
        currentIndex = 0;
    }
});







