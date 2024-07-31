"use strict";
(() => {
    //ACTIVIDAD
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
    /*const fuerzaFlash = 5;
    const fuerzaSuperman = 100;
    const fuerzaBatman = 1;
    const fuerzaAcuaman = 0;*/
    // Retorno de funciones
    /*function activar_batiseñal(){
      return 'activada';
    }
  
    function pedir_ayuda(){
      console.log('Auxilio!!!');
    }*/
    // Aserciones de Tipo
    /*const poder: any = '100';
    const largoDelPoder:number = poder.length;
    console.log( largoDelPoder );*/
    //RESULTADOS
    //tipos 1
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    //tuplas 2
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    //arreglos 3
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones 4
    let supereroes;
    (function (supereroes) {
        supereroes[supereroes["fuerzaFlash"] = 5] = "fuerzaFlash";
        supereroes[supereroes["fuerzaSuperman"] = 100] = "fuerzaSuperman";
        supereroes[supereroes["fuerzaBatman"] = 1] = "fuerzaBatman";
        supereroes[supereroes["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
    })(supereroes || (supereroes = {}));
    let heroe = supereroes.fuerzaAcuaman;
    console.log(heroe);
    let heroe2 = supereroes.fuerzaBatman;
    console.log(heroe2);
    let heroe3 = supereroes.fuerzaSuperman;
    console.log(heroe3);
    let heroe4 = supereroes.fuerzaFlash;
    console.log(heroe4);
    function obtenerFuncion(tipo) {
        if (tipo === 'activar') {
            return activarBatiseñal;
        }
        else if (tipo === 'ayuda') {
            return pedirAyuda;
        }
        else {
            return () => console.log('Tipo desconocido');
        }
    }
    function activarBatiseñal() {
        return 'activada';
    }
    function pedirAyuda() {
        console.log('Auxilio!!!');
    }
    const funcionSeleccionada = obtenerFuncion('activar');
    console.log(funcionSeleccionada());
    const otraFuncion = obtenerFuncion('ayuda');
    otraFuncion();
    const funcionDesconocida = obtenerFuncion('otro');
    funcionDesconocida();
    // Aserciones de  6
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
