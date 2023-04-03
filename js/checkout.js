
const cargarCarrito = (array)=> {
    array.forEach(producto => {
        productosCarrito.innerHTML += retornoProductoCarrito(producto)
    });
}

recuperarCarrito()
cargarCarrito(carrito)