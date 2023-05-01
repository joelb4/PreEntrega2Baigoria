const contenedor = document.querySelector("#contenedor")
const inputSearch = document.querySelector("#buscarProducto")
const btnOrdenarTitulo = document.querySelector("#btnOrdenarTitulo1" || "#btnOrdenarTitulo2")
const btnOrdenarPrecio = document.querySelector("#btnOrdenarPrecio1" || "#btnOrdenarPrecio2")
const productos = []
const URL = "./js/productos.json"

const obtenerProductos = ()=> {
    fetch(URL)
    .then((response)=> response.json())
    .then((data)=> productos.push(...data))
    .then(()=> cargarProductos(productos))
    .catch(error => {console.error(error)})
}

const cargarProductos = (array)=> { 
    contenedor.innerHTML = ""
    array.forEach(producto => {
        contenedor.innerHTML += retornoCardHTML(producto)        
    })
    clickBotonComprar()
    clickBotonIrCarrito()
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

const ordenarAscendente = (array, atributo)=> {
    return array.sort((a, b)=> {
        let res = 0
        a[atributo] > b[atributo] && (res = 1)
        a[atributo] < b[atributo] && (res = -1)
        return res
    })
}

const ordenarDescendente = (array, atributo)=> {
    return array.sort((a, b) => {
        let res = 0
        a[atributo] < b[atributo] && (res = 1)
        a[atributo] > b[atributo] && (res = -1)
        return res
    })
}

const ordenarProductosTitulo = (array)=> {
    btnOrdenarTitulo.addEventListener("click", ()=> {
        if (btnOrdenarTitulo.id === "btnOrdenarTitulo1") {
            let arrayOrdenado = ordenarAscendente(array, "nombre")
            btnOrdenarTitulo.id = "btnOrdenarTitulo2"
            btnOrdenarTitulo.textContent = "Ordenar alfabeticamente ⬇"
            btnOrdenarPrecio.textContent = "Ordenar por precio"
            cargarProductos(arrayOrdenado)
        } else {
            let arrayOrdenado = ordenarDescendente(array, "nombre")
            btnOrdenarTitulo.id = "btnOrdenarTitulo1"
            btnOrdenarTitulo.textContent = "Ordenar alfabeticamente ⬆"
            btnOrdenarPrecio.textContent = "Ordenar por precio"
            cargarProductos(arrayOrdenado)
        }
    })
}

const ordenarProductosPrecio = (array)=> {
    btnOrdenarPrecio.addEventListener("click", ()=> {
        if (btnOrdenarPrecio.id === "btnOrdenarPrecio1") {
            let arrayOrdenado = ordenarAscendente(array, "precio")
            btnOrdenarPrecio.id = "btnOrdenarPrecio2"
            btnOrdenarPrecio.textContent = "Ordenar por precio ⬇"
            btnOrdenarTitulo.textContent = "Ordenar alfabeticamente"
            cargarProductos(arrayOrdenado)
        } else {
            let arrayOrdenado = ordenarDescendente(array, "precio")
            btnOrdenarPrecio.id = "btnOrdenarPrecio1"
            btnOrdenarPrecio.textContent = "Ordenar por precio ⬆"
            btnOrdenarTitulo.textContent = "Ordenar alfabeticamente"
            cargarProductos(arrayOrdenado)
        }        
    })
}

const clickBotonComprar = ()=> {
    const btnComprar = document.querySelectorAll("button.btn-card")
    for (boton of btnComprar) {
        boton.addEventListener("mouseover",({target:{id}})=> {
            const btn = document.getElementById(id)
            if (btn.innerText === "En carrito") {
                btn.innerText = "Eliminar"
                btn.className = "btn btn-danger enCarrito"
            }
        })

        boton.addEventListener("mouseout",({target:{id}})=> {
            const btn = document.getElementById(id)
            if (btn.innerText === "Eliminar") {
                btn.innerText = "En carrito"
                btn.className = "btn btn-success enCarrito"
            }
        })

        boton.addEventListener("click", ({target:{id}})=> {
            let resultado = productos.find(producto => producto.id === parseInt(id))
            let existe = carrito.findIndex((el) => el.id === parseInt(id))
            if (existe >=0) {
                carrito.splice(existe,1)
                const btn = document.getElementById(id)
                btn.innerText = "Comprar"
                btn.className = "btn btn-primary aComprar"
                guardarCarrito()
                notificacion("Producto eliminado del carrito", "error")

            } else {
                carrito.push(resultado)
                const btn = document.getElementById(id)
                btn.className = "btn btn-success enCarrito"
                btn.innerText = "En carrito"
                guardarCarrito()
                notificacion("Producto agregado al carrito", "success")
            }
        })     
    }
}

const clickBotonIrCarrito = ()=>{
    const btnVerCarrito = document.getElementById("BotonIrCarrito")
    btnVerCarrito.addEventListener("click", ()=> {
        window.location.href = "./checkout.html"
    })
}


obtenerProductos()
recuperarCarrito()
ordenarProductosPrecio(productos)
ordenarProductosTitulo(productos)
buscarProductos(productos)
