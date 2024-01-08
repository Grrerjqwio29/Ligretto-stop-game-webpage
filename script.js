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
// const mousce7 = document.getElementById('mousce7');
// const mousce8 = document.getElementById('mousce8');
// const mousce9 = document.getElementById('mousce9');

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

// function

// Starting condition
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
  dice11;
remaining0v = 10;
remaining01v = 10;
remaining1v = 10;
remaining11v = 10;
let vmousce1, vmousce2, vmousce3, vmousce4, vmousce5, vmousce6;
let vcmousce1, vcmousce2, vcmousce3, vcmousce4, vcmousce5, vcmousce6;
let vcmousce7, vcmousce8, vcmousce9, vcmousce10, vcmousce11, vcmousce12;
let vmousce7, vmousce8, vmousce9, vmousce10, vmousce11, vmousce12;
const red = [];
const blue = [];
const green = [];
const yellow = [];
const colorL = [blue, red, yellow, green];

free = 1;
a = 0;
let power1 = 0;
let power0 = 0;
let power01 = 0;
let power11 = 0;

//
//
//
//
//
//
//
// alert('Welcome to the new Ligretto Online game');
// alert(
//   'There are two players. How to play?:\n "a/$" to change card\n "q/p" to use the big card\n "s/à" to use a special card\n "y/é" to add a special card to the opponent'
// );
// const n000 = prompt('What is your name (player on the left)?');
// const n111 = prompt('What is your name (player on the left)?');
// name0.textContent = n000;
// name1.textContent = n111;

const randNumColor = function (varNumPlace, varNumColor, where) {
  console.log('rand');
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

const unlu = function () {
  const unlucky = Math.floor(Math.random() * 4) + 1;
  console.log(unlucky);
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
    console.log(document.getElementById(`D${i}`));
    containerMovements.removeChild(document.getElementById(`D${i}`));
  }
  red.length = 0;
  blue.length = 0;
  yellow.length = 0;
  green.length = 0;
  console.log(colorL);
  a = 0;
};
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
    diceEl1.classList.remove(`Filter1`);
    diceEl1.classList.remove(`Filter2`);
    diceEl1.classList.remove(`Filter3`);
    diceEl1.classList.remove(`Filter4`);

    diceEl1.classList.add(`Filter${color1}`);
    diceEl1.classList.remove('hidden');
    diceEl1.src = `dice-${dice1}.png`;
  } else if (e.key === 'a') {
    const audio = document.querySelector(`audio[data-key="65"]`);
    audio.play();
    dice0 = Math.floor(Math.random() * 6) + 1;
    color0 = Math.floor(Math.random() * 4) + 1;
    diceEl0.classList.remove(`Filter1`);
    diceEl0.classList.remove(`Filter2`);
    diceEl0.classList.remove(`Filter3`);
    diceEl0.classList.remove(`Filter4`);
    diceEl0.classList.add(`Filter${color0}`);
    diceEl0.classList.remove('hidden');
    diceEl0.src = `dice-${dice0}.png`;
  } else if (e.key === 'v') {
    const audio = document.querySelector(`audio[data-key="65"]`);
    audio.play();
    dice01 = Math.floor(Math.random() * 6) + 1;
    color01 = Math.floor(Math.random() * 4) + 1;
    diceEl01.classList.remove(`Filter1`);
    diceEl01.classList.remove(`Filter2`);
    diceEl01.classList.remove(`Filter3`);
    diceEl01.classList.remove(`Filter4`);
    diceEl01.classList.add(`Filter${color01}`);
    diceEl01.classList.remove('hidden');
    diceEl01.src = `dice-${dice01}.png`;
  } else if (e.key === '$') {
    const audio = document.querySelector(`audio[data-key="65"]`);
    audio.play();
    dice11 = Math.floor(Math.random() * 6) + 1;
    color11 = Math.floor(Math.random() * 4) + 1;
    diceEl11.classList.remove(`Filter1`);
    diceEl11.classList.remove(`Filter2`);
    diceEl11.classList.remove(`Filter3`);
    diceEl11.classList.remove(`Filter4`);
    diceEl11.classList.add(`Filter${color11}`);
    diceEl11.classList.remove('hidden');
    diceEl11.src = `dice-${dice11}.png`;
  }

  if (dice1 === 1) {
    if (e.key === 'j') {
      const audio = document.querySelector(`audio[data-key="70"]`);
      audio.play();
      console.log('zouzou');
      a++;
      console.log('drdrdrdrdr');
      const html = `<img src="dice-${dice1}.png" alt="Playing dice" class="diceM Filter${color1} " id="D${a}"/> `;
      containerMovements.insertAdjacentHTML('beforeend', html);
      console.log('drdrdrdrdr');

      switch (color1) {
        case 1:
          blue.push(dice1);
          break;
        case 2:
          red.push(dice1);
          break;
        case 3:
          yellow.push(dice1);
          break;
        case 4:
          green.push(dice1);
          break;
      }
      dice1 = 0;
    }
  }
  if (dice11 === 1) {
    if (e.key === 'p') {
      const audio = document.querySelector(`audio[data-key="70"]`);
      audio.play();
      console.log('zouzou');
      a++;
      console.log('drdrdrdrdr');
      const html = `<img src="dice-${dice11}.png" alt="Playing dice" class="diceM Filter${color11} " id="D${a}"/> `;
      containerMovements.insertAdjacentHTML('beforeend', html);
      console.log('drdrdrdrdr');

      switch (color11) {
        case 1:
          blue.push(dice11);
          break;
        case 2:
          red.push(dice11);
          break;
        case 3:
          yellow.push(dice11);
          break;
        case 4:
          green.push(dice11);
          break;
      }
      dice11 = 0;
    }
  }
  if (dice0 === 1) {
    if (e.key === 'q') {
      const audio = document.querySelector(`audio[data-key="70"]`);
      audio.play();
      a++;
      const html = `<img src="dice-${dice0}.png" alt="Playing dice" class="diceM Filter${color0} " id="D${a}"/> `;
      containerMovements.insertAdjacentHTML('beforeend', html);

      switch (color0) {
        case 1:
          blue.push(dice0);
          break;
        case 2:
          red.push(dice0);
          break;
        case 3:
          yellow.push(dice0);
          break;
        case 4:
          green.push(dice0);
          break;
      }
      dice0 = 0;
    }
  }
  if (dice01 === 1) {
    if (e.key === 'f') {
      const audio = document.querySelector(`audio[data-key="70"]`);
      audio.play();
      a++;
      const html = `<img src="dice-${dice01}.png" alt="Playing dice" class="diceM Filter${color01} " id="D${a}"/> `;
      containerMovements.insertAdjacentHTML('beforeend', html);

      switch (color01) {
        case 1:
          blue.push(dice01);
          break;
        case 2:
          red.push(dice01);
          break;
        case 3:
          yellow.push(dice01);
          break;
        case 4:
          green.push(dice01);
          break;
      }
      dice01 = 0;
    }
  }
  if (color1 !== undefined) {
    if (colorL[color1 - 1].includes(dice1 - 1)) {
      if (e.key === 'j') {
        const audio = document.querySelector(`audio[data-key="70"]`);
        audio.play();
        console.log('zouzouiiiiiii');
        const listColor = containerMovements.getElementsByClassName(
          `Filter${color1}`
        );
        console.log(listColor, 'listCCCC');
        for (const dice of listColor) {
          console.log(dice, 'dice');
          console.log(dice1, 'dice1');
          console.log(document.getElementById(dice.getAttribute('id')));
          console.log(dice.src === `dice-${dice1 - 1}.png`, 'dice');
          console.log(
            dice.src,
            `dice-${dice1 - 1}.png`,
            dice.getAttribute('src')
          );
          if (dice.getAttribute('src') === `dice-${dice1 - 1}.png`) {
            document.getElementById(
              dice.getAttribute('id')
            ).src = `dice-${dice1}.png`;
            break;
          }
        }
        const fct = e => e === dice1 - 1;
        colorL[color1 - 1].splice(colorL[color1 - 1].findIndex(fct), 1);

        switch (color1) {
          case 1:
            blue.push(dice1);
            break;
          case 2:
            red.push(dice1);
            break;
          case 3:
            yellow.push(dice1);
            break;
          case 4:
            green.push(dice1);
            break;
        }
        dice1 = 0;
        // remaining1v--;
        // remaining1.textContent = remaining1v;
      }
    }
  }
  if (color11 !== undefined) {
    if (colorL[color11 - 1].includes(dice11 - 1)) {
      if (e.key === 'p') {
        const audio = document.querySelector(`audio[data-key="70"]`);
        audio.play();
        console.log('zouzouiiiiiii');
        const listColor = containerMovements.getElementsByClassName(
          `Filter${color11}`
        );
        console.log(listColor, 'listCCCC');
        for (const dice of listColor) {
          console.log(dice, 'dice');
          console.log(dice1, 'dice1');
          console.log(document.getElementById(dice.getAttribute('id')));
          console.log(dice.src === `dice-${dice1 - 1}.png`, 'dice');
          console.log(
            dice.src,
            `dice-${dice11 - 1}.png`,
            dice.getAttribute('src')
          );
          if (dice.getAttribute('src') === `dice-${dice11 - 1}.png`) {
            document.getElementById(
              dice.getAttribute('id')
            ).src = `dice-${dice11}.png`;
            break;
          }
        }
        const fct = e => e === dice11 - 1;
        colorL[color11 - 1].splice(colorL[color11 - 1].findIndex(fct), 1);

        switch (color11) {
          case 1:
            blue.push(dice11);
            break;
          case 2:
            red.push(dice11);
            break;
          case 3:
            yellow.push(dice11);
            break;
          case 4:
            green.push(dice11);
            break;
        }
        dice11 = 0;
        // remaining1v--;
        // remaining1.textContent = remaining1v;
      }
    }
  }
  if (color0 !== undefined) {
    if (colorL[color0 - 1].includes(dice0 - 1)) {
      if (e.key === 'q') {
        const audio = document.querySelector(`audio[data-key="70"]`);
        audio.play();
        console.log('zouzou');
        const listColor = containerMovements.getElementsByClassName(
          `Filter${color0}`
        );
        console.log(listColor);
        for (const dice of listColor) {
          console.log(dice);
          if (dice.getAttribute('src') === `dice-${dice0 - 1}.png`) {
            document.getElementById(
              dice.getAttribute('id')
            ).src = `dice-${dice0}.png`;
            break;
          }
        }
        const fct = e => e === dice0 - 1;
        colorL[color0 - 1].splice(colorL[color0 - 1].findIndex(fct), 1);
        switch (color0) {
          case 1:
            blue.push(dice0);
            break;
          case 2:
            red.push(dice0);
            break;
          case 3:
            yellow.push(dice0);
            break;
          case 4:
            green.push(dice0);
            break;
        }
        dice0 = 0;
        // remaining0v--;
        // remaining0.textContent = remaining0v;
      }
    }
  }
  if (color01 !== undefined) {
    if (colorL[color01 - 1].includes(dice01 - 1)) {
      if (e.key === 'f') {
        const audio = document.querySelector(`audio[data-key="70"]`);
        audio.play();
        console.log('zouzou');
        const listColor = containerMovements.getElementsByClassName(
          `Filter${color01}`
        );
        console.log(listColor);
        for (const dice of listColor) {
          console.log(dice);
          if (dice.getAttribute('src') === `dice-${dice01 - 1}.png`) {
            document.getElementById(
              dice.getAttribute('id')
            ).src = `dice-${dice01}.png`;
            break;
          }
        }
        const fct = e => e === dice01 - 1;
        colorL[color01 - 1].splice(colorL[color01 - 1].findIndex(fct), 1);
        switch (color01) {
          case 1:
            blue.push(dice01);
            break;
          case 2:
            red.push(dice01);
            break;
          case 3:
            yellow.push(dice01);
            break;
          case 4:
            green.push(dice01);
            break;
        }
        dice01 = 0;
        // remaining0v--;
        // remaining0.textContent = remaining0v;
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
      console.log(numSrc, goodSrc);
      if (numSrc === 1) {
        const audio = document.querySelector(`audio[data-key="71"]`);
        audio.play();
        a++;
        const html = `<img src="dice-${numSrc}.png" alt="Playing dice" class="diceM Filter${numcol} " id="D${a}"/> `;
        containerMovements.insertAdjacentHTML('beforeend', html);

        switch (numcol) {
          case 1:
            blue.push(numSrc);
            break;
          case 2:
            red.push(numSrc);
            break;
          case 3:
            yellow.push(numSrc);
            break;
          case 4:
            green.push(numSrc);
            break;
        }
        remaining1v--;
        remaining1.textContent = remaining1v;
        if (remaining1v === 0) {
          score1El.textContent = 'Winner';
          endGame();
        }
        switch (counter111) {
          case 1:
            randNumColor(vmousce4, vcmousce4, mousce4);
            break;
          case 2:
            randNumColor(vmousce5, vcmousce5, mousce5);
            break;
          case 3:
            randNumColor(vmousce6, vcmousce6, mousce6);
            break;
        }
        break;
      }
      if (colorL[numcol - 1].includes(numSrc - 1)) {
        const audio = document.querySelector(`audio[data-key="71"]`);
        audio.play();
        console.log('zouzou');
        const listColor = containerMovements.getElementsByClassName(
          `Filter${numcol}`
        );
        console.log(listColor);
        for (const dice of listColor) {
          console.log(dice);
          if ((dice.src = `dice-${numSrc - 1}.png`)) {
            document.getElementById(
              dice.getAttribute('id')
            ).src = `dice-${numSrc}.png`;
            break;
          }
        }
        const fct = e => e === numSrc - 1;
        colorL[numcol - 1].splice(colorL[numcol - 1].findIndex(fct), 1);

        switch (numcol) {
          case 1:
            blue.push(numSrc);
            break;
          case 2:
            red.push(numSrc);
            break;
          case 3:
            yellow.push(numSrc);
            break;
          case 4:
            green.push(numSrc);
            break;
        }
        remaining1v--;
        console.log(remaining1.textContent);
        remaining1.textContent = remaining1v;
        console.log(remaining1.textContent);
        console.log(remaining1v);
        if (remaining1v === 0) {
          score1El.textContent = 'Winner';
          endGame();
        }
        switch (counter111) {
          case 1:
            randNumColor(vmousce4, vcmousce4, mousce4);
            break;
          case 2:
            randNumColor(vmousce5, vcmousce5, mousce5);
            break;
          case 3:
            randNumColor(vmousce6, vcmousce6, mousce6);
            break;
        }
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
      console.log(numSrc, goodSrc);
      if (numSrc === 1) {
        const audio = document.querySelector(`audio[data-key="71"]`);
        audio.play();
        a++;
        const html = `<img src="dice-${numSrc}.png" alt="Playing dice" class="diceM Filter${numcol} " id="D${a}"/> `;
        containerMovements.insertAdjacentHTML('beforeend', html);

        switch (numcol) {
          case 1:
            blue.push(numSrc);
            break;
          case 2:
            red.push(numSrc);
            break;
          case 3:
            yellow.push(numSrc);
            break;
          case 4:
            green.push(numSrc);
            break;
        }
        remaining11v--;
        remaining11.textContent = remaining11v;
        if (remaining11v === 0) {
          score11El.textContent = 'Winner';
          endGame();
        }
        switch (counter1111) {
          case 1:
            randNumColor(vmousce10, vcmousce10, mousce10);
            break;
          case 2:
            randNumColor(vmousce11, vcmousce11, mousce11);
            break;
          case 3:
            randNumColor(vmousce12, vcmousce12, mousce12);
            break;
        }
        break;
      }
      if (colorL[numcol - 1].includes(numSrc - 1)) {
        const audio = document.querySelector(`audio[data-key="71"]`);
        audio.play();
        console.log('zouzou');
        const listColor = containerMovements.getElementsByClassName(
          `Filter${numcol}`
        );
        console.log(listColor);
        for (const dice of listColor) {
          console.log(dice);
          if ((dice.src = `dice-${numSrc - 1}.png`)) {
            document.getElementById(
              dice.getAttribute('id')
            ).src = `dice-${numSrc}.png`;
            break;
          }
        }
        const fct = e => e === numSrc - 1;
        colorL[numcol - 1].splice(colorL[numcol - 1].findIndex(fct), 1);

        switch (numcol) {
          case 1:
            blue.push(numSrc);
            break;
          case 2:
            red.push(numSrc);
            break;
          case 3:
            yellow.push(numSrc);
            break;
          case 4:
            green.push(numSrc);
            break;
        }
        remaining11v--;
        remaining11.textContent = remaining11v;

        if (remaining11v === 0) {
          score11El.textContent = 'Winner';
          endGame();
        }
        switch (counter1111) {
          case 1:
            randNumColor(vmousce10, vcmousce10, mousce10);
            break;
          case 2:
            randNumColor(vmousce11, vcmousce11, mousce11);
            break;
          case 3:
            randNumColor(vmousce12, vcmousce12, mousce12);
            break;
        }
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
      console.log(numSrc, goodSrc);
      if (numSrc === 1) {
        const audio = document.querySelector(`audio[data-key="71"]`);
        audio.play();
        a++;
        const html = `<img src="dice-${numSrc}.png" alt="Playing dice" class="diceM Filter${numcol} " id="D${a}"/> `;
        containerMovements.insertAdjacentHTML('beforeend', html);

        switch (numcol) {
          case 1:
            blue.push(numSrc);
            break;
          case 2:
            red.push(numSrc);
            break;
          case 3:
            yellow.push(numSrc);
            break;
          case 4:
            green.push(numSrc);
            break;
        }
        remaining0v--;
        remaining0.textContent = remaining0v;
        if (remaining0v === 0) {
          score0El.textContent = 'Winner';
          endGame();
        }
        switch (counter000) {
          case 1:
            randNumColor(vmousce1, vcmousce1, mousce1);
            break;
          case 2:
            randNumColor(vmousce2, vcmousce2, mousce2);
            break;
          case 3:
            randNumColor(vmousce3, vcmousce3, mousce3);
            break;
        }
        break;
      }
      if (colorL[numcol - 1].includes(numSrc - 1)) {
        const audio = document.querySelector(`audio[data-key="71"]`);
        audio.play();
        console.log('zouzou');
        const listColor = containerMovements.getElementsByClassName(
          `Filter${numcol}`
        );
        console.log(listColor);
        for (const dice of listColor) {
          console.log(dice);
          if ((dice.src = `dice-${numSrc - 1}.png`)) {
            document.getElementById(
              dice.getAttribute('id')
            ).src = `dice-${numSrc}.png`;
            break;
          }
        }
        const fct = e => e === numSrc - 1;
        colorL[numcol - 1].splice(colorL[numcol - 1].findIndex(fct), 1);

        switch (numcol) {
          case 1:
            blue.push(numSrc);
            break;
          case 2:
            red.push(numSrc);
            break;
          case 3:
            yellow.push(numSrc);
            break;
          case 4:
            green.push(numSrc);
            break;
        }
        remaining0v--;
        remaining0.textContent = remaining0v;
        if (remaining0v === 0) {
          score0El.textContent = 'Winner';
          endGame();
        }

        switch (counter000) {
          case 1:
            randNumColor(vmousce1, vcmousce1, mousce1);
            break;
          case 2:
            randNumColor(vmousce2, vcmousce2, mousce2);
            break;
          case 3:
            randNumColor(vmousce3, vcmousce3, mousce3);
            break;
        }
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
      console.log(numSrc, goodSrc);
      if (numSrc === 1) {
        const audio = document.querySelector(`audio[data-key="71"]`);
        audio.play();
        a++;
        const html = `<img src="dice-${numSrc}.png" alt="Playing dice" class="diceM Filter${numcol} " id="D${a}"/> `;
        containerMovements.insertAdjacentHTML('beforeend', html);

        switch (numcol) {
          case 1:
            blue.push(numSrc);
            break;
          case 2:
            red.push(numSrc);
            break;
          case 3:
            yellow.push(numSrc);
            break;
          case 4:
            green.push(numSrc);
            break;
        }
        remaining01v--;
        remaining01.textContent = remaining01v;
        if (remaining01v === 0) {
          score01El.textContent = 'Winner';
          endGame();
        }
        switch (counter0001) {
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
        break;
      }
      if (colorL[numcol - 1].includes(numSrc - 1)) {
        const audio = document.querySelector(`audio[data-key="71"]`);
        audio.play();
        console.log('zouzou');
        const listColor = containerMovements.getElementsByClassName(
          `Filter${numcol}`
        );
        console.log(listColor);
        for (const dice of listColor) {
          console.log(dice);
          if ((dice.src = `dice-${numSrc - 1}.png`)) {
            document.getElementById(
              dice.getAttribute('id')
            ).src = `dice-${numSrc}.png`;
            break;
          }
        }
        const fct = e => e === numSrc - 1;
        colorL[numcol - 1].splice(colorL[numcol - 1].findIndex(fct), 1);

        switch (numcol) {
          case 1:
            blue.push(numSrc);
            break;
          case 2:
            red.push(numSrc);
            break;
          case 3:
            yellow.push(numSrc);
            break;
          case 4:
            green.push(numSrc);
            break;
        }
        remaining01v--;
        remaining01.textContent = remaining01v;
        if (remaining01v === 0) {
          score01El.textContent = 'Winner';
          endGame();
        }

        switch (counter0001) {
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
      }
    }
  }
  console.log(colorL);
});

//
//
//
//
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
  remaining0v = 10;
  remaining0.textContent = remaining0v;
  remaining1v = 10;
  remaining1.textContent = remaining1v;
  remaining01v = 10;
  remaining01.textContent = remaining01v;
  remaining11v = 10;
  remaining11.textContent = remaining11v;
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
  remaining0.classList.remove('current-labels');
  remaining0.classList.add('current-label');

  remaining11.classList.remove('current-labels');
  remaining11.classList.add('current-label');

  remaining1.classList.remove('current-labels');
  remaining1.classList.add('current-label');

  remaining01.classList.remove('current-labels');
  remaining01.classList.add('current-label');
  power1 = 0;
  power0 = 0;
  power01 = 0;
  power11 = 0;
  score0El.textContent = '0';
  score1El.textContent = '0';
  score01El.textContent = '0';
  score11El.textContent = '0';
  endGame();
  score0El.textContent = '0';
  score1El.textContent = '0';
  score01El.textContent = '0';
  score11El.textContent = '0';
});

//
btnHold.addEventListener('click', function () {
  const audio = document.querySelector(`audio[data-key="73"]`);
  audio.play();
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
});

//
// settingthegame();
// btnRoll.addEventListener('click', function () {
//   if (playinggame) {
//     // Generate a random dice roll
//     const dice = Math.floor(Math.random() * 6) + 1;
//     // Display dice
//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;
//     // Check if not one,  if true next player
//     if (dice !== 1) {
//       currentdice += dice;
//       document.getElementById(`current--${activePlayer}`).textContent =
//         currentdice;
//     } else {
//       switchp();
//     }
//     // else add to current
//   }
// });

// btnHold.addEventListener('click', function () {
//   if (playinggame) {
//     //   document.getElementById(`score--${activePlayer}`).textContent += currentdice;
//     scores[activePlayer] += currentdice;
//     document.getElementById(`score--${activePlayer}`).textContent =
//       scores[activePlayer];
//     if (scores[activePlayer] > 20) {
//       document.getElementById(`score--${activePlayer}`).textContent = 'wins!';
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.add('player--winner');
//       document
//         .querySelector(`.player--${activePlayer}`)
//         .classList.remove('player--active');
//       playinggame = false;
//     } else {
//       switchp();
//     }
//   }
// });
// btnNew.addEventListener('click', settingthegame);
//   Number(document.getElementById(`score--${activePlayer}`).textContent)+=currentdice

// document.querySelector('.btn btn--roll').addEventListener('click', function () {
//   var dice = Math.floor(Math.random() * 6) + 1;
//   switchp (
//     dice
//     // case 1: document.querySelector(".dice").dice-1.png
//   ) {
//   }
// });
