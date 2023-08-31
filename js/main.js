// function saludo() {
//     alert("Bienvenido a mi website con BootStrap y Js") 
// }
function suma() {
    // Declaramos las variables nesesarias
    let A = 0;
    let B = 0; 
    let S = 0;
    
    // Solicitamos los valores
    A = parseInt(prompt("Por valor igrese el primer valor a sumar"))
    B = parseInt(prompt("Por favor ingrese el segundo valor a sumar"))
    
    // Realizamos los procesos
    S = A + B; 

    // Mostramos el resultado en pantalla 
    alert("El resultado de la suma es: " + S )
}
function operaciones() {
    let A = 0;
    let B = 0;
    let S = 0;
    let R = 0;
    let M = 0;
    let D = 0; 

    A = parseInt(prompt("Ingrese el primer valor a sumar, restar, multiplicar y dividir"))
    B = parseInt(prompt("Ingrese el segundo a sumar, restar, multiplicar y dividir"))

    S = A + B;
    R = A - B;
    M = A * B;
    D = A / B; 


    alert("El resultado de la suma es: " +  S,  "El resultado de la resta es: " + R, "El resultado de la multiplicacion es: " + M, "El resultado de la divicion es: " + D )

    
}
 function mayor() {
    let N1 = 0; 
    let N2 = 0;

    N1 =  parseInt(prompt("Ingrese el primer valor"));
    N2 = parseInt(prompt("Ingrese el segundo valor"));

    if (N1 == N2) {
        alert("los valores ingresados son iguales")
    }
    if (N1>N2) {
        alert("El numero mayor es " + N1)
        
    } else {
        alert("El numero mayor es " + N2)
    }

 }
 function menor3() {
    let N1 = 0; 
    let N2 = 0;
    let N3 = 0;

    N1 = parseInt(prompt("Ingrese el primer valor"));
    N2 = parseInt(prompt("Ingrese el segundo valor"));
    N3 = parseInt(prompt("Ingrese el tercer valor"));

    if (N1 <= N2 && N1 <= N3) {
        alert("El numero menor es :" + N1);
    } else if (N2 <= N1 && N2 <= Nm3) {
        alert("El numero menor es: " + N2)
    } else {
        alert("El numero menor es :" + N3)
    }

}

// El colegio A B C requiere un algoritmo en un sistema que permita a los diferentes estudiantes ingresar su nombre, materia, y siete calificaciones y este sistema, le indique si aprovo o reprobo la materia teniendo en cuenta que se aprueba si el puntaje es mayor igual a 6
function promedio(){
    let No = 0;
    let Ma = 0;
    let C1 = 0;
    let C2 = 0;
    let C3 = 0; 
    let C4 = 0;
    let C5 = 0;
    let C6 = 0;
    let C7 = 0; 
    
    No = prompt("Digite su nombre");
    Ma = prompt("Digite su materia"); 


    C1 = parseFloat(prompt("Ingrese la primera nota"));
    C2 = parseFloat(prompt("Ingrese la segunda nota"));
    C3 = parseFloat(prompt("Ingrese la tercera nota"));
    C4= parseFloat(prompt("Ingrese la cuarta nota"));
    C5= parseFloat(prompt("Ingrese la quinta nota"));
    C6= parseFloat(prompt("Ingrese la sexta nota"));
    C7= parseFloat(prompt("Ingrese la septima nota"));

    R = C1 + C2 + C3 + C4 + C5 + C6 +C7;
    Re = R / 7;

    if (Re>=7) {
        alert("Hola " + No + ", el promedio de la materia " + Ma + " es: " + Re + " ¡Felicitaciones pasaste!")
    } else {
        alert("Hola " + No + ", el promedio de la materia " + Ma + " es: " + Re + " ¡Felicitaciones no pasaste!")
    }


    
}
// Se requiere un sistema o algoritmo que al ingresar el valor en dolares nos indique a cuantos pesos colombianos equibale, euros , yenes
function conversion() {
    B1 = 0; 

    B1 = parseFloat(prompt("Por favor ingrese los dolaresa convertir"))
    
    B2 = B1 * 4119;
    B3 = B1 * 0.92;
    B4 = B1 * 145.75;

    alert("Hola, la conversion de " + B1 +  "dolar a pesos colombianos es: " + B2 + " en Euros es: " + B3 + " en yenes es " + B4 + "   Gracias por elegirnos")
}
// Un individuo desea invertir su capital en un banco y requiere saber cuanto dinero ganara despues de N numero de años teniendo en cuentta que el banco paga un interes del 1.3 % mensual  
function cdt() {
    let D = 0; 
    let N = 0; 
    let I = 0;
    let F = 0;


    D = parseFloat(prompt("Hola , por favor digita valor a invertir"))
    N = parseInt(prompt("Por favor digita el numero de años"))

    I =  1.3 /12;
    F = D *(1 + I)** N ;
    
    alert("El capital ganado en " + N + " años digitados es: " + F)

}
// capturamos en una constante el elemento html que deseamos manipular
function circulo() {
    const figura=document.getElementById("figura");
    // A este elemento html le agregamos la clase circulo
    figura.classList.toggle("circulo");
}
function Horizontal() {
    const figura = document.getElementById("figura")
    figura.classList.toggle("hor");
}
function vertical() {
    const figura = document.getElementById("figura");
    figura.classList.toggle("ver");
}
function gif() {
    const figura = document.getElementById("figura");
    figura.classList.toggle("gift");
}
function moveTop() {
    const figura = document.getElementById("figura");
    figura.classList.toggle("top");
}
function moveRight() {
    const figura = document.getElementById("figura");
    figura.classList.toggle("right");
}
function moveLeft() {
    const figura = document.getElementById("figura");
    figura.classList.toggle("left");
}
function moveBottom() {
    const figura = document.getElementById("figura");
    figura.classList.toggle("bottom");
}
function degradado() {
    const figura = document.getElementById("figura");
    figura.classList.toggle("deg");
}
function rombo() {
    const figura = document.getElementById("figura");
    figura.classList.toggle("rom");
}
function triangulo() {
    const figura = document.getElementById("figura");
    figura.classList.toggle("trian");
}
function panelLateral() {
    const panel = document.getElementById("panel-lateral");
    panel.classList.toggle("active");
}
function panelSuperior() {
    const panel = document.getElementById("panel-superior");
    panel.classList.toggle("activ");
}
