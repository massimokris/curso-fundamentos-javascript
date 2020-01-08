const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true }

const onPeopleResponse = (persona) => {
    console.log(`Hola, yo soy ${persona.name}`)
}

const obtenerPersonaje = (id, callback) => {
    const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(lukeUrl, opts, (persona) => {
        console.log(`Hola, yo soy ${persona.name}`)

        if(callback){
            callback()
        }
    })
}

obtenerPersonaje(1, () => {
    obtenerPersonaje(2, () => {
        obtenerPersonaje(3, () => {
            obtenerPersonaje(4)
        })
    })
})


