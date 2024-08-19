(() => {

    class Avenger {
        //private name: string ;
        //public team: string;
        //private realName?: string;
        static avgAge: number = 35;

        constructor(
            private name: string, 
            private team: string, 
            public realName?: string
        ){}
    }

    const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
    //console.log(antman);
    console.log(antman);

    console.log(Avenger.avgAge);
    
    
    
})()