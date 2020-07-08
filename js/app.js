import Roller from './Roller.js';
import {timeout} from './utils.js';

/**
 *
 * @type {HTMLElement}
 */
const root = document.querySelector('.places');
const roll = document.getElementById('roll');
const rollOne = document.getElementById('roll-one');
const resetBtn = document.getElementById('reset');
// const popBtn = document.getElementById('pop');
const roller = new Roller({el: root});
const placeCount = /**@type HTMLInputElement */ document.getElementById('place_count');

roller.generate(placeCount.value);

/*popBtn.addEventListener('click', () => {
    roller.pop();
})*/

placeCount.addEventListener('input', () => {
    roller.setCount(placeCount.value)
        .then(c => console.log(c));
});

resetBtn.addEventListener('click', () => {
    placeCount.value = 10;
    const e = new Event('input');
    placeCount.dispatchEvent(e);
});

roll.addEventListener('click', () => {
    roller.roll();
})
rollOne.addEventListener('click', () => {
    roller.swapRandom();
});

window.roller = roller;
timeout(() => {
    return roller;
}, 1000)
    .then(r => console.log(r));
