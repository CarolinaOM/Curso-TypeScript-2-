"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: [1, 2],
        getName() {
            return this.name;
        }
    };
    let superman = {
        name: 'Clark Kent',
        age: 60,
        powers: [1],
        getName() {
            return this.name;
        }
    };
})();
