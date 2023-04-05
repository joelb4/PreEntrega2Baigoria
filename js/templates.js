const retornoCardHTML = (producto)=> {
    const existe = carrito.find((e) => e.id === producto.id)
    if (existe !== undefined) {
        return `<div class="col-md-3 mb-4">    
                <div class="card">
                    <img src="https://via.placeholder.com/150" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
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
                    <img src="https://via.placeholder.com/150" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <h5 class="card-text">${producto.desarrolladora}</h5>
                        <p class="card-text">${producto.genero}</p>
                        <h5 class="card-title">$${producto.precio}</h5>
                        <button href="" class="btn btn-primary aComprar" id="${producto.id}">Comprar</button>
                    </div>
                </div>
            </div>`
    }    
}

const retornoCardError = ()=> {
    return `<div class="card-error">
                <h2>Error</h2>
                <h3>Vuelva a intentar</h3>
            </div>`
}

const retornoProductoCarrito = (producto)=> {
    return `<tr id="tr${producto.id}">
                <th scope="row">${producto.id}</th>
                <td>${producto.nombre}</td>
                <td>${producto.desarrolladora}</td>
                <td>$${producto.precio}</td>
                <td><button id="${producto.id}" class="btn btn-dark">X</button></td>
            </tr>`
}