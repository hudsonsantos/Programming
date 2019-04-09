// Projeto - Pig Dice Game

/*

Regras do Jogo

- O jogo tem 2 jogadores, jogando em rodadas.
- Em cada rodada, um jogador joga um dado quantas vezes quiser. Cada resultado é adicionado à sua pontuação.
- Mas, se o jogador obtiver o valor 1 ao jogar o dado, toda a sua pontuação será perdida naquela rodada. Depois disso, é a vez do próximo jogador.
- O jogador pode optar por 'Passar a vez', o que significa que sua pontuação atual é adicionada à sua pontuação global. Depois disso, é a vez do próximo jogador.
- O primeiro jogador a atingir 100 pontos na pontuação global vence o jogo.

*/

var scores, roundScore, activePlayer;


init();

//document.querySelector('#current-' + activePlayer).textContent = dice;

//document.querySelector('.dice').style.display = 'none';


 document.querySelector('.btn-new').addEventListener('click', init);

 function init(){
 	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
 }      
;

document.querySelector('.dice').style.display = 'none';

        // jogar dado
document.querySelector('.btn-roll').addEventListener('click', function(){

	// 1- Número randômico 
        var dice = Math.floor(Math.random() * 6) + 1;

     	document.querySelector('#current-' + activePlayer).textContent = dice;


    // mostra resultado
    	var diceDOM = document.querySelector('.dice');
    	diceDOM.style.display = 'block';
    	diceDOM.src = 'dice-' + dice + '.png';
        
    // Atualiza rodada se não for 1
    	if ( dice !== 1 ){
    		roundScore += dice;
    		document.querySelector('#current-'+ activePlayer).textContent = roundScore;
    	} else {
    		nextPlayer();
    	}


        })
;



function nextPlayer(){


	activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-'+ activePlayer).textContent = '0';

    //document.querySelector('.player-'+activePlayer+'-panel').classList.toggle('active')
	document.querySelector('.player-0-panel').classList.toggle('active')
	document.querySelector('.player-1-panel').classList.toggle('active')

    //document.querySelector('.dice').style.display = 'none';
};