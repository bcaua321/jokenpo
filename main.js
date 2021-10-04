const paper = document.getElementById("input-papel");
const stone = document.getElementById("input-pedra");
const scissors = document.getElementById("input-tesoura");
const result = document.getElementById("imgs");

// Events to capture input 
function captureInput(){
  let input; 
  let computer;
  
  paper.addEventListener('click', ()=>{
    computer = computerChoice();
    input = paper.value;
    console.log('Your choice: ' + input);
    winLost(input, computer);
  });

  stone.addEventListener('click', ()=>{
    computer = computerChoice();
    input = stone.value;
    console.log('Your choice: ' + input);
    winLost(input, computer);
  });

  scissors.addEventListener('click', ()=>{
    computer = computerChoice();
    input = scissors.value;
    console.log('Your choice: ' + input);
    winLost(input, computer);
  });
  
}
captureInput();

// To verify computer choice
function computerChoice(){
  const jokenpo = ['stone', 'paper', 'scissors'];
  let a = Math.floor(Math.random() * (2 - 0 + 1) + 0);
  return jokenpo[a];
}

// To verify the winner and change the images
function winLost(user, comp){
  const userInput = document.getElementById('user');
  const compInput = document.getElementById('comp');
  const winLost = document.getElementById('win-lost'); 

  result.classList.remove('nothing');
  document.getElementById('versus').src = './imgs/vs_1.png';
  document.getElementById('equal').src = './imgs/equal.png';

  if (user === comp) { 
    userInput.src = '';
    compInput.src = '';

    document.getElementById('versus').src = '';
    document.getElementById('equal').src = '';
    winLost.src = './imgs/draw.png';
    return;
  } 
  
  if (user === 'stone'){
    userInput.src = './imgs/stones_1.png';
    if (comp === 'scissors'){
      compInput.src = './imgs/scissors2.png';
      winLost.src = './imgs/win.png';
      return;
    } else if (comp === 'paper'){
      compInput.src = './imgs/text-document.png';
      winLost.src = './imgs/game-over_3.png';
      return;
    }
  } 
  
  if (user === 'paper'){
    userInput.src = './imgs/text-document.png';
    if (comp === 'scissors'){
      compInput.src = './imgs/scissors2.png';
      winLost.src = './imgs/game-over_3.png';
      return;
    } else if (comp === 'stone'){
      compInput.src = './imgs/stones_1.png';
      winLost.src = './imgs/win.png';
      return;
    }
  }
  
  if (user === 'scissors'){
    userInput.src = './imgs/scissors2.png';
    if (comp === 'paper'){
      compInput.src = './imgs/text-document.png';
      winLost.src = './imgs/win.png';
      return;
    } else if (comp === 'stone'){
      compInput.src = './imgs/stones_1.png';
      winLost.src = './imgs/game-over_3.png';
      return;
    }
  }
}

// function colorWin(verify){
//   const winlost = document.getElementById("result");
//   if(verify){ 
//     winlost.classList.add('green');
//   } 
//     winlost.classList.add('red');
  
//     return;
// }