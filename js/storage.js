const carrito = []

const guardarCarrito = ()=> {
        localStorage.setItem("carrito", JSON.stringify(carrito))
}

const recuperarCarrito = ()=> {
    const carritoGuardado = JSON.parse(localStorage.getItem("carrito"))
    carritoGuardado !== null ? carrito.push(...carritoGuardado) : carrito.pop
}