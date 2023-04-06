const productosCarrito = document.querySelector("#productosCarrito")
const btnComprar = document.querySelector("#comprar.btn")
const contenedor = document.querySelector("div.contenedor")
const contConfirmarCompra = contenedor.querySelector("#contConfirmarCompra")
const btnVaciarCarrito = document.querySelector("#vaciarCarrito")

const cargarCarrito = (array)=> {
    recuperarCarrito()

    if (array.length>0) {
        array.forEach(producto => {
            productosCarrito.innerHTML += retornoProductoCarrito(producto)
        })
        setSubtotal()
        clickBotonEliminar()
        clickBotonConfirmarCompra()
        clickBotonVaciarCarrito()        
    } else {
        contenedor.innerHTML = retornoErrorCarritoVacio()
    }
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
            setSubtotal()
            if (carrito.length === 0) {
                contenedor.innerHTML = retornoErrorCarritoVacio()
            }
        })        
    }
}

const clickBotonVaciarCarrito = ()=> {
    btnVaciarCarrito.addEventListener("click", ()=> {
        carrito.splice(0,carrito.length)
        guardarCarrito()
        contenedor.innerHTML = retornoErrorCarritoVacio()
    })
}

const clickBotonConfirmarCompra = ()=> {
    btnComprar.addEventListener("click", (e)=> {
        const total = calcularSubtotal(carrito)
        contConfirmarCompra.innerHTML = retornoConfirmarCompra(total)
        const btnConfirmar = contenedor.querySelector("button#confirmar")
        const btnCancelar = contenedor.querySelector("button#cancelar")
        btnVaciarCarrito.setAttribute("disabled","true")
        const btnEliminar = document.querySelectorAll("td button.btn.btn-dark")
        for (boton of btnEliminar) {
            boton.setAttribute("disabled","true")
        }
        btnConfirmar.addEventListener("click", ()=> {
            carrito.splice(0,carrito.length)
            guardarCarrito()
            productosCarrito.innerHTML = ""
            contenedor.innerHTML = retornoCompraRealizada(total)
        })
        btnCancelar.addEventListener("click", ()=> {
            contConfirmarCompra.innerHTML = ""
            btnVaciarCarrito.disabled=false
            for (boton of btnEliminar) {
                boton.disabled=false
            }
        })

    })
}

const calcularSubtotal = (array)=> {
    return array.reduce((total, el)=> {
        return total + el.precio
    }, 0)
}
const setSubtotal = ()=> {
    const subtotal = document.querySelector("#subtotal")
    const total = calcularSubtotal(carrito)
    subtotal.innerHTML = `$${total}`
}

cargarCarrito(carrito)