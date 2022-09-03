
//defino variables globales  para ingreso de datos
const escenarios = [];

let capitalInicial = 0;
let tasaInteres = 0;
let tiempoInversion = 0;
let contador=0;

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
    document.write("<p> ESCENARIO " + contador + " En " + tiempo+ " años usted obtendra: $"+ formato(calcular(capital,interes,tiempo))+"</p>");
}
// funcion para mandar los datos a la web
function printPant(){
    document.write("<div><p>Capital a invertir: " + escenarios[escenarios.length - 1].capital + "<br>");
    document.write("Interes anual: " + (escenarios[escenarios.length - 1].interes*100)+"%" + "<br>");
    document.write("Años de inversion: " + escenarios[escenarios.length - 1].tiempo + "</p>");
    mostrar(escenarios[escenarios.length - 1].capital,escenarios[escenarios.length - 1].interes,escenarios[escenarios.length - 1].tiempo,contador);
}
//calcula cual es el escenario mas conveniente
function mayorRetorno(){
    const retornoMax = Math.max(escenarios[0].retorno, escenarios[1].retorno, escenarios[2].retorno);
    const escenarioMax = escenarios.find(item => item.retorno === retornoMax);
    document.write("<p>El RETORNO de capital mas grande es del escenario: " + (escenarioMax.id+1) + " con "+ escenarioMax.tiempo + " años de inversion</p>");
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