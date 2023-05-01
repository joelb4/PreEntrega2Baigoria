const productosCarrito = document.querySelector("#productosCarrito")
const btnComprar = document.querySelector("#comprar.btn")
const contenedor = document.querySelector("div.contenedor")
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
        clickBotonVolverTienda()       
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
            notificacion("Producto eliminado", "warning")
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
        alertify.confirm("Se vaciará el carrito", "¿Está seguro?",
            ()=> {
                carrito.splice(0,carrito.length)
                guardarCarrito()
                contenedor.innerHTML = retornoErrorCarritoVacio()
                notificacion("Carrito vaciado", "error")
            },
            ()=>{
                notificacion("Cancelado", "warning")
            })
    })
}

const clickBotonConfirmarCompra = ()=> {
    btnComprar.addEventListener("click", (e)=> {
        const total = calcularSubtotal(carrito)
        alertify.confirm("¿Desea confirmar la compra?", "Costo total: $"+total,
            ()=> {
                notificacion("Compra realizada", "success")
                carrito.splice(0,carrito.length)
                guardarCarrito()
                productosCarrito.innerHTML = ""
                contenedor.innerHTML = retornoCompraRealizada(total)
            },
            ()=> {
                notificacion("Compra cancelada", "error")
            })
            .set("closable",false)
            .set("movable",false)
            .set("transition","zoom")
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

const clickBotonVolverTienda = ()=> {
    const btnVolver = document.getElementById("botonVolverIndex")
    btnVolver.addEventListener("click", ()=> {
        window.location.href = "./"
    })
}

cargarCarrito(carrito)