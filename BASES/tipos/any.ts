(() => { 

    let avanger: any = 123;
    let exists;
    let power;

    avanger = 'Dr Stranger';
    //console.log(avanger.charAt(0));
    console.log((avanger as string).charAt(0));

    avanger = 150.2325;
    console.log(<number>avanger.toFixed(2));

    console.log(exists);
    console.log(power);
    
})()