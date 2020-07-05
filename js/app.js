import Roller from './Roller.js';
import Place from './Place.js';

/**
 *
 * @type {HTMLElement}
 */
const root = document.querySelector('.places');
const roll = document.getElementById('roll');
const rollOne = document.getElementById('roll-one');
const roller = new Roller({el: root});

for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        const place = new Place(i+1);
        roller.append(place);
    }, i * 200);
}

roll.addEventListener('click', () => {
    roller.roll();
})
rollOne.addEventListener('click', () => {
    roller.swapRandom();
})
