// class CountdownTimer {
//     #el;
//     #intervalId;
//     #timerSec = 10;
//     #interval = 1000;
//     constructor({ selector, targetDate }) {
//         this.#el = document.querySelector(selector);
//         this.#timerSec = targetDate - Date.now();
//         this.start();
//     }
//     start() {
//         this.#intervalId = setInterval(() => { this.render(this.#timerSec -= this.#interval)}, this.#interval);
//     }

// const { render } = require("sass");

//     stop() {
//         clearinterval(this.#intervalId);
//     }

//     render(time) {
//         if (time < 0) {
//             time = 0;
//             this.stop();
//             return false;
//         }
//         const days = Math.floor(time / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//         const secs = Math.floor((time % (1000 * 60)) / 1000);
//         // console.log(days, hours, mins, secs);
//         // const placeTimerId = date.selector;
//         // const placeTimer = document.querySelector(`#${placeTimerId}`);
//         // console.log(placeTimer);
        
        
//         this.#el.innerHTML = `${days.toString().padStart(2,0)}:${hours.toString().padStart(2,0)}:${mins.toString().padStart(2,0)}:${secs.toString().padStart(2,0)}`;

//     }
// }

// const date = new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 31, 2021'),
// });
// //     const placeTimerId = date.selector;
// //     const placeTimer = document.querySelector(`${placeTimerId}`);
// // console.log(placeTimer);
// //     console.log(date.selector);
// // console.log(date);

// /*
//  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
//  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
//  */

// /*
//  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
//  * остатка % и делим его на количество миллисекунд в одном часе
//  * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
//  */

// /*
//  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
//  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
//  */

// /*
//  * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
//  * миллисекунд в одной секунде (1000)
//  */


// ==========================================================================================================
class CountdownTimer {
    #placeId;
    #elDays;
    #elHours;
    #elMins;
    #elSecs;

    interval = 1000;
    timeout;
    time;
    constructor({ selector, targetDate }) {
        this.#placeId = selector;
        // this.#el = document.querySelector(this.#placeId);
        this.#elDays = document.querySelector('[data-value="days"]');
        this.#elHours = document.querySelector('[data-value="hours"]');
        this.#elMins = document.querySelector('[data-value="mins"]');
        this.#elSecs = document.querySelector('[data-value="secs"]');
        this.time = targetDate - Date.now();
        this.start();
        // console.log(this.time)
    }
    
    start() {
        this.timeout = setInterval(() => this.render(), 1000)
    }
    stop() {
        clearInterval(this.timeout);
    }
    render() {
        this.time -= this.interval;
        const days = Math.floor(this.time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((this.time % (1000 * 60)) / 1000);

        console.log(days, hours, mins, secs);
        // console.log();

        // console.log();

        // console.log();

    
        this.#elDays.innerHTML = `<div class="time">${days.toString().padStart(2,0)}</div>`;
        this.#elHours.innerHTML = `<div class="time">${hours.toString().padStart(2,0)}</div>`;
        this.#elMins.innerHTML = `<div class="time">${mins.toString().padStart(2,0)}</div>`;
        this.#elSecs.innerHTML = `<div class="time">${secs.toString().padStart(2,0)}</div>`;

    }
}
    // const daysBlockNode = document.querySelector('[data-value="days"]');
    // const hoursBlockNode = document.querySelector('[data-value="hours"]');
    // const minsBlockNode = document.querySelector('[data-value="mins"]');
    // const secsBlockNode = document.querySelector('[data-value="secs"]');

        

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('January 24, 2022'),
});

document.querySelector('body').style.backgroundColor = "brown";