//CICLOS WHILE:

//1

//TABLA DE MULTIPLICAR
/*
var n = prompt("Digite un numero:");
var cont = 1;
while ( cont <= 30){
    document.write("<p> "+ cont + " X " + n + "="+(n*cont)+ " </p>");
    cont = cont+1;
}

var n = prompt("Digite un numero:");
var cont = 1;
var acumulador = 0
;
/*while ( n !== "s"){
    //document.write("<p> "+ cont + " X " + n + "="+(n*cont)+ " </p>");
    acumulador = n;
    n = prompt("Digite un numero");
    document.write("<p> los numero que digito son: "+acumulador+" </p>");
    cont = cont+1;
}
while(cont <= n){
    var cono = 0;
    while(cono <= 50){
        document.write("<span>" +cono+ "</span>");
        cono++;
    }
    document.write("<br>");
    cont++;
}*/

/*
//PRIMER EJERCICIO:

var n = prompt("Digite un n: ");
var cont = 0;

while( cont <= n){
    document.write("<p>" +cont+ "</p>");
    cont ++;
}*/
/*
var n = prompt("Digite un n: ");

for(cont=1; cont<=n; cont++){
    document.write("<span>" +cont+ ", <span>");
}*/


//SEGUNEDO EJERCICIO
/*
var number = prompt("Cuantas notas desea hacer el promedio: ");
var cont = 1;
var acumulador = 1;
while(acumulador <= number){
    notas = prompt("digite las notas: ", acumulador);
    cont = parseInt(cont) + parseInt(notas);
    acumulador = acumulador + 1;
}
promedio = cont / number;
document.write("El promedio es de: "+promedio);
if(promedio >= 3){
    document.write("<br>")
    document.write("El estudiante aprobo la materia.");
}else{
    document.write("<br>")
    document.write("El estudiante perdio la materia.");
}
*/

//TERCER EJERCICIO
/*
i = 1;
Sum = 0;    
Num = prompt("Ingrese el número "+i);
while (Num != "FIN"){   
    document.write("<P>"+Num+"</P>");
    document.write("<br>");
    Sum = Sum +parseInt(Num);
    i = i + 1;
    Num = prompt("Ingrese el número "+i);
}
document.write("<br>");
document.write("<span>"+"La suma de los números ingresados es: "+Sum+"</span>");
*/
//CUARTO EJERCICIO
/*
var n = prompt("Digite el numero por cual vas a multiplicar: ");
var cont = 30;
while ( cont <= 1){
    document.write("<p> "+ cont + " X " + n + "="+(n*cont)+ " </p>");
    cont = cont+1;
}
*/
//QUINTO EJERCICIO
/*
var n = prompt("Digite el numero por cual vas a multiplicar: ");
var cont = 10;
while ( cont >= 1){
    document.write("<p> "+ cont + " X " + n + "="+ (n*cont)+ " </p>");
    cont = cont - 1;
}
*/
//SEXTO EJERCICIO
/*
var cont=1;
while(cont < 30){
    if(cont <= 30){
        document.write("<spand>, "+cont+" </spand>");
    }
    cont = cont + 4;
}
*/
//SEPTIMO EJERCICIO
/*
var cont = 30;
while(cont >= 1){
    document.write("<spand>, "+cont+" </spand>");
    cont = cont - 5;
}
*/
/*
//OCTAVO EJERCICIO
var n = prompt("Digite un número: ");
for (a=1;a<=n;a++){
    for(b=1;b<=a;b++){
        document.write("<span>"+"*"+"</span>");
    }
    document.write("<br>");
}*/
/*
//NOVENO EJERCICIO
n = prompt("Digite un número: ");
for (a=n;a>=1;a--){
    for(b=a;b>=1;b--){
        document.write("<span>"+"*"+"</span>");
    }
    document.write("<br>"); 
}*/

//DECI-TERCER EJERCICIO
/*
mayores = 0;
menores = 0;
i = 0;
for(i = 1; i <= 10; i++){
    edad = prompt("Ingrese la edad del estudiante: ");
    if(edad<=18){
        menores = menores + 1;
    }else{
        mayores = mayores + 1;
    }
}
document.write("La cantidad de estudiantes menores de edad es de: "+menores);
document.write("<br>");
document.write("La cantidad de estudiantes mayores de edad es de: "+mayores);
*/

//DECI-CUARTO EJERCICIO

a = Math.ramdon();
i = 1;

for(i=1; i <= 3; i++);
    num = prompt("Ingrese un numero: ");
        if(num == a){
            num = a;
        }
    document.write("el numero igual es de: "+ num)



