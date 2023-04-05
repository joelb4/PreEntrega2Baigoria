const productosCarrito = document.querySelector("#productosCarrito")
const btnComprar = document.querySelector("#comprar.btn")

const cargarCarrito = (array)=> {
    recuperarCarrito()
    array.forEach(producto => {
        productosCarrito.innerHTML += retornoProductoCarrito(producto)
    });
    calcularSubtotal()
    clickBotonEliminar()
    clickBotonComprar()
    clickBotonVaciarCarrito()
}

const eliminarproductoHTML = (id)=> {
    const productoAEliminar = document.querySelector("#tr" + id)
    productosCarrito.removeChild(productoAEliminar)
}

const clickBotonEliminar = ()=> {
    const btnEliminar = document.querySelectorAll("td button.btn.btn-dark")
    for (boton of btnEliminar) {
        boton.addEventListener("click", (e)=> {
            const index = carrito.findIndex(producto => producto.id === parseInt(e.target.id))
            if (index >=0) {
                carrito.splice(index, 1)
                eliminarproductoHTML(e.target.id)
            }
            guardarCarrito()
            calcularSubtotal()
        })        
    }
}

const clickBotonVaciarCarrito = ()=> {
    const btnVaciarCarrito = document.querySelector("#vaciarCarrito")
    btnVaciarCarrito.addEventListener("click", (e)=> {
        carrito.splice(0,carrito.length)
        guardarCarrito()
        productosCarrito.innerHTML=""
        calcularSubtotal()
    })
}

const clickBotonComprar = ()=> {
    btnComprar.addEventListener("click", (e)=> {
        if (confirm("¿Desea confirmar la compra?")) {
            carrito.splice(0,carrito.length)
            guardarCarrito()
            alert("Gracias por comprar en Playnation")
            productosCarrito.innerHTML=""
        }
    })
}

const calcularSubtotal = ()=> {
    const subtotal = document.querySelector("#subtotal")
    let total = carrito.reduce((total, e)=> {
        return total + e.precio
    }, 0)
    subtotal.innerHTML = `$${total}`
}

cargarCarrito(carrito)