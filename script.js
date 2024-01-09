'use strict';

// selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const rest0 = document.querySelector('.rest0');
const rest1 = document.querySelector('.rest1');
const rest01 = document.querySelector('.rest01');
const rest11 = document.querySelector('.rest11');

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const score01El = document.getElementById('score--01');
const score11El = document.getElementById('score--11');

const name0 = document.getElementById('name--0');
const name1 = document.getElementById('name--1');
const name01 = document.getElementById('name--01');
const name11 = document.getElementById('name--11');

// Remaining
const remaining0 = document.getElementById('remaining--0');
const remaining1 = document.getElementById('remaining--1');
const remaining01 = document.getElementById('remaining--01');
const remaining11 = document.getElementById('remaining--11');

// mousce
const mousce1 = document.getElementById('mousce1');
const mousce2 = document.getElementById('mousce2');
const mousce3 = document.getElementById('mousce3');
const mousce4 = document.getElementById('mousce4');
const mousce5 = document.getElementById('mousce5');
const mousce6 = document.getElementById('mousce6');
const mousce7 = document.getElementById('mousce7');
const mousce8 = document.getElementById('mousce8');
const mousce9 = document.getElementById('mousce9');
const mousce10 = document.getElementById('mousce10');
const mousce11 = document.getElementById('mousce11');
const mousce12 = document.getElementById('mousce12');

// Cur Dice
const diceEl0 = document.getElementById('dice0');
const diceEl1 = document.getElementById('dice1');
const diceEl01 = document.getElementById('dice01');
const diceEl11 = document.getElementById('dice11');

const containerMovements = document.querySelector('.gameboard');

// btn
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Variable
let free,
  color0,
  color01,
  color11,
  color1,
  scores,
  currentdice,
  remaining0v,
  remaining1v,
  activePlayer,
  playinggame,
  dice0,
  dice01,
  a,
  counter000,
  counter0001,
  counter1111,
  counter111,
  remaining01v,
  remaining11v,
  dice1,
  dice11,
  power1,
  power0,
  power01,
  power11;

let vmousce1, vmousce2, vmousce3, vmousce4, vmousce5, vmousce6;
let vcmousce1, vcmousce2, vcmousce3, vcmousce4, vcmousce5, vcmousce6;
let vcmousce7, vcmousce8, vcmousce9, vcmousce10, vcmousce11, vcmousce12;
let vmousce7, vmousce8, vmousce9, vmousce10, vmousce11, vmousce12;
const red = [];
const blue = [];
const green = [];
const yellow = [];
const colorL = [blue, red, yellow, green];

//Can be added
// alert('Welcome to the new Ligretto Online game');
// alert(
//   'There are two players. How to play?:\n "a/$" to change card\n "q/p" to use the big card\n "s/à" to use a special card\n "y/é" to add a special card to the opponent'
// );
// const n000 = prompt('What is your name (player on the left)?');
// const n111 = prompt('What is your name (player on the left)?');
// name0.textContent = n000;
// name1.textContent = n111;


// functions
const randNumColor = function (varNumPlace, varNumColor, where) {
  varNumPlace = Math.floor(Math.random() * 6) + 1;
  varNumColor = Math.floor(Math.random() * 4) + 1;
  where.classList.remove(`Filter1`);
  where.classList.remove(`Filter2`);
  where.classList.remove(`Filter3`);
  where.classList.remove(`Filter4`);
  where.classList.add(`Filter${varNumColor}`);
  where.classList.remove('hidden');
  where.src = `dice-${varNumPlace}.png`;
};
const removingF = function (ccc, ddd, diceNum) {
  diceNum.classList.remove(`Filter1`);
  diceNum.classList.remove(`Filter2`);
  diceNum.classList.remove(`Filter3`);
  diceNum.classList.remove(`Filter4`);
  diceNum.classList.add(`Filter${ccc}`);
  diceNum.classList.remove('hidden');
  diceNum.src = `dice-${ddd}.png`;
};
const starterPack = function () {
  diceEl1.classList.add('hidden');
  diceEl0.classList.add('hidden');
  remaining0v = 10;
  remaining0.textContent = remaining0v;
  remaining1v = 10;
  remaining1.textContent = remaining1v;
  remaining01v = 10;
  remaining01.textContent = remaining01v;
  remaining11v = 10;
  remaining11.textContent = remaining11v;
  power1 = 0;
  power0 = 0;
  power01 = 0;
  power11 = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  score01El.textContent = 0;
  score11El.textContent = 0;
  a = 0;
};
const unlu = function () {
  const unlucky = Math.floor(Math.random() * 4) + 1;
  const audio = document.querySelector(`audio[data-key="68"]`);
  audio.play();
  switch (unlucky) {
    case 1:
      remaining0v++;
      remaining0.textContent = remaining0v;
      remaining0.classList.add('current-labels');
      remaining0.classList.remove('current-label');
      break;
    case 2:
      remaining11v++;
      remaining11.textContent = remaining11v;
      remaining11.classList.add('current-labels');
      remaining11.classList.remove('current-label');
      break;
    case 3:
      remaining1v++;
      remaining1.textContent = remaining1v;
      remaining1.classList.add('current-labels');
      remaining1.classList.remove('current-label');
      break;
    case 4:
      remaining01v++;
      remaining01.textContent = remaining01v;
      remaining01.classList.add('current-labels');
      remaining01.classList.remove('current-label');
      break;
  }
};
const endGame = function () {
  const audio = document.querySelector(`audio[data-key="72"]`);
  audio.play();
  diceEl1.classList.add('hidden');
  diceEl0.classList.add('hidden');
  diceEl11.classList.add('hidden');
  diceEl01.classList.add('hidden');
  for (let i = 1; i < a + 1; i++) {
    containerMovements.removeChild(document.getElementById(`D${i}`));
  }
  red.length = 0;
  blue.length = 0;
  yellow.length = 0;
  green.length = 0;
  console.log(colorL);
  a = 0;
};
const mixEvrth = function () {
  randNumColor(vmousce1, vcmousce1, mousce1);
  randNumColor(vmousce2, vcmousce2, mousce2);
  randNumColor(vmousce3, vcmousce3, mousce3);
  randNumColor(vmousce4, vcmousce4, mousce4);
  randNumColor(vmousce5, vcmousce5, mousce5);
  randNumColor(vmousce6, vcmousce6, mousce6);
  randNumColor(vmousce7, vcmousce7, mousce7);
  randNumColor(vmousce8, vcmousce8, mousce8);
  randNumColor(vmousce9, vcmousce9, mousce9);
  randNumColor(vmousce10, vcmousce10, mousce10);
  randNumColor(vmousce11, vcmousce11, mousce11);
  randNumColor(vmousce12, vcmousce12, mousce12);
};
const pushLikeABossFirstPart = function (dice, color) {
  console.log('pushLikeABossFirstPart');
  console.log(dice, color);

  switch (color) {
    case 1:
      blue.push(dice);
      break;
    case 2:
      red.push(dice);
      break;
    case 3:
      yellow.push(dice);
      break;
    case 4:
      green.push(dice);
      break;
  }
};
const pushLikeABoss = function (dice, color) {
  pushLikeABossFirstPart(dice, color);
  console.log('pushLikeABoss');
  console.log(dice, color);
};
const putTheBigWhenOne = function (dice, color) {
  a++;
  const html = `<img src="dice-${dice}.png" alt="Playing dice" class="diceM Filter${color} " id="D${a}"/> `;
  containerMovements.insertAdjacentHTML('beforeend', html);
  console.log(dice, color);

  pushLikeABoss(dice, color);
  return 0;
};
const newDiceAfterUseOfSpecial = function (
  count,
  vmousce7,
  vcmousce7,
  mousce7,
  vmousce8,
  vcmousce8,
  mousce8,
  vmousce9,
  vcmousce9,
  mousce9
) {
  switch (count) {
    case 1:
      randNumColor(vmousce7, vcmousce7, mousce7);
      break;
    case 2:
      randNumColor(vmousce8, vcmousce8, mousce8);
      break;
    case 3:
      randNumColor(vmousce9, vcmousce9, mousce9);
      break;
  }
};
const addToTheGameBoard = function (color1, dice1) {
  const audio = document.querySelector(`audio[data-key="70"]`);
  audio.play();
  const listColor = containerMovements.getElementsByClassName(
    `Filter${color1}`
  );
  for (const dice of listColor) {
    if (dice.getAttribute('src') === `dice-${dice1 - 1}.png`) {
      document.getElementById(
        dice.getAttribute('id')
      ).src = `dice-${dice1}.png`;
      break;
    }
  }
  const fct = e => e === dice1 - 1;
  colorL[color1 - 1].splice(colorL[color1 - 1].findIndex(fct), 1);
  pushLikeABoss(dice1, color1);
  return 0;
};
const special3NumWhenOne = function (
  remaining1v,
  remaining1,
  score1El,
  numSrc,
  numcol
) {
  const audio = document.querySelector(`audio[data-key="71"]`);
  audio.play();
  a++;
  const html = `<img src="dice-${numSrc}.png" alt="Playing dice" class="diceM Filter${numcol} " id="D${a}"/> `;
  containerMovements.insertAdjacentHTML('beforeend', html);
  pushLikeABossFirstPart(numSrc, numcol);
  remaining1v--;
  remaining1.textContent = remaining1v;
  if (remaining1v === 0) {
    score1El.textContent = 'Winner';
    endGame();
  }
};

//start parameters
mixEvrth();
starterPack();

document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key === 'y') {
    if (power0 === 0) {
      unlu();
      power0++;
    }
  }
  if (e.key === 'é') {
    if (power11 === 0) {
      unlu();
      power11++;
    }
  }
  if (e.key === 'g') {
    if (power01 === 0) {
      unlu();
      power01++;
    }
  }
  if (e.key === 'k') {
    if (power1 === 0) {
      unlu();
      power1++;
    }
  }
  if (e.key === 'm') {
    const audio = document.querySelector(`audio[data-key="65"]`);
    audio.play();
    dice1 = Math.floor(Math.random() * 6) + 1;
    color1 = Math.floor(Math.random() * 4) + 1;
    removingF(color1, dice1, diceEl1);
  } else if (e.key === 'a') {
    const audio = document.querySelector(`audio[data-key="65"]`);
    audio.play();
    dice0 = Math.floor(Math.random() * 6) + 1;
    color0 = Math.floor(Math.random() * 4) + 1;
    removingF(color0, dice0, diceEl0);
  } else if (e.key === 'v') {
    const audio = document.querySelector(`audio[data-key="65"]`);
    audio.play();
    dice01 = Math.floor(Math.random() * 6) + 1;
    color01 = Math.floor(Math.random() * 4) + 1;
    removingF(color01, dice01, diceEl01);
  } else if (e.key === '$') {
    const audio = document.querySelector(`audio[data-key="65"]`);
    audio.play();
    dice11 = Math.floor(Math.random() * 6) + 1;
    color11 = Math.floor(Math.random() * 4) + 1;
    removingF(color11, dice11, diceEl11);
  }

  if (dice1 === 1) {
    if (e.key === 'j') {
      const audio = document.querySelector(`audio[data-key="70"]`);
      audio.play();
      dice1 = putTheBigWhenOne(dice1, color1);
    }
  }
  if (dice11 === 1) {
    if (e.key === 'p') {
      const audio = document.querySelector(`audio[data-key="70"]`);
      audio.play();
      dice11 = putTheBigWhenOne(dice11, color11);
    }
  }
  if (dice0 === 1) {
    if (e.key === 'q') {
      const audio = document.querySelector(`audio[data-key="70"]`);
      audio.play();
      dice0 = putTheBigWhenOne(dice0, color0);
    }
  }
  if (dice01 === 1) {
    if (e.key === 'f') {
      const audio = document.querySelector(`audio[data-key="70"]`);
      audio.play();
      dice01 = putTheBigWhenOne(dice01, color01);
    }
  }
  if (color1 !== undefined) {
    if (colorL[color1 - 1].includes(dice1 - 1)) {
      if (e.key === 'j') {
        dice1 = addToTheGameBoard(color1, dice1);
      }
    }
  }
  if (color11 !== undefined) {
    if (colorL[color11 - 1].includes(dice11 - 1)) {
      if (e.key === 'p') {
        dice11 = addToTheGameBoard(color11, dice11);
      }
    }
  }
  if (color0 !== undefined) {
    if (colorL[color0 - 1].includes(dice0 - 1)) {
      if (e.key === 'q') {
        dice0 = addToTheGameBoard(color0, dice0);
      }
    }
  }
  if (color01 !== undefined) {
    if (colorL[color01 - 1].includes(dice01 - 1)) {
      if (e.key === 'f') {
        dice01 = addToTheGameBoard(color01, dice01);
      }
    }
  }
  if (e.key === 'n') {
    counter111 = 0;
    for (const o of rest1.children) {
      counter111++;
      const goodSrc = o.src.split('/').pop();
      const numSrc = Number(goodSrc.split('-')[1].split('.')[0]);
      const colorMous = o.classList[1];
      const numcol = Number(colorMous[colorMous.length - 1]);
      if (numSrc === 1) {
        special3NumWhenOne(remaining1v, remaining1, score1El, numSrc, numcol);
        newDiceAfterUseOfSpecial(
          counter111,
          vmousce4,
          vcmousce4,
          mousce4,
          vmousce5,
          vcmousce5,
          mousce5,
          vmousce6,
          vcmousce6,
          mousce6
        );
        break;
      } else if (colorL[numcol - 1].includes(numSrc - 1)) {
        const audio = document.querySelector(`audio[data-key="71"]`);
        audio.play();
        const listColor = containerMovements.getElementsByClassName(
          `Filter${numcol}`
        );
        for (const dice of listColor) {
          if (dice.src.split('/').pop() === `dice-${numSrc - 1}.png`) {
            document.getElementById(
              dice.getAttribute('id')
            ).src = `dice-${numSrc}.png`;
            break;
          }
        }
        const fct = e => e === numSrc - 1;
        colorL[numcol - 1].splice(colorL[numcol - 1].findIndex(fct), 1);
        pushLikeABossFirstPart(numSrc, numcol);
        remaining1v--;
        remaining1.textContent = remaining1v;
        if (remaining1v === 0) {
          score1El.textContent = 'Winner';
          endGame();
        }
        newDiceAfterUseOfSpecial(
          counter111,
          vmousce4,
          vcmousce4,
          mousce4,
          vmousce5,
          vcmousce5,
          mousce5,
          vmousce6,
          vcmousce6,
          mousce6
        );
        break;
      }
    }
  }
  if (e.key === 'à') {
    counter1111 = 0;
    for (const o of rest11.children) {
      counter1111++;
      const goodSrc = o.src.split('/').pop();
      const numSrc = Number(goodSrc.split('-')[1].split('.')[0]);
      const colorMous = o.classList[1];
      const numcol = Number(colorMous[colorMous.length - 1]);
      if (numSrc === 1) {
        special3NumWhenOne(
          remaining11v,
          remaining11,
          score11El,
          numSrc,
          numcol
        );
        newDiceAfterUseOfSpecial(
          counter1111,
          vmousce10,
          vcmousce10,
          mousce10,
          vmousce11,
          vcmousce11,
          mousce11,
          vmousce12,
          vcmousce12,
          mousce12
        );

        break;
      } else if (colorL[numcol - 1].includes(numSrc - 1)) {
        const audio = document.querySelector(`audio[data-key="71"]`);
        audio.play();

        const listColor = containerMovements.getElementsByClassName(
          `Filter${numcol}`
        );
        for (const dice of listColor) {
          if (dice.src.split('/').pop() === `dice-${numSrc - 1}.png`) {
            document.getElementById(
              dice.getAttribute('id')
            ).src = `dice-${numSrc}.png`;
            break;
          }
        }
        const fct = e => e === numSrc - 1;
        colorL[numcol - 1].splice(colorL[numcol - 1].findIndex(fct), 1);

        pushLikeABossFirstPart(numSrc, numcol);
        remaining11v--;
        remaining11.textContent = remaining11v;

        if (remaining11v === 0) {
          score11El.textContent = 'Winner';
          endGame();
        }
        newDiceAfterUseOfSpecial(
          counter1111,
          vmousce10,
          vcmousce10,
          mousce10,
          vmousce11,
          vcmousce11,
          mousce11,
          vmousce12,
          vcmousce12,
          mousce12
        );
        break;
      }
    }
  }
  if (e.key === 's') {
    counter000 = 0;
    for (const o of rest0.children) {
      counter000++;
      const goodSrc = o.src.split('/').pop();
      const numSrc = Number(goodSrc.split('-')[1].split('.')[0]);
      const colorMous = o.classList[1];
      const numcol = Number(colorMous[colorMous.length - 1]);
      if (numSrc === 1) {
        special3NumWhenOne(remaining0v, remaining0, score0El, numSrc, numcol);
        newDiceAfterUseOfSpecial(
          counter000,
          vmousce1,
          vcmousce1,
          mousce1,
          vmousce2,
          vcmousce2,
          mousce2,
          vmousce3,
          vcmousce3,
          mousce3
        );
        break;
      } else if (colorL[numcol - 1].includes(numSrc - 1)) {
        const audio = document.querySelector(`audio[data-key="71"]`);
        audio.play();
        const listColor = containerMovements.getElementsByClassName(
          `Filter${numcol}`
        );
        for (const dice of listColor) {
          if (dice.src.split('/').pop() === `dice-${numSrc - 1}.png`) {
            document.getElementById(
              dice.getAttribute('id')
            ).src = `dice-${numSrc}.png`;
            break;
          }
        }
        const fct = e => e === numSrc - 1;
        colorL[numcol - 1].splice(colorL[numcol - 1].findIndex(fct), 1);

        pushLikeABossFirstPart(numSrc, numcol);
        remaining0v--;
        remaining0.textContent = remaining0v;
        if (remaining0v === 0) {
          score0El.textContent = 'Winner';
          endGame();
        }

        newDiceAfterUseOfSpecial(
          counter000,
          vmousce1,
          vcmousce1,
          mousce1,
          vmousce2,
          vcmousce2,
          mousce2,
          vmousce3,
          vcmousce3,
          mousce3
        );
        break;
      }
    }
  }
  if (e.key === 'c') {
    counter0001 = 0;
    for (const o of rest01.children) {
      counter0001++;
      const goodSrc = o.src.split('/').pop();
      const numSrc = Number(goodSrc.split('-')[1].split('.')[0]);
      const colorMous = o.classList[1];
      const numcol = Number(colorMous[colorMous.length - 1]);
      if (numSrc === 1) {
        special3NumWhenOne(
          remaining01v,
          remaining01,
          score01El,
          numSrc,
          numcol
        );
        newDiceAfterUseOfSpecial(
          counter0001,
          vmousce7,
          vcmousce7,
          mousce7,
          vmousce8,
          vcmousce8,
          mousce8,
          vmousce9,
          vcmousce9,
          mousce9
        );

        break;
      } else if (colorL[numcol - 1].includes(numSrc - 1)) {
        const audio = document.querySelector(`audio[data-key="71"]`);
        audio.play();
        const listColor = containerMovements.getElementsByClassName(
          `Filter${numcol}`
        );
        for (const dice of listColor) {
          if (dice.src.split('/').pop() === `dice-${numSrc - 1}.png`) {
            document.getElementById(
              dice.getAttribute('id')
            ).src = `dice-${numSrc}.png`;
            break;
          }
        }
        const fct = e => e === numSrc - 1;
        colorL[numcol - 1].splice(colorL[numcol - 1].findIndex(fct), 1);

        pushLikeABossFirstPart(numSrc, numcol);
        remaining01v--;
        remaining01.textContent = remaining01v;
        if (remaining01v === 0) {
          score01El.textContent = 'Winner';
          endGame();
        }

        newDiceAfterUseOfSpecial(
          counter0001,
          vmousce7,
          vcmousce7,
          mousce7,
          vmousce8,
          vcmousce8,
          mousce8,
          vmousce9,
          vcmousce9,
          mousce9
        );
        break;
      }
    }
  }
});

btnRoll.addEventListener('click', function () {
  const audio = document.querySelector(`audio[data-key="74"]`);
  audio.play();
  remaining0v = Math.floor(Math.random() * 6) + 3;
  remaining0.textContent = remaining0v;
  remaining1v = Math.floor(Math.random() * 6) + 3;
  remaining1.textContent = remaining1v;
  remaining01v = Math.floor(Math.random() * 6) + 3;
  remaining01.textContent = remaining01v;
  remaining11v = Math.floor(Math.random() * 6) + 3;
  remaining11.textContent = remaining11v;
});

btnNew.addEventListener('click', function () {
  diceEl1.classList.add('hidden');
  diceEl0.classList.add('hidden');
  
  mixEvrth();
  
  remaining0.classList.remove('current-labels');
  remaining0.classList.add('current-label');

  remaining11.classList.remove('current-labels');
  remaining11.classList.add('current-label');

  remaining1.classList.remove('current-labels');
  remaining1.classList.add('current-label');

  remaining01.classList.remove('current-labels');
  remaining01.classList.add('current-label');

  endGame();
  starterPack();
});

btnHold.addEventListener('click', function () {
  const audio = document.querySelector(`audio[data-key="73"]`);
  audio.play();
  mixEvrth();
});
