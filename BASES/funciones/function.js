"use strict";
(() => {
    const hero = 'Flash';
    function returName() {
        return hero;
    }
    const activateBatisignal = () => {
        return 'Batiseñal activada!';
    };
    console.log(typeof activateBatisignal);
    const heroName = returName();
})();
