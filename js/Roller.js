export default class Roller {

    /**
     *
     * @param {HTMLElement} el
     * @param {number} radius
     * @param {number} size
     */
    constructor({el, radius = 150, size = 500}) {
        this.el = el;
        this.radius = radius;
        this.size = size;
        /**
         *
         * @type {Place[]}
         */
        this.places = [];
        this.init();

        this.lastSwap = null;
    }

    init() {
        this.el.style.width = `${this.size}px`;
        this.el.style.height = `${this.size}px`;
    }

    /**
     *
     * @param {Place} place
     */
    append(place) {
        this.places.push(place);
        this.el.appendChild(place.el);
        this.positionPlace(this.places.length - 1);
    }

    positionPlace() {
        let angle;
        this.places.forEach((place, index) => {
            angle = this.getAngle(index);
            place.el.style.top = `${this.size / 2 - this.radius * Math.sin(angle)}px`;
            place.el.style.left = `${this.size / 2 - this.radius * Math.cos(angle)}px`;
        })

    }

    /**
     *
     * @param {number} i1
     * @param {number} i2
     */
    swap(i1, i2) {
        if (this.lastSwap) {
            if (this.lastSwap[0] === i1 && this.lastSwap[1] === i2 || this.lastSwap[0] === i2 && this.lastSwap[1] === i1) {
                alert('нихуя ты фартовый брателло, ладно, свапаю обратно');
            }
        }
        this.lastSwap = [i1, i2];
        const p1 = this.places[i1];
        const p2 = this.places[i2];
        const tmpTop = p2.el.style.top;
        const tmpLeft = p2.el.style.left;
        p2.el.style.top = p1.el.style.top;
        p2.el.style.left = p1.el.style.left;
        p1.el.style.top = tmpTop;
        p1.el.style.left = tmpLeft;
        p1.el.classList.add('swapped');
        p2.el.classList.add('swapped');
        setTimeout(() => {
            p1.el.classList.remove('swapped');
            p2.el.classList.remove('swapped');
        }, 150);
    }

    getAngle(index) {
        return index / this.places.length * 2 * Math.PI;
    }

    roll() {
        for (let i = 0; i < this.places.length; i++) {
            setTimeout(() => {
                this.swapRandom()
            }, i * 500);
        }
    }

    swapRandom() {
        const placesCount = this.places.length;
        const i1 = Math.random() * placesCount | 0;
        let i2 = Math.random() * placesCount | 0;
        while (i2 === i1) {
            i2 = Math.random() * placesCount | 0;
        }
        this.swap(i1, i2);
    }
}
