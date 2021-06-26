const express = require('express');
const app = express()

const PORT = process.env.PORT || 5000;

let frutas = [{
    nombre: "Manzana",
    precio: 100,
    existencia: 15,
},{
    nombre: "Pera",
    precio: 150,
    existencia: 10,
},{
    nombre: "Cereza",
    precio: 200,
    existencia: 1,
},{
    nombre: "Platanos",
    precio: 250,
    existencia: 2,
}]

const getPrecio = frutas.map(function(fruta) {
    return {nombre: fruta.nombre,
            existencia: fruta.existencia
    }
})
console.log("mostrar productos en stock", getPrecio)

app.get("/", (req, res) => {
    const subirPrecio = frutas.map(function(fruta) {
        if(fruta.nombre === "Cereza" && fruta.existencia === 1) {
            return {
                ...fruta,
                precio: fruta.precio * 2   
            }
        }
        return fruta
    })
    console.log("subir precio", subirPrecio)
    res.send(subirPrecio)
})











app.listen(PORT, () => {
    console.log(`server on port:`, PORT)
})