
//defino variables globales  para ingreso de datos
const escenarios = [];

let capitalInicial = 0;
let tasaInteres = 0;
let tiempoInversion = 0;
let contador=0;

//funcion para eliminar arreglos
function limpiar(){
    let borrar = false
    borrar = confirm("desea borrar todos los escenarios?");
    if (borrar == true){ 
        escenarios.splice(0);
        console.log(escenarios);
        location.reload();
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
    escenarios[escenarios.length - 1].retorno = parseInt((escenarios[escenarios.length - 1].capital * ((1+escenarios[escenarios.length - 1].interes)**escenarios[escenarios.length -1].tiempo)));
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
    let mayor = escenarios[0].retorno/escenarios[0].tiempo;
    let time = escenarios[0].tiempo;
    let retor=0;
    escenarios.forEach(function(numero){
        if ((numero.retorno/numero.tiempo > mayor) && (numero.tiempo < time)){ 
            mayor = numero.retorno/numero.tiempo
            retor = numero;
        }else{
            if (numero.retorno/numero.tiempo == mayor){
                if (numero.tiempo < time){
                    time = escenarios[0].tiempo;
                    mayor = numero.retor/numero.tiempo;
                }
            }else{
                if (numero.tiempo < time){
                    time = escenarios[0].tiempo;
                    mayor = numero.retorno/numero.tiempo;
                }else{
                    retor= escenarios[0];
                }    
            }
        }
    })


    console.log(mayor);
    console.log(time);
    console.log(retor);

    let div = document.getElementById("escenarios");
    let mostrarEscenario = document.createElement("h2");
    mostrarEscenario.setAttribute("id", "resultado");
    mostrarEscenario.innerHTML = "La mejor opcion es el escenario  " + (retor.id+1) + " con "+ retor.tiempo + " años de inversion" + " y un retorno total de: " + retor.retorno + "<br> buscamos el mayor retorno en el menor tiempo posible";
    div.append(mostrarEscenario);

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

        let contenedor = document.getElementById("capital");
        capitalInicial= parseInt(contenedor.value); //guardo como numero en variable

//validacion de ingreso de datos como numero
        contenedor = document.getElementById("interes");
         tasaInteres= parseFloat(contenedor.value);    //guardo como numero decimal en variable
         tasaInteres=tasaInteres/100; //lo divido por 100 para aplicarlo en la formula de interes compuesto

 //validacion de ingreso de datos como numero
        contenedor = document.getElementById("años");
         tiempoInversion= parseInt(contenedor.value); //guardo como numero en variable


    //iteraccion en array de objetos
    escenarios.push (new Escenario(contador,capitalInicial,tasaInteres,tiempoInversion));
    contador++

    console.log(escenarios);
    //muestra datos en pagina web.
    printPant();
    

    //llama a funcion de calculo de escenario
    
} 

let boton = document.getElementById("btnPrincipal");
boton.addEventListener("click", ingresoValores);

let boton2 = document.getElementById("retorno");
boton2.addEventListener("click", mayorRetorno);

let borra = document.getElementById("borra");
borra.addEventListener("click", limpiar);


