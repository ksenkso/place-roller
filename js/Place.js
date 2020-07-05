import {h} from './utils.js';

export default class Place {
    constructor(number) {
        this.number = number;
        this.el = h({attributes: {class: 'place'}});
        this.el.innerText = this.number;
    }
}
