var scores, roundScore, activePlayer, dice, winScore;
var gamePlaying = true; // gamePlaying is a State Variable
// State Variable is a variable who tells the state of a system.
init();


//Math.random генерирует рандомный число между 0 и 1.
// Math.floor преврошает деситичное число в обычное число

// Можно добовлять значения переменный к id или class в Selector
//document.querySelector('#current-' + activePlayer).textContent = dice;



document.querySelector('.btn-roll').addEventListener('click', function(){
	if (gamePlaying)
{
// 1-Рандомный число
	var dice = Math.floor(Math.random() * 6) + 1;

// 2-Покозать результат 
	var diceDom = document.querySelector('.dice')
	diceDom.style.display = 'block';
	diceDom.src = 'dice-' + dice + '.png';
// 5 - если результат следовательно 6 то игракок потеряет ВСЕ свой баллы,
	if (dice === 6 ) {
		scores[activePlayer] = 0;
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]
		nextPlayer();
	}


// 3  Балл если результат не равен одному.
	if (dice !== 1) {
		roundScore += dice;
		document.querySelector('#current-' + activePlayer).textContent = roundScore; 
	}
	
	
// 4 Слкдующий игрок 	
	else{
		nextPlayer();
	}
}	
}); 	

document.querySelector('.btn-hold').addEventListener('click', function(){
if (gamePlaying) 
{
	// Добовлятсь текущий счет в глобальный счет.
	 scores[activePlayer] += roundScore;

	 // Обновить пользовательский интерфейс
	 document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
	 


	 if (scores[activePlayer] >= winScore){ 	 //Won the Game 
	 	document.getElementById('name-' + activePlayer).textContent = 'WINNER!';
	 	document.querySelector('.dice').style.display = "none";
	 	document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
	 	document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
	 	gamePlaying = false;

	 }
	 else{ nextPlayer(); }
}	 
})


function nextPlayer(){
	/*if*/ activePlayer === 0  ? /*then*/ activePlayer = 1 : /*else*/ activePlayer = 0;
		roundScore = 0; 

		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';

		

		// toggle : если его нет добовляет, если его есть уберает
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');

		document.querySelector('.dice').style.display = 'none';
}

	// New Game
document.querySelector('.btn-new').addEventListener('click', init)

document.querySelector('#ok-btn').addEventListener('click', winScr)
	


function init(){
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';
	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;
	document.querySelector('.dice').style.display = 'none';
	document.querySelector('#current-0').textContent = '0';
	document.querySelector('#current-1').textContent = '0';
	document.querySelector('#score-0').textContent = '0';
	document.querySelector('#score-1').textContent = '0';
 	document.querySelector('.player-0-panel').classList.remove('winner');
 	document.querySelector('.player-1-panel').classList.remove('winner');
 	document.querySelector('.player-0-panel').classList.remove('active');
 	document.querySelector('.player-1-panel').classList.remove('active');
 	document.querySelector('.player-0-panel').classList.add('active');
 	document.getElementById('set-score').style.display = "inline-block";
	document.getElementById('ok-btn').style.display = "inline-block";

}

function winScr(){
	winScore = document.getElementById('set-score').value;
	document.getElementById('set-score').style.display = "none";
	document.getElementById('ok-btn').style.display = "none";

	return winScore;
}