const contenedor = document.querySelector("#contenedor")
const productosCarrito = document.querySelector("#productosCarrito")



const cargarProductos = (array)=> {
    array.forEach(producto => {
        contenedor.innerHTML += retornoCardHTML(producto)        
    });
    clickBotonComprar()
}

const clickBotonComprar = ()=> {
    const btnComprar = document.querySelectorAll("button.btn")
    for (boton of btnComprar) {
        boton.addEventListener("click", (e)=> {
            let resultado = productos.find(producto => producto.id === parseInt(e.target.id))
            carrito.push(resultado)
            guardarCarrito()
        })
        
    }
}

cargarProductos(productos)
recuperarCarrito()