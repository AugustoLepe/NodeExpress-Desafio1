const fs = require('fs')
const { registrar, leer } = require('./operaciones')

// CREAR ARCHIVO operaciones.js

// const operaciones = ``
// fs.writeFileSync('operaciones.js', operaciones)


// CREAR ARCHIVO citas.json

// const citas = []
// fs.writeFileSync('citas.json', JSON.stringify(citas))


const [operacion, nombre, edad, animal, color, enfermedad] = process.argv.slice(2)

if (operacion === "registrar") {
    registrar(nombre, edad, animal, color, enfermedad)
}
if (operacion === "leer") {
    leer()
}