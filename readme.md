Desafío - Nivelación JS

Habilidades a evaluar
●   Construye una aplicación, incorporando un listado de objetos cuyas características
    interactúan entre ellas.

Descripción
La familia Santaolalla tiene un puesto en la feria, que vende frutas y verduras. Tiene tantos productos que se les olvida qué productos tienen, lo que demora la atención a los clientes y a veces ofrecen productos que ya se les han acabado. Por lo que nos piden a nosotros que
implementemos una aplicación sencilla que les permita:

● Mostrar con console.log cuántos productos quedan en stock.
● Subir el precio de los productos cuando quede poca existencia (modiﬁcar el precio de un producto cuando algún producto tenga una existencia).
● Averiguar si pueden vender un producto (si hay suﬁciente en stock).
● Saber cuánto es el valor total de los productos.

Requerimientos

    1.  Para la declaración de variables se debe utilizar const, es posible el uso de let, pero
        se debe justiﬁcar la razón por la que no fue posible realizarlo con const. (1 Punto)
    
    2.  Utilizar métodos del Array. (1 Punto)
        ● Para cambiar valores a objetos dentro del Array utilizar map.
        ● Para ﬁltrar elementos utilizar ﬁlter.
        ● Para hacer busqueda de algun elemento utilizar ﬁnd o ﬁndIndex.
        ● Para averiguar si algún producto o todos los productos cumplen con alguna condición utilizar some o every.
    
    3. Utilizar funciones asíncronas. (3 Puntos)
        Simular al menos una vez un código asíncrono con Async/Await. Para esto se puede utilizar setTimeout para simular un código que no retorne inmediatamente el resultado.
    
    4. Calcular totales con métodos de array. (2 Puntos)
        Para calcular totales se debe utilizar reduce donde se debe sumar los valores de cada producto y luego retornar el total.

    5. Manejar errores con throw y Error. (2 Puntos) Simular errores, ejemplo:
        ● Al buscar un elemento y que no existe retornar un error y manejarlo
        ● Al validar algún elemento si la validación es incorrecta, retornar un error y manejarlo
    
    6. Conﬁgurar con Git/npm el código alojado en Github. (1 Punto)
        El código ﬁnal se debe subir a Github y se debe iniciar con el comando npm run start.