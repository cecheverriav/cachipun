function Iniciar() {
    let numero = parseInt(prompt("Ingrese el número de jugadas"))
    juego(numero);
}

juegoMaquina = () => {
    let numero = Math.floor(Math.random()*3)
    if (numero == 0) {
        return "Piedra"
    }
    if (numero == 1) {
        return "Papel"
    }
     
    if (numero == 2) {
        return "Tijera"
    }
}

juego = (numero) => {
    for (let i = 1; i <= numero; i++) {
        console.log("Jugada #" + i)

        let jugada = prompt("Ingrese una jugada: Piedra, Papel o Tijera")
        let jugada_maquina = juegoMaquina();
        console.log("La máquina sacó " + jugada_maquina);

        if (jugada == jugada_maquina) {
            console.log("Empate")
            alert("Empate")
        }

        if (jugada == "Piedra") {
            if (jugada_maquina == "Papel") {
                console.log("Gana máquina Papel > Piedra")
                alert("Ohh perdiste contra la máquina")
            }
            if (jugada_maquina == "Tijera") {
                console.log("Gana usuario Piedra > Tijera")
                alert("Felicidades! ganaste")
            }
        }

        if (jugada == "Papel") {
            if (jugada_maquina == "Piedra") {
                console.log("Gana usuario Papel > Piedra")
                alert("Felicidades! ganaste")
            }
            if (jugada_maquina == "Tijera") {
                console.log("Gana máquina Tijera > Papel")
                alert("Ohh perdiste contra la máquina")
            }
        }

        if (jugada == "Tijera") {
            if (jugada_maquina == "Piedra") {
                console.log("Gana máquina Piedra > Tijera")
                alert("Ohh perdiste contra la máquina")
            }
            if (jugada_maquina == "Papel") {
                console.log("Gana usuario Tijera > Papel")
                alert("Felicidades! ganaste")
            }
        }
    }
}
