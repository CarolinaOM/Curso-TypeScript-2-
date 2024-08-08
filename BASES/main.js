"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        iroman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500
    };
    const printAvenger = (_a) => {
        var { iroman } = _a, resto = __rest(_a, ["iroman"]);
        console.log(iroman, resto);
    };
    const avengersArr = ['Cap. America', true, 150.15];
    const [capitan, iroman, seriaUnNumero] = avengersArr;
})();
(() => {
    const nombre = 'Carolina';
    const getName = () => {
        console.log('Viejo getName');
    };
})();
//# sourceMappingURL=main.js.map