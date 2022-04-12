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
    return (radio * radio) * PI;
} 


// Interactuando con HTML
function calcularperimetrocuadrado() {  
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetrocuadrado(value);
    alert(perimetro);
}

function calcularareacuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areacuadrado(value);
    alert(area);
}

function calcularareatriangulo(){
    const input1 = document.getElementById("InputTrianguloBase");
    const base = input1.value;
    
    const input2 = document.getElementById("InputTrianguloAltura");
    const altura = input2.value;

    const area = areatriangulo(base, altura);
    alert(area);
}


function calcularperimetrotriangulo() {    
    const input1 = document.getElementById("InputTrianguloLado1");
    const Lado1 = Number(input1.value);

    const input2 = document.getElementById("InputTrianguloLado2");
    const Lado2 = Number(input2.value);

    const input3 = document.getElementById("InputTrianguloBase");
    const Base = Number(input3.value);
    
    const perimetro = perimetrotriangulo(Lado1, Lado2, Base);
    alert(perimetro);
}

function calcularperimetrocirculo() {
    const input = document.getElementById("InputCirculo");
    const radio = input.value;

    const perimetro = perimetrocirculo(radio);
    alert(perimetro);
}

function calcularareacirculo() {
    const input = document.getElementById("InputCirculo");
    const radio = input.value;

    const area = areacirculo(radio);
    alert(area);
}