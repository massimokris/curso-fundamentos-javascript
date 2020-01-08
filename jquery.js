const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = { crossDomain: true }

const onPeopleResponse = (persona) => {
    console.log(`Hola, yo soy ${persona.name}`)
}

const obtenerPersonaje = (id) => {
    const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(lukeUrl, opts, onPeopleResponse)
}

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)
