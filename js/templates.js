const retornoCardHTML = (producto)=> {
    const existe = carrito.find((e) => e.id === producto.id)
    if (existe !== undefined) {
        return `<div class="col-md-3 mb-4">    
                <div class="card">
                    <img src="./${producto.imagen}" class="card-img-top" alt="...">
                    <div class="card-body text-center table-dark">
                        <h4 class="card-title">${producto.nombre}</h4>
                        <h5 class="card-text">${producto.desarrolladora}</h5>
                        <p class="card-text">${producto.genero}</p>
                        <h5 class="card-title">$${producto.precio}</h5>
                        <button href="" class="btn btn-success enCarrito" id="${producto.id}">En carrito</button>
                    </div>
                </div>
            </div>`
    } else {
        return `<div class="col-md-3 mb-4">    
                <div class="card">
                    <img src="./${producto.imagen}" class="card-img-top" alt="...">
                    <div class="card-body text-center table-dark">
                        <h4 class="card-title">${producto.nombre}</h4>
                        <h5 class="card-text">${producto.desarrolladora}</h5>
                        <p class="card-text">${producto.genero}</p>
                        <h5 class="card-title">$${producto.precio}</h5>
                        <button href="" class="btn btn-primary aComprar" id="${producto.id}">Comprar</button>
                    </div>
                </div>
            </div>`
    }    
}

// const retornoCardError = ()=> {
//     return `<div class="card-error">
//                 <h2>Error</h2>
//                 <h3>Vuelva a intentar</h3>
//             </div>`
// }
const retornoCompraRealizada = (subtotal)=> {
    return `<h2 class="pt-4">Gracias por comprar en PlayNation!</h2>
            <h4>Gasto total: $${subtotal}</h4>
            <p>Consulta tus juegos en la biblioteca</p>
            <p>Seguir comprando</p>
            <p></p>
    `
}

const retornoErrorCarritoVacio = ()=> {
    return `<h2 class="pt-4">El carrito está vacío!</h2>
            <h4>Selecciona los juegos que quieras comprar en el catálogo</h4>
            <h4>Consulta tus juegos en la biblioteca</h4>
    `
}

const retornoConfirmarCompra = (subtotal)=> {
    return `<h1>¿Desea confirmar la compra por $${subtotal}?</h1>
            <button href="" class="btn btn-success col-sm-6" id="confirmar">COMPRAR</button>
            <button href="" class="btn btn-danger col-sm-6" id="cancelar">CANCELAR</button>
    `
}

const retornoProductoCarrito = (producto)=> {
    return `<tr id="tr${producto.id}">
                <th scope="row">${producto.nombre}</th>
                <td>${producto.desarrolladora}</td>
                <td>$${producto.precio}</td>
                <td><button id="${producto.id}" class="btn btn-dark">X</button></td>
            </tr>`
}