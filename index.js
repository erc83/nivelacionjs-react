const express = require('express');
const app = express()

const PORT = process.env.PORT || 5000;

let frutas = [{
    nombre: "Manzana",
    precio: 100,
    existencia: 2,
},{
    nombre: "Pera",
    precio: 150,
    existencia: 10,
},{
    nombre: "Cereza",
    precio: 200,
    existencia: 20,
},{
    nombre: "Platanos",
    precio: 250,
    existencia: 5,
}]

const getPrecio = frutas.map(function(fruta) {
    return {nombre: fruta.nombre,
            existencia: fruta.existencia
        }
})
console.log(getPrecio)











app.listen(PORT, () => {
    console.log(`server on port:`, PORT)
})