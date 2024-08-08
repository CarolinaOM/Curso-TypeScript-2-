(() => {

    type Avengers = {
        nick: string,
        iroman: string,
        vision: string,
        activo: boolean,
        poder: number
    }

    const avengers = {
        nick: 'Samuel L. Jackson',
        iroman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500
    }
    
    //const {poder, vision} = avengers
    //console.log( poder.toFixed(2), vision.toUpperCase() );

    const printAvenger = ({iroman, ...resto}:Avengers) => {
        console.log(iroman, resto);
        
    }

    printAvenger(avengers);
    
})()