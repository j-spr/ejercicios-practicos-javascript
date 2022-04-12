// CUADRADO //

// Calcular perímetro del cuadrado con la formula
function perimetrocuadrado(lado) { 
    return lado * 4;
}

// Calcular el area del cuadrado con la formula
function areacuadrado(lado) { 
    return lado * lado;
}

// TRIÁNGULO //

// Calcular perímetro del triángulo
function perimetrotriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

// Calcular area del triángulo
function areatriangulo(base, altura) {
    return (base * altura) / 2;
}


// Círculo//

// Calcular diámetro del Círculo
function diametrocirculo(radio) {
    return radio * 2;
}

// Calcular PI mediante Math
const PI = Math.PI;

// Calcular perímetro del Círculo
function perimetrocirculo(radio) {
    const diametro = diametrocirculo(radio);
    return diametro * PI;
}

// Calcular el area del Círculo
function areacirculo (radio) {
    return (radio* radio) * PI;
} 