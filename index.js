// defino variables
let nota
let entrada

//bucle mientras no se escriba salir
while (entrada != "salir"){
    entrada = prompt("Ingrese su Nombre");
    entrada= entrada .toLowerCase(); // paso a minusculas
    // condicional para saber de quien se trata
    if (entrada == "nicolas"){
        alert("bienvenido " + entrada);
    } else if (entrada === "nestor"){
        alert("bienvenido " + entrada);
    } else if (entrada === "mariano"){
        alert("bienvenido " + entrada);
    } else if (entrada === "daniel"){
        alert("bienvenido " + entrada);
    } else if (entrada === "enrique"){
        alert("bienvenido " + entrada);
    }else{
        alert("vos no estas registrado");
        break;
    }
    // ingreso de nota y condicion para saber si aprobo
    nota = prompt("Ingrese la nota");
    nota = parseInt(nota); //convierto a numero entero
    if (nota > 6 ){
        alert(entrada + " estas aprobado");
    } else{
        alert(entrada + " estas desaprobado");
    }
}