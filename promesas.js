const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true }

const onPeopleResponse = (persona) => {
    console.log(`Hola, yo soy ${persona.name}`)
}

const obtenerPersonaje = (id) => {
    return new Promise( (resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
        .get(url, opts, (data) => {
            resolve(data)
        })
        .fail(() => reject(id))
    })
}

obtenerPersonaje(1)
    .then( (persona) => {
        console.log(`Hola, yo soy ${persona.name}`)
        return obtenerPersonaje(2)
    })
    .then( (persona) => {
        console.log(`Hola, yo soy ${persona.name}`)
        return obtenerPersonaje(3)
    })
    .then( (persona) => {
        console.log(`Hola, yo soy ${persona.name}`)
        return obtenerPersonaje(4)
    })
    .then( (persona) => {
        console.log(`Hola, yo soy ${persona.name}`)
        return obtenerPersonaje(5)
    })
    .then( (persona) => {
        console.log(`Hola, yo soy ${persona.name}`)
        return obtenerPersonaje(6)
    })
    .then( (persona) => {
        console.log(`Hola, yo soy ${persona.name}`)
        return obtenerPersonaje(7)
    })
    .catch( (id) => {
        console.log(`error con el personaje ${id}`)
    })

