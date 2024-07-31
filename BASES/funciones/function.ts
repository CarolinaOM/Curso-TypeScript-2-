(() => {

        const hero: string = 'Flash';

        function returName(): string {
            return hero;
        }

        const activateBatisignal = () => {
            return 'Batiseñal activada!';
        }

        console.log(typeof activateBatisignal);

        const heroName = returName();
        
})()