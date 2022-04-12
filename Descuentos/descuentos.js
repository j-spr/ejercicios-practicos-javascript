function calcularPrecioCondescuento(precio, descuento) {
    const porcentaje_con_descuento = 100 - descuento;
    const precio_con_descuento = (precio * porcentaje_con_descuento) / 100;
    return precio_con_descuento
}

function ButtonDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioCondescuento(priceValue, discountValue);

    const resultado = document.getElementById("ResultPrice");
    resultado.innerText= ("El precio con descuento es: $" + precioConDescuento);
}



