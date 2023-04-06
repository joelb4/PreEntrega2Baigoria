const contenedor = document.querySelector("#contenedor")
const inputSearch = document.querySelector("#buscarProducto")

const cargarProductos = (array)=> {
    contenedor.innerHTML = ""
    array.forEach(producto => {
        contenedor.innerHTML += retornoCardHTML(producto)        
    })
    clickBotonComprar()
}

const filtrar = (texto, array)=> {
    return array.filter((el) => {
        return (el.nombre.toLowerCase().includes(texto.toLowerCase())
        || el.desarrolladora.toLowerCase().includes(texto.toLowerCase())
        || el.genero.toLowerCase().includes(texto.toLowerCase()))
    })
}

const buscarProductos = (array)=> {
    inputSearch.addEventListener("input", (ev) => {
        if (ev.target.value !== "") {
            const productosFiltrados = filtrar(ev.target.value, array)
            cargarProductos(productosFiltrados)
        } else {
            cargarProductos(array)
        }
    })
}

const clickBotonComprar = ()=> {
    const btnComprar = document.querySelectorAll("button.btn")
    for (boton of btnComprar) {
        boton.addEventListener("mouseover",(e)=> {
            const btn = document.getElementById(e.target.id)
            if (btn.innerText === "En carrito") {
                btn.innerText = "Eliminar"
                btn.className = "btn btn-danger enCarrito"
            }
        })

        boton.addEventListener("mouseout",(e)=> {
            const btn = document.getElementById(e.target.id)
            if (btn.innerText === "Eliminar") {
                btn.innerText = "En carrito"
                btn.className = "btn btn-success enCarrito"
            }
        })

        boton.addEventListener("click", (e)=> {
            let resultado = productos.find(producto => producto.id === parseInt(e.target.id))
            let existe = carrito.findIndex((el) => el.id === parseInt(e.target.id))
            if (existe >=0) {
                carrito.splice(existe,1)
                const btn = document.getElementById(e.target.id)
                btn.innerText = "Comprar"
                btn.className = "btn btn-primary aComprar"
                guardarCarrito()
            } else {
                carrito.push(resultado)
                const btn = document.getElementById(e.target.id)
                btn.className = "btn btn-success enCarrito"
                btn.innerText = "En carrito"
                guardarCarrito()
            }
        })     
    }
}

recuperarCarrito()
cargarProductos(productos)
buscarProductos(productos)