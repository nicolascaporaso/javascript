
//defino variables globales  para ingreso de datos
const escenarios = [];

let capitalInicial = 0;
let tasaInteres = 0;
let tiempoInversion = 0;
let contador=0;

//funcion para eliminar arreglos
function limpiar(){
    let borrar = false
    borrar = confirm("desea borrar los escenarios?");
    if (borrar == true){
        borrar = confirm("desea borrar todos los escenarios?");
        if (borrar == true){ 
            escenarios.splice(0);
            console.log(escenarios);
        }else{
            let borr =0; 
            borr = parseInt(prompt("que escenario desea borrar 1, 2 o 3")-1);
            console.log(borr);
            escenarios.splice((borr),1);
            console.log(escenarios);
        }    
    }else{
        //no borra nada
    }
}


//formula de interes compuesto
function calcular(capital,interes,tiempo){
    return capital * ((1+interes)**tiempo);
}

//formatO salida como pesos argentinos
const formato = function(number){
    return new Intl.NumberFormat('es-ES', {style: 'currency',currency: 'ARS', minimumFractionDigits: 2}).format(number);
};
//funcion para mostrar resultados de escenarios en pantalla
function mostrar(capital,interes,tiempo,contador){
    escenarios[escenarios.length - 1].retorno = parseInt((escenarios[escenarios.length - 1].capital * ((1+escenarios[escenarios.length - 1].interes)**escenarios[escenarios.length -1].tiempo)/1000));
    return ganado= `Usted obtuvo ${formato(calcular(capital,interes,tiempo))}`;
}
// funcion para mandar los datos ingresador por prompt a la web
function printPant(){
    //creo el escenario en un div
    let div = document.getElementById("escenarios");
    let mostrarEscenario = document.createElement("div");
    mostrarEscenario.setAttribute("id", "escenario"+contador);
    mostrarEscenario.innerHTML = "<h1>Escenario" + contador + "</h1>" ;
    div.append(mostrarEscenario);
// agrego parrafos con resultados
//capital
    contenedor = document.getElementById("escenario"+contador);
    mostrarEscenario = document.createElement("p");
    mostrarEscenario.innerHTML = "Capital a invertir: " + escenarios[escenarios.length - 1].capital ;
    contenedor.append(mostrarEscenario);
// interes
    mostrarEscenario = document.createElement("p");
    mostrarEscenario.innerHTML = "Interes anual: " + (escenarios[escenarios.length - 1].interes*100)+"%";
    contenedor.append(mostrarEscenario);
//tiempo
    mostrarEscenario = document.createElement("p");
    mostrarEscenario.innerHTML = "Años de inversion: " + escenarios[escenarios.length - 1].tiempo;
    contenedor.append(mostrarEscenario);
// total
    mostrarEscenario = document.createElement("p");
    mostrarEscenario.innerHTML =  mostrar(escenarios[escenarios.length - 1].capital,escenarios[escenarios.length - 1].interes,escenarios[escenarios.length - 1].tiempo,contador);
    contenedor.append(mostrarEscenario);
}
//calcula cual es el escenario mas conveniente
function mayorRetorno(){
    const retornoMax = Math.max(escenarios[0].retorno, escenarios[1].retorno, escenarios[2].retorno);
    const escenarioMax = escenarios.find(item => item.retorno === retornoMax);
    
    let div = document.getElementById("escenarios");
    let mostrarEscenario = document.createElement("h2");
    mostrarEscenario.setAttribute("id", "resultado");
    mostrarEscenario.innerHTML = "El retorno de capital mas grande es del escenario: " + (escenarioMax.id+1) + " con "+ escenarioMax.tiempo + " años de inversion" ;
    div.append(mostrarEscenario);

    console.log(escenarios);
}

//funcion para ingreso de datos
function ingresoValores(){

    class Escenario{
        constructor(id, capital, interes, tiempo, retorno){
            this.id= id;
            this.capital = capital;     
            this.interes = interes;
            this.tiempo = tiempo;
            this.retorno = 0;
        }
    }

while (contador < 3) {

     do { //validacion de ingreso de datos como numero
         capitalInicial= parseInt(prompt("Ingrese la suma inicial a invertir ESCENARIO " + (contador+1) )); //guardo como numero en variable
    } while (isNaN(capitalInicial));

     do { //validacion de ingreso de datos como numero
         tasaInteres= parseFloat(prompt("Ingrese la tasa de interes anual a percibir (1% a 100%) ESCENARIO " + (contador+1)));    //guardo como numero decimal en variable
         tasaInteres=tasaInteres/100; //lo divido por 100 para aplicarlo en la formula de interes compuesto
    } while (isNaN(tasaInteres));

     do { //validacion de ingreso de datos como numero
         tiempoInversion= parseInt(prompt("Ingrese la cantidad de años que va mantener la inversion ESCENARIO " + (contador+1))); //guardo como numero en variable
    } while (isNaN(tiempoInversion));

    //iteraccion en array de objetos
    escenarios.push (new Escenario(contador,capitalInicial,tasaInteres,tiempoInversion));
    contador ++;

    //muestra datos en pagina web.
    printPant();
    }

    //llama a funcion de calculo de escenario
    mayorRetorno();
} 

ingresoValores();
limpiar();

