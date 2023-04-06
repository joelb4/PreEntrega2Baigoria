const productos = [
    { id: 0, nombre: "Grand Thef Auto 5", desarrolladora: "Rockstar", precio: 3000, imagen:"images/GTA5.jpg", genero: "accion mundoAbierto multijugador" },
    { id: 1, nombre: "Valheim", desarrolladora: "Iron Gate", precio: 1000, imagen:"images/Valheim.jpg", genero: "supervivencia cooperativo mundoAbierto multijugador" },
    { id: 2, nombre: "Forza Horizon 4", desarrolladora: "Microsoft", precio: 6000, imagen:"images/FH4.jpg", genero: "carreras conduccion simulador mundoAbierto multijugador" },
    { id: 3, nombre: "Need for Speed Heat", desarrolladora: "EA", precio: 5000, imagen:"images/NFSHeat.png", genero: "carreras conduccion arcade multijugador" },
    { id: 4, nombre: "Need for Speed Unbound", desarrolladora: "EA", precio: 9000, imagen:"images/NFSUnbound.png", genero: "carreras conduccion arcade multijugador" },
    { id: 5, nombre: "Minecraft", desarrolladora: "Microsoft", precio: 2000, imagen:"images/Minecraft.png", genero: "supervivencia aventura mundoAbierto sandbox" },
    { id: 6, nombre: "Assassin's Creed Valhalla", desarrolladora: "Ubisoft", precio: 7000, imagen:"images/ACValhalla.jpg", genero: "accion aventura mundoAbierto" },
    { id: 7, nombre: "The Witcher 3: Wild Hunt", desarrolladora: "CD Projekt Red", precio: 3500, imagen:"images/TW3.jpg", genero: "accion aventura mundoAbierto RPG" },
    { id: 8, nombre: "FIFA 22", desarrolladora: "EA", precio: 6000, imagen:"images/FIFA22.jpg", genero: "deportes futbol multijugador" },
    { id: 9, nombre: "Call of Duty: Modern Warfare", desarrolladora: "Activision", precio: 4500, imagen:"images/CoDMW.jpg", genero: "shooter multijugador" },
    { id: 10, nombre: "Red Dead Redemption 2", desarrolladora: "Rockstar", precio: 6500, imagen:"images/RDR2.jpg", genero: "accion mundoAbierto" },
    { id: 11, nombre: "God of War", desarrolladora: "Sony", precio: 4000, imagen:"images/GoW.jpg", genero: "accion aventura" },
    { id: 12, nombre: "The Legend of Zelda: Breath of the Wild", desarrolladora: "Nintendo", precio: 5000, imagen:"images/LoZBW.jpg", genero: "aventura mundoAbierto" },
    { id: 13, nombre: "Horizon Zero Dawn", desarrolladora: "Guerrilla Games", precio: 3500, imagen:"images/HZD.jpg", genero: "accion aventura mundoAbierto" },
    { id: 14, nombre: "Death Stranding", desarrolladora: "Kojima Productions", precio: 5500, imagen:"images/DeathStranding.jpg", genero: "accion aventura" },
    { id: 15, nombre: "Resident Evil Village", desarrolladora: "Capcom", precio: 7000, imagen:"images/ResidentEvilVillage.png", genero: "accion survival horror" }
]

const ordenarAscendente = (array, atributo)=> {
    return array.sort((a, b) => {
        if (atributo === "nombre") {
            if (a[atributo].toUpperCase() > b[atributo].toUpperCase()) {
                return 1
            }
            if (a[atributo].toUpperCase() < b[atributo].toUpperCase()) {
                return -1
            }
            return 0
        } else {
            if (a[atributo] > b[atributo]) {
                return 1
            }
            if (a[atributo] < b[atributo]) {
                return -1
            }
            return 0
        }        
    })
}

const ordenarDescendente = (array, atributo)=> {
    return array.sort((a, b) => {
        if (a[atributo] < b[atributo]) {
            return 1
        }
        if (a[atributo] > b[atributo]) {
            return -1
        }
        return 0
    })
}

