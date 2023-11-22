
/*

---- TO DO ------

1. Länka Play knappen så att det sparar username + nivå samt bytter section(ändrar css klass till Display: none)


*/

//Knapp som döljer första sidan
//Saknar: Spara ner värdet
const startPage = document.querySelector('.start')
const gamePage = document.querySelector('.game')
const killBtn = document.querySelector('')
// const scorePage = document.querySelector('')
const
const play = document.querySelector('#play-btn')


play.addEventListener('click', () => {

	startPage.classList.remove('start')
	startPage.classList.add('invisible')

	//Osäker på dessa men en skiss
	// localStorage.setItem("Name", input.name);
	// localStorage.setItem("Level", input.level);


})


killBtn.addEventListener('click', () => {

	gubbe.classList.add('invisible')

})

