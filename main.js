const menuInicial =  "Ingresa la opción deseada: \n" + 
                        "1) Listar videojuegos \n" +
                        "2) Añadir videojuego \n" +
                        "3) Eliminar videojuego \n" +
                        "4) Ordenar lista \n" +
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

const iVA = 0.21
const impuestos = 0.6 + iVA

class Videojuego {
    constructor(titulo, desarollador, precio, generos) {
        this.titulo = titulo
        this.desarrollador = desarollador
        this.precio = parseFloat(precio) 
        this.generos = convertirArray(generos)
        this.formato = "digital"
        this.stock = Infinity
        this.precioReal = this.precio + this.precio*impuestos
    }
}

const vj1 = new Videojuego("Grand Thef Auto 5", "Rockstar", 3000, "accion mundoAbierto multijugador ")
const vj2 = new Videojuego("Valheim", "Iron Gate", 1000, "supervivencia cooperativo mundoAbierto multijugador ")
const vj3 = new Videojuego("Forza Horizon 5", "Microsoft", 6000, "carreras conduccion simulador mundoAbierto multijugador ")
const vj4 = new Videojuego("Need for Speed Heat", "EA", 9000, "carreras conduccion arcade multijugador")
let videojuegos = [vj1, vj2, vj3, vj4]


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
    for (elemento of lista) {
        console.log(elemento)
    };
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
}

function ordenarPor(seleccion) {
    let repetir = true
    switch(seleccion) {
        case "0":
            repetir = false
            break
        case "1":
            ordenarPorTituloAlfabeticamente()
            console.log("Ordenado alfabeticamente")
            break
        case "2":
            ordenarPorPrecio()
            console.log("Ordenado por precio")
            break
        default:
    }
    return repetir  
}

function ordenarListaMenu() {
    repetir = true
    do{
        let seleccion = prompt(menuOrdenar)        
        if (seleccion !== "1" && seleccion !== "2" && seleccion !== "0" ) {
            alert("Debe ingresar un código válido")
        } else {
            repetir = ordenarPor(seleccion)
        }
    } while(repetir)  
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
        console.log(videojuegos)
    } else {
        console.warn("No se encontró el elemento")
    }
}

function eliminarVideojuegosPor(seleccion) {
    let repetir = true
    switch(seleccion) {
        case "0":
            repetir = false
            break
        case "1":
            eliminarPorTitulo()
            break
        case "2":
            eliminarPorIndice()
            break
        default:
    }
    return repetir  
}

function eliminarVideojuegoMenu() {
    repetir = true
    do{
        let seleccion = prompt(menuEliminar)        
        if (seleccion !== "1" && seleccion !== "2" && seleccion !== "0" ) {
            alert("Debe ingresar un código válido")
        } else {
            repetir = eliminarVideojuegosPor(seleccion)
        }
    } while(repetir)  
}

function crearVideojuego() {
    let titulo = prompt("ingrese Título: ")
    let desarrollador = prompt("ingrese Desarrollador: ")
    let precio = prompt("Ingrese el precio: ")
    let generos = (prompt("Ingrese el/los géneros del juego (separados por espacio): ") + " ")
    return (new Videojuego(titulo,desarrollador,precio,generos))
}

function agregarVideojuego() {
    let repetir = true
    do {
        let vj = crearVideojuego()
        let existe = videojuegos.find((v) => v.titulo === vj.titulo)
        if(existe) {
            console.warn("El título ingresado ya existe")
        } else {
            videojuegos.push(vj)
            console.log("Videojuego agregado correctamente")
            console.log(videojuegos.length)
            console.log(videojuegos)
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

function listarVideojuegosPor(seleccion) {
    let repetir = true
    switch(seleccion) {
        case "0":
            repetir = false
            break
        case "1":
            listarTodo()
            break
        case "2":
            buscarPorTitulo()
            break
        case "3":
            filtrarPorDesarrollador()
            break
        case "4":
            filtrarPorGenero()
            break
        default:
    }
    return repetir  
}

function listarVideojuegosMenu() {
    repetir = true
    do{
        let seleccion = prompt(menuListar)        
        if (seleccion !== "1" && seleccion !== "2" && seleccion !== "3" && seleccion !== "4" && seleccion !== "0") {
            alert("Debe ingresar un código válido")
        } else {
            repetir = listarVideojuegosPor(seleccion)
        }
    } while(repetir)  
}

function ejecutarFunción(seleccion) {
    let repetir = true
    switch(seleccion) {
        case "0":
            repetir = false
            break
        case "1":
            listarVideojuegosMenu()
            break
        case "2":
            agregarVideojuego()
            break
        case "3":
            eliminarVideojuegoMenu()
            break
        case "4":
            ordenarListaMenu()
            break
        default:
    }
    return repetir  
}

function main() {
    repetir = true
    do{
        let seleccion = prompt(menuInicial)        
        if (seleccion !== "1" && seleccion !== "2" && seleccion !== "3" && seleccion !== "4" && seleccion !== "0" ) {
            alert("Debe ingresar un código válido")
        } else {
            repetir = ejecutarFunción(seleccion)
        }
    } while(repetir)  
}
