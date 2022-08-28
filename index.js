
//defino variables globales  para ingreso de datos
    let capitalInicial = 0;
    let tasaInteres = 0;
    let tiempoInversion = 0;

//funcion para ingreso de datos
function ingresoValores(){
    do { //validacion de ingreso de datos como numero
        capitalInicial= parseInt(prompt("Ingrese la suma inicial a invertir")); //guardo como numero en variable
        if (capitalInicial==0){
            alert("presiono cancelar");
        }
    } while (isNaN(capitalInicial));

    do { //validacion de ingreso de datos como numero
        tasaInteres= parseFloat(prompt("Ingrese la tasa de interes a percibir"));    //guardo como numero decimal en variable
        tasaInteres=tasaInteres/100; //lo divido por 100 para aplicarlo en la formula de interes compuesto
    } while (isNaN(tasaInteres));

    do { //validacion de ingreso de datos como numero
        tiempoInversion= parseInt(prompt("Ingrese la cantidad de años que va mantener la inversion")); //guardo como numero en variable
    } while (isNaN(tiempoInversion));

    //muestra datos cargados en pagina web.
    document.write("<p> Capital inicial: $"+ capitalInicial +"</p>" + "<p> Tasa de interes esperado: %"+ tasaInteres*100  +"</p>" + "<p> Tiempo de inversion: " + tiempoInversion + " años</p>" )
}

//formula de interes compuesto
function calcular(capital,interes,tiempo){
return capital * ((1+interes)**tiempo);
}

//formata salida como pesos argentinos
const formato = function(number){
    return new Intl.NumberFormat('es-ES', {style: 'currency',currency: 'ARS', minimumFractionDigits: 2}).format(number);
};

function mostrar(capital,interes,tiempo){
    document.write("<p>En " + tiempo+ " años usted obtendra: $"+ formato(calcular(capital,interes,tiempo))+"</p>");
}

ingresoValores();
mostrar(capitalInicial,tasaInteres,tiempoInversion);