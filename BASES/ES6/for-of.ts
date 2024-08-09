(() => {

    type Avenger = {
        name: string,
        weapon: string
    }

    const iroman: Avenger = {
        name: 'Iroman',
        weapon: 'Armorsuit'
    }

    const capitanAmerica: Avenger = {
        name: 'Capitan America',
        weapon: 'Escudo'
    }

    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Mjolnir'
    }

    const avengers: Avenger[] = [iroman, thor, capitanAmerica];

    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon);
        
    }
})()