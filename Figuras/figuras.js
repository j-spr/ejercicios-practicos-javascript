// CUADRADO //

// Agrupando mensajes de consola (Inicio)
console.group("Cuadrado")

// Declarando variable para el cuadrado 
const ladocuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladocuadrado + "cm");

// Calcular perímetro del cuadrado con la formula
const perimetrocuadrado = ladocuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetrocuadrado + "cm");

// Calcular el area del cuadrado con la formula
const areacuadrado = ladocuadrado * ladocuadrado;
console.log("El area del cuadrado es: " + areacuadrado + "cm^2");

console.groupEnd(); // Cierre de mensajes en grupo


// TRIÁNGULO //

console.group("Triángulo") // (Inicio)

// Declarando variable para el triángulo
const ladotriangulo1 = 6;
const ladotriangulo2 = 6;
const basetriangulo = 4;
const alturatiangulo = 5.5;

console.log("Los lados del triángulo miden: " + ladotriangulo1 + "cm, " + ladotriangulo2 + "cm, " + basetriangulo + "cm ");
console.log("La altura del triángulo es: " + alturatiangulo);

// Calcular perímetro del triángulo
const perimetrotriangulo = ladotriangulo1 + ladotriangulo2 + basetriangulo;
console.log("El perímetro del triángulo es: " + perimetrotriangulo + "cm");

// Calcular area del triángulo
const areatriangulo = (basetriangulo * alturatiangulo) / 2;
console.log("El area del triángulo es: " + areatriangulo + "cm^2");

console.groupEnd(); // Cierre


// Círculo//

console.group("Círculo"); // Inicio

// Calcular radio del Círculo
const radiocirculo = 4;
console.log("El radio del Círculo es: " + radiocirculo + "cm");
// Calcular diámetro del Círculo
const diametrocirculo = radiocirculo * 2;
console.log("El diámetro   del Círculo es: " + diametrocirculo + "cm");

// Calcular PI mediante Math
const PI = Math.PI;
console.log("PI equivale a: " + PI);

// Calcular perímetro del Círculo
const perimetrocirculo = diametrocirculo *  PI;
console.log("El perímetro del Círculo es: " + perimetrocirculo + "cm");

// Calcular el area del Círculo
const areacirculo = (radiocirculo * radiocirculo) * PI;
console.log("El area del Círculo es: " + areacirculo + "cm");

console.groupEnd(); // Cierre