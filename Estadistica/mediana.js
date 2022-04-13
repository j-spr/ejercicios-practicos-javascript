
function calcularMediaAritmetica(lista) {
    const sumalista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    )
    
    const promedioLista = sumalista / lista.length;
    return promedioLista;
}

function par(numero) {
    if (numero % 2 === 0){
        return true;
    } else {
        return false;
    }
}

function mediana(lista) {
    listaOrdenada = lista.sort((a, b) => a - b);
    const mitadLista1 = parseInt(listaOrdenada.length / 2); 
    let mediana;
    if (par(listaOrdenada.length)) {
        const elemento1 = listaOrdenada[mitadLista1 - 1];
        const elemento2 = listaOrdenada[mitadLista1]; 
        const promedio = calcularMediaAritmetica([elemento1, elemento2]);
        mediana = promedio;
    } else {
        mediana = listaOrdenada[mitadLista1];
    }
    return mediana;
}