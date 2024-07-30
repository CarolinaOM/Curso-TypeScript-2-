(() => {

    // Tipos
    /*const batman = 'Bruce';
    const superman = 'Clark';
  
    const existe = false;*/
  
    // Tuplas
    /*const parejaHeroes = [batman,superman];
    const villano = ['Lex Lutor',5,true];*/
  
    // Arreglos
    /*const aliados = ['Mujer Maravilla','Acuaman','San', 'Flash'];*/
  
    //Enumeraciones
    // ? enum {acuaman = 0}
    const fuerzaFlash = 5;
    const fuerzaSuperman = 100;
    const fuerzaBatman = 1;
    const fuerzaAcuaman = 0;
  
    // Retorno de funciones
    function activar_batiseñal(){
      return 'activada';
    }
  
    function pedir_ayuda(){
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    /*const poder: any = '100';
    const largoDelPoder:number = poder.length;
    console.log( largoDelPoder );*/

    //tipos 1
    const batman: string = 'Bruce';
    const superman: string = 'Clark';

    const existe: boolean = false;


    //tuplas 2
    /*parejaHeroes[0] = 'Bruce';
    parejaHeroes[1] = 'Clark'

    console.log(parejaHeroes);
    

    villano[0] = 'Lex Lutor';
    villano[1] = 2.5;
    villano[2] = false

    console.log(villano);*/

    
    //otra manera
    const parejaHeroes: [string, string] = [batman,superman];
    const villano: [string, number, boolean] = ['Lex Lutor',5,true]


    
    //arreglos 3
     /*aliados.forEach(a => console.log(a.toLocaleLowerCase()));*/

    //otra manera
    const aliados:string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];



    //Enumeraciones 4
    enum supereroes {
        fuerzaFlash = 5,
        fuerzaSuperman = 100,
        fuerzaBatman = 1,
        fuerzaAcuaman = 0
    }

    let heroe = supereroes.fuerzaAcuaman;
    console.log(heroe);
    
    let heroe2 = supereroes.fuerzaBatman;
    console.log(heroe2);

    let heroe3 = supereroes.fuerzaSuperman;
    console.log(heroe3);

    let heroe4 = supereroes.fuerzaFlash;
    console.log(heroe4);



     // Retorno de funciones 5
    type FunctionType = () => void | string;

    function obtenerFuncion(tipo: string): FunctionType {
    if (tipo === 'activar') {
        return activarBatiseñal;
    } else if (tipo === 'ayuda') {
        return pedirAyuda;
    } else {
        return () => console.log('Tipo desconocido');
    }
    }

    function activarBatiseñal(): string {
    return 'activada';
    }

    function pedirAyuda(): void {
    console.log('Auxilio!!!');
    }

    const funcionSeleccionada = obtenerFuncion('activar');
    console.log(funcionSeleccionada());

    const otraFuncion = obtenerFuncion('ayuda');
    otraFuncion(); 

    const funcionDesconocida = obtenerFuncion('otro');
    funcionDesconocida();


     // Aserciones de  6
     const poder: any = '100';

     const largoDelPoder: number = (poder as string).length;
     
     console.log(largoDelPoder); // Imprime 3
    
     
 

    
  
  })()
  
  