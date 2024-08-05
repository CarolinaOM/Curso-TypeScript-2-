(() =>{

  type  coche = {
    carroceria:string, 
    modelo: string, 
    antibalas: boolean, 
    pasajeros: number
  }
  
  type coche2 = {
    carroceria: string, 
    modelo: string, 
    antibalas: boolean, 
    pasajeros: number, 
    disparar: () => void
  }
  
  // Objetos
  const batimovil: coche = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros:4
  };
  
  const bumblebee: coche2 = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros:4,
    disparar(){ // El metodo disparar es opcional
      console.log("Disparando");
    }
  };
  
  
  // Villanos debe de ser un arreglo de objetos personalizados
  type villano = {
    nombre: string,
    edad: number | undefined,
    mutante: boolean
  }
  
  const villanos: villano[] = [{
    nombre:"Lex Luthor",
    edad: 54,
    mutante:false
  },{
    nombre: "Erik Magnus Lehnsherr",
    edad: 49,
    mutante: true
  },{
    nombre: "James Logan",
    edad: undefined,
    mutante: true
  }];
  
  // Multiples tipos
  // cree dos tipos, uno para charles y otro para apocalipsis
  
  type persona = {
    poder: string,
    estatura: number
  };
  
  type ocurrir = {
    lider: boolean,
    miembros: string[]
  }
  
  const charles: persona = {
    poder:"psiquico",
    estatura: 1.78
  };
  
  const apocalipsis: ocurrir = {
    lider:true,
    miembros: ["Magneto","Tormenta","Psylocke","Angel"]
  }
  
  console.log(apocalipsis);
  
  
  // Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
  let mystique: persona | ocurrir;
  
  mystique = charles;
  mystique = apocalipsis;

  
})()