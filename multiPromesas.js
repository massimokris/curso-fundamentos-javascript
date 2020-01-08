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

var ids = [1, 2, 3, 4, 5, 6, 7]
var promesas = ids.map((id) => {
    return obtenerPersonaje(id)
})

//var promesas = ids.map(id => obtenerPersonaje(id))

Promise
    .all(promesas)
    .then(persona => console.log(persona))
    .catch((id) => {
        console.log(`error con el personaje ${id}`)
    })
