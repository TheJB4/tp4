let inventario  = []

let precios = []


let añadirProducto = () => {
    let pregunta = true;

    while(pregunta){
        let nombreProducto = prompt('Ingrese el nombre del producto')

        if(nombreProducto === null){
            console.log(inventario,precios)
            break
        }

        nombreProducto.toLocaleLowerCase()

        inventario.push(nombreProducto)
    
        let precioProducto = parseInt(prompt(`Ingrese ahora el precio del producto ${nombreProducto}`))
    
        precios.push(precioProducto)

    }
}

let eliminarProducto = (nombreProducto) => {
    let indexProducto = inventario.findIndex(e => e === nombreProducto.toLocaleLowerCase())

    // inventario = inventario.map((e,i) => {
    //     if(i === indexProducto){
    //         e = e + 'Agotado'
    //     }
    // })

    for (let index = 0; index < inventario.length; index++) {
        if(inventario[index] === nombreProducto.toLocaleLowerCase()){
            inventario[index] = `${inventario[index]} Agotadisimo amigo`
            precios[index] = null
        }
        
    }

    // precios = precios.map((e,i) => {
    //     if(i === indexProducto){
    //         e = ''
    //     }
    // })

    console.log(inventario,precios)
}


añadirProducto()
eliminarProducto('Remerita')