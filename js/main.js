const menuInicial =  "Ingresa la opción deseada: \n" + 
                        "1) Listar videojuegos \n" +
                        "2) Añadir videojuego \n" +
                        "3) Eliminar videojuego \n" +
                        "4) Ordenar lista \n" +
                        "5) Comprar \n" +
                        "0) Salir \n"

const menuListar =  "Ingresa la opción deseada: \n" + 
                        "1) Listar todo \n" +
                        "2) Buscar por título \n" +
                        "3) Listar por desarrollador \n" +
                        "4) Listar por género \n" +
                        "0) Salir \n"

const menuEliminar =  "Ingresa la opción deseada: \n" + 
                        "1) Eliminar por título \n" +
                        "2) Eliminar por índice \n" +
                        "0) Salir \n"

const menuOrdenar =  "Ingresa la opción deseada: \n" + 
                        "1) Ordenar alfabeticamente \n" +
                        "2) Ordenar por precio \n" +
                        "0) Salir \n"

const sino = "¿Desea continuar? \n" +
            "1) SI \n" +
            "2) NO \n" 

const mensajeCompra = 
"1) Continuar comprando \n" +
"2) Finalizar compra \n" +
"3) Cancelar compra \n" 


const menuInicio = [listarVideojuegosMenu,agregarVideojuego,eliminarVideojuegoMenu,ordenarListaMenu,comprar]
const menuListado = [listarTodo,buscarPorTitulo,filtrarPorDesarrollador,filtrarPorGenero]
const menuBorrrar = [eliminarPorTitulo,eliminarPorIndice]
const menuOrdenado = [ordenarPorTituloAlfabeticamente,ordenarPorPrecio]

const iVA = 0.21
const impuestos = 0.6 + iVA

class Videojuego {
    constructor(id, titulo, desarollador, precio, generos) {
        this.id = id
        this.titulo = titulo
        this.desarrollador = desarollador
        this.precio = parseFloat(precio) 
        this.generos = convertirArray(generos)
        //this.formato = "digital"
        //this.stock = Infinity
        this.precioReal = this.precio + this.precio*impuestos
    }
}

class Compra {
    constructor(carrito) {
        this.carrito = carrito
    }
    obtenerPrecio() {
        if (carrito.length > 0) {
            return this.carrito.reduce((a,vj) => a + vj.precioReal, 0)
        } else {
            return "Carrito vacío"
        }
    }
    confirmarCompra() {
        if (typeof(this.obtenerPrecio()) !== "string") {
            return "Se ha realizado el pago de $" + this.obtenerPrecio()
        } else {
            return "Error"
        }
    }
}

const vj1 = new Videojuego(0,"Grand Thef Auto 5", "Rockstar", 3000, "accion mundoAbierto multijugador ")
const vj2 = new Videojuego(1,"Valheim", "Iron Gate", 1000, "supervivencia cooperativo mundoAbierto multijugador ")
const vj3 = new Videojuego(2,"Forza Horizon 5", "Microsoft", 6000, "carreras conduccion simulador mundoAbierto multijugador ")
const vj4 = new Videojuego(3,"Need for Speed Heat", "EA", 5000, "carreras conduccion arcade multijugador")
const vj5 = new Videojuego(4,"Need for Speed Unbound", "EA", 9000, "carreras conduccion arcade multijugador")
const vj6 = new Videojuego(5,"Minecraft", "Microsoft", 2000, "supervivencia aventura mundoAbierto sandbox")
let videojuegos = [
    vj1, 
    vj2, 
    vj3, 
    vj4,
    vj5,
    vj6
]
let carrito = []

function convertirArray(string) {
    let array = []
    let palabra = ""
    for (let i = 0; i < string.length; i++) {
        if(string.charAt(i) ==" ") {
            array.push(palabra)
            palabra = ""
        } else {            
            palabra += string.charAt(i)
        }        
    }
    return array
}

function listarElementos(lista) {
    console.table(lista)
}

function buscarPorID(id) {
    return videojuegos.find((vj) => vj.id == id)
}

function verCarrito() {
    if (carrito.length === 0) {
        console.log("Carrito Vacío")
    } else {
        console.table(carrito)
    }
}

function comprar() {
    let id = parseInt(prompt("Ingrese el id del videojuego: "))
    let articulo = buscarPorID(id)
    if (articulo == undefined) {
        alert("El id ingresado no existe")
        let continuar = parseInt(prompt(mensajeCompra))
        if (continuar === 1) {
            comprar()
        } else {
            if (continuar === 2) {
                finalizarCompra()
            } else {
                carrito.length = 0
                alert("Compra cancelada")
            }
        }
    } else {
        carrito.push(articulo)
        let continuar = parseInt(prompt(mensajeCompra))
        if (continuar === 1) {
            comprar()
        } else {
            if (continuar === 2) {
                finalizarCompra()
            } else {
                carrito.length = 0
                alert("Compra cancelada")
            }
        }
    }
}

function finalizarCompra() {
    if(carrito.length === 0) {
        alert("No se pudo realizar la compra, carrito vacío")
    } else {
        let compra = new Compra(carrito)
        if(confirm("El costo total es de $" + compra.obtenerPrecio() + ". \n ¿Desea confirmar la compra?")) {
            console.log("Productos comprados: ")
            console.table(carrito)
            alert(compra.confirmarCompra())
            carrito.length = 0
        }
    }
}

function ordenarPorPrecio() {
    videojuegos.sort((a, b) => {
        if (a.precio > b.precio) {
            return 1
        }
        if (a.precio < b.precio) {
            return -1
        }
        return 0
    })
    console.log("Se ha ordenado correctamente")
    console.table(videojuegos)
}

function ordenarPorTituloAlfabeticamente() {
    videojuegos.sort((a, b) => {
        if (a.titulo > b.titulo) {
            return 1
        }
        if (a.titulo < b.titulo) {
            return -1
        }
        return 0
    })
    console.log("Se ha ordenado correctamente")
    console.table(videojuegos)
}

function ordenarListaMenu() {
    menu(menuOrdenado,menuOrdenar)
}

function eliminarPorIndice() {
    let indice = prompt("Ingrese el índice del primer elemento a eliminar: ")
    let cantidad = prompt("Ingrese la cantidad de elementos a eliminar: ")
    videojuegos.splice(indice,cantidad)
    console.log("Se han eliminado los elementos")
    console.log(videojuegos.length)
    console.log(videojuegos)
}

function eliminarPorTitulo() {
    let titulo = prompt("Ingrese el título a eliminar: ")
    let indice = videojuegos.findIndex(vj => vj.titulo == titulo)
    if(indice >=0) {
        videojuegos.splice(indice,1)
        console.log("Videojuego eliminado con éxito")
        console.log(videojuegos.length)
        console.table(videojuegos)
    } else {
        console.warn("No se encontró el elemento")
    }
}

function eliminarVideojuegoMenu() {
    menu(menuBorrrar,menuEliminar)
}

function crearVideojuego() {
    let titulo = prompt("ingrese Título: ")
    let desarrollador = prompt("ingrese Desarrollador: ")
    let precio = prompt("Ingrese el precio: ")
    let generos = (prompt("Ingrese el/los géneros del juego (separados por espacio): ") + " ")
    return (new Videojuego(-1,titulo,desarrollador,precio,generos))
}

function agregarVideojuego() {
    let repetir = true
    do {
        let vj = crearVideojuego()
        let existe = videojuegos.find((v) => v.titulo === vj.titulo)
        if(existe) {
            console.warn("El título ingresado ya existe")
        } else {
            vj.id = videojuegos.length
            videojuegos.push(vj)
            console.log("Videojuego agregado correctamente")
            console.log(videojuegos.length)
            console.table(videojuegos)
        }
        let deseaRepetir = prompt(sino)
            if (deseaRepetir !== "1") {
                repetir = false
            }  
    } while (repetir);

}

function listarTodo() {
    listarElementos(videojuegos)
}

function buscarPorTitulo() {
    let titulo = prompt("Ingrese el título: ")
    let vj = videojuegos.find((element) => element.titulo.includes(titulo))
    if (vj !== undefined) {
        console.log(vj)
    } else {
        console.warn("No se encontró el título")
    }  
}

function filtrarPorDesarrollador() {
    let desarrollador = prompt("Ingrese el desarrollador: ")
    let lista = videojuegos.filter((vj) => vj.desarrollador.includes(desarrollador))
    if (lista.length>0) {
        listarElementos(lista)
    } else {
        console.warn("No hay coincidencias")
    }    
}

function filtrarPorGenero() {
    let genero = prompt("Ingrese el género: ")
    let lista = videojuegos.filter(vj => vj.generos.find((element) => element.includes(genero)))
    if (lista.length>0) {
        listarElementos(lista)
    } else {
        console.warn("No hay coincidencias")
    }  
}

function listarVideojuegosMenu() {
    menu(menuListado,menuListar)
}

function main() {
    menu(menuInicio,menuInicial) 
}

function menu(array,mensaje) {
    let repetir = true 
    do {
        let seleccion = parseInt(prompt(mensaje))
        if (seleccion === 0) {
            repetir = false
        } else {
            if (array[seleccion-1] !== undefined) {
                array[seleccion-1]()
            } else {
                alert("Debe ingresar un código válido")
            }
        }
    } while (repetir);
}