const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')
const ULTIMO_NIVEL = 10

/**
 * @class La clase Juego crea nuevas instancia del juego con su logica y secuencia numerica 
 */
class Juego {

    /**
     * @description Constructor de la clase Juego
     */
    constructor () {
        this.inicializar = this.inicializar.bind(this)
        this.inicializar()
        this.generarSecuencia()
        setTimeout(this.siguienteNivel, 500)
    }

    /**
     * @description Inicializador de la clase Juego
     */
    inicializar () {
        //el bind indica que cada vez que llamemos a la funcion el this sera el juego
        this.siguienteNivel = this.siguienteNivel.bind(this)
        this.elegirColor = this.elegirColor.bind(this)
        //toggle agrega o quita la clase indicada al elemento
        btnEmpezar.classList.toggle('hide')
        this.nivel = 1
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde
        }
    }

    /**
     * @description Generar la secuencia numerica a ser utilizada por el Juego
     */
    generarSecuencia () {

        //la funcion fill inicializa los elementos del array
        //random nos da un numero random entre 0 y 1
        //floor redondea un numero hacia abajo
        this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4))
    } 

    /**
     * @description Avanzar de nivel
     */
    siguienteNivel () {
        this.subNivel = 0
        this.agregarEventosClick()
        this.iluminarSecuencia()
    }

    /**
     * @description Conversor de numero a un color determinado
     * @param {numero a convertir} numero 
     */
    numeroAColor (numero) {

        switch (numero) {

            case 0:
                return 'celeste'
            case 1:
                return 'violeta'
            case 2:
                return 'naranja'
            case 3:
                return 'verde'
        }
    }

    /**
     * @description Conversor de color a un numero determinado
     * @param {color a convertir} color 
     */
    colorANumero (color) {

        switch (color) {

            case 'celeste':
                return 0
            case 'violeta':
                return 1
            case 'naranja':
                return 2
            case 'verde':
                return 3
        }
    }

    /**
     * @description Iluminar los elementos indicados por la secuencia
     */
    iluminarSecuencia () {
        for(let i = 0; i < this.nivel; i++){
            const color = this.numeroAColor(this.secuencia[i])
            setTimeout( () => this.iluminarColor(color), 1000 * i)
        }
    }

    /**
     * @description Iluminar un elemento indicado
     * @param {Elemento a iluminar} color 
     */
    iluminarColor (color) {
        this.colores[color].classList.add('light')
        setTimeout( () => this.apagarColor(color), 350)
    }

    /**
     * @description Apagar un elemento indicado
     * @param {Elemanto a apagar} color 
     */
    apagarColor (color) {
        this.colores[color].classList.remove('light')
    }

    /**
     * @description Agregar addEventListener a los elementos del DOM
     */
    agregarEventosClick () {
        this.colores.celeste.addEventListener('click', this.elegirColor)
        this.colores.verde.addEventListener('click', this.elegirColor)
        this.colores.naranja.addEventListener('click', this.elegirColor)
        this.colores.violeta.addEventListener('click', this.elegirColor)
    }

    /**
     * @description Eliminar addEventListener a los elementos del DOM
     */
    eliminarEventosClick () {
        this.colores.celeste.removeEventListener('click', this.elegirColor)
        this.colores.verde.removeEventListener('click', this.elegirColor)
        this.colores.naranja.removeEventListener('click', this.elegirColor)
        this.colores.violeta.removeEventListener('click', this.elegirColor)
    }

    /**
     * @description Tomar el evento del DOM y aplicar la logica del Juego
     * @param {Evento tomado del DOM} ev 
     */
    elegirColor (ev) {
        const nombreColor = ev.target.dataset.color
        const numeroColor = this.colorANumero(nombreColor)
        this.iluminarColor(nombreColor)

        if (numeroColor === this.secuencia[this.subNivel]){
            this.subNivel++
            if (this.subNivel === this.nivel){
                this.avanzasteDeNivel()
                this.nivel++
                this.eliminarEventosClick()
                if(this.nivel === (ULTIMO_NIVEL + 1)){
                    this.ganoElJuego()
                }else{
                    setTimeout(this.siguienteNivel, 3000)
                }
            }
        } else {
            this.perdioElJuego()
        }
    }

    /**
     * @description Alerta indicadora de avance de nivel
     */
    avanzasteDeNivel () {
        swal('Mk Fun', `Bien, avanzaste al nivel ${this.nivel + 1}`, 'success')
    }

    /**
     * @description Alerta indicadora de victoria del juego y relanzar una nueva partida
     */
    ganoElJuego () {
        swal('Mk Fun', 'Genial, ganaste el juego!', 'success')
        .then(this.inicializar)

    }

    /**
     * @description Alerta indicadora de derrota del juego y relanzar una nueva partida
     */
    perdioElJuego () {
        swal('Mk Fun', 'Lastima, perdiste el juego!', 'error')
        .then( () => {
            this.eliminarEventosClick()
            this.inicializar()
        })

    }
}

function empezarJuego () {
    window.juego = new Juego()
}