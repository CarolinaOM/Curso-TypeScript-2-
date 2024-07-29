(() => {

    let avengers: number = 10;
    console.log(avengers);

    const villins:number = 20;

    if(avengers < villins) {
        console.log('Estamos en problemas');
    } else {
        console.log('Nos salvamos');
    }

    avengers = Number ('55A');
    console.log({avengers});
    
})()