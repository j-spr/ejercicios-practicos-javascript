// Helpers
function par(numero) {
    return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista) {
    const sumalista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )
    
    const promedioLista = sumalista / lista.length;
    return promedioLista;
}

// Calculadora de Mediana
function medianaSalarios(lista) {
    const mitadLista1 = parseInt(lista.length / 2); 
    let mediana;
    if (par(lista.length)) {
        const persona1 = lista[mitadLista1 - 1];
        const persona2 = lista[mitadLista1]; 
        const promedio = calcularMediaAritmetica([persona1, persona2]);
        mediana = promedio;
    } else {
        mediana = lista[mitadLista1];
    }
    return mediana;
}

const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
);

const salariosColOrder = salariosCol.sort(
    function(salarioA, salarioB){
        return salarioA  - salarioB;
    }
)
 
const medianaGeneral =  medianaSalarios(salariosColOrder);

// Mediana del top 10% 
const spliceStart = (salariosColOrder.length * 90) / 100;
const spliceCount = salariosColOrder.length - spliceStart;

const salariosColTop10 = salariosColOrder.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Col =  medianaSalarios(salariosColTop10);

console.log({
   medianaGeneral,
   medianaTop10Col,
});