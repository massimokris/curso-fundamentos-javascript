class Persona {

    constructor (nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar (fn) {
        var {nombre, apellido } = this;
        console.log(`Hola, me llamo ${nombre} ${apellido}`);
        if (fn) {
            fn(nombre, apellido);
        }
    }

    soyAlto () {
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona {

    constructor (nombre, apellido, altura) {
        super(nombre, apellido, altura);
    }

    saludar (fn) {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
        if (fn) {
            fn(this.nombre, this.apellido, true);
        }
    }
}

function responderSaludo (nombre, apellido, esDev) {
    console.log(`Buen dia ${nombre} ${apellido}`);

    if (esDev) {
        console.log(`Ah mira, no sabia que eras dev`);
    }
}

var sacha = new Persona('sacha', 'prof', 1.79);
var pedro = new Persona('pedro', 'lp', 1.56);
var massi = new Desarrollador('massi', 'db', 1.82);

sacha.saludar(responderSaludo);
pedro.saludar();
massi.saludar(responderSaludo);