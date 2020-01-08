const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true }

const onPeopleResponse = (persona) => {
    console.log(`Hola, yo soy ${persona.name}`)
}

const obtenerPersonaje = (id, callback) => {
    const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $
    .get(lukeUrl, opts, callback)
    .fail( () => {
        console.log(`sucedio un error, no se pudo obtener un personaje del id ${id}`)
    })
}

obtenerPersonaje(1, (persona) => {
    console.log(`Hola, yo soy ${persona.name}`)

    obtenerPersonaje(2, (persona) => {
        console.log(`Hola, yo soy ${persona.name}`)

        obtenerPersonaje(3, (persona) => {
            console.log(`Hola, yo soy ${persona.name}`)

            obtenerPersonaje(4, (persona) => {
                console.log(`Hola, yo soy ${persona.name}`)
            })
        })
    })
})


