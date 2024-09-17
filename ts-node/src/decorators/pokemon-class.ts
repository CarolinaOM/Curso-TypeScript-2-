function printToConsole (constructor: Function){
    console.log(constructor);
}

const printToConsoleConditional = ( print: boolean = false):Function => {
   if(print){
    return printToConsole;
   }else {
    return () => {}
   }
}

const  bloquearPrototipo = function(constructor: Function){
    Object.seal(constructor)
    Object.seal(constructor.prototype)
}

function CheckValidPokemonId(){
    return function( target: any, propertyKey: string, descriptor: PropertyDescriptor){

        const originalMethod = descriptor.value;


        descriptor.value = (id: number) => {
            if(id < 1 || id > 800){
                return console.error('El id del pokemon debe de estar entre 1 y 800')
            }else {
                return originalMethod(id)
            }
        }
        //descriptor.value = () => console.log('Hola Mundo');
        
    }
}

function readonly (isWritavle: boolean = true): Function{
    return function(target: any, propertyKey: string){
        const descriptor: PropertyDescriptor = {   
            get(){
                console.log(this)
                return 'Caro'
            },
            set(this, val){
                //console.log(this, val);
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWritavle,
                    enumerable: false
                })
            }
        }
        return descriptor;
    }
}

@bloquearPrototipo
@printToConsoleConditional( false )
export class Pokemon {
    @readonly(true)
    public publicApi: string = 'https://pokeapi.co'
    constructor(
        public name: string
    ){}

    @CheckValidPokemonId()

    savePokemonToDB(id:number){
        console.log(`Pokemin guardadi a la base de datos ${id}`);
        
    }
}