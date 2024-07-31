(() => {

    const fullName = (firstName:string, lastName?:string, upper: boolean = false): String => {

        if(upper){
            return `${firstName} ${lastName || '----'}`.toUpperCase();
        }else{
            return `${firstName} ${lastName || '----'}`;
        }
        
    }

    const name = fullName('Tony', 'Strak');
    console.log({name});
    
})()