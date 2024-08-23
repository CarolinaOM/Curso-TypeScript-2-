(() => {

    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ){
           console.log('Constructotr Avenger llamado');  
        }

        protected getFullName() {
            return `${this.name} ${this.realName}`
        }
    }

    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutant:boolean
        ){
            super(name, realName)
            console.log('Constructor Xmen llamado');
            
        }

        getFullnameDesdeXman(){
            console.log(super.getFullName());
            
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true)

    console.log(wolverine);
    wolverine.getFullnameDesdeXman();
    
    
    
})()