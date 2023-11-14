/*
Gestión de proyectos en una empresa: 
Tienes dos arrays, uno para los nombres de proyectos y 
otro para los estados de los proyectos. 
Debes crear funciones que permitan agregar nuevos proyectos, 
cambiar el estado de un proyecto, 
asignar un responsable y generar un resumen de proyectos en curso.

*/

let proyectos = ['ROLLINGPT-3','TUCUARDINO','VENTADEORGANOS']
let estadoProyectos = ['EN CURSO','EN CURSO','TERMINADO']
let responsable = []

let agregarProyecto = (nombre) => { 
    proyectos.push(nombre)
    estadoProyectos.push('EN CURSO')
}

let cambiarEstado = (nombreProyecto,estadoNuevo) => {
    let index = proyectos.indexOf(nombreProyecto)
    estadoProyectos[index] = estadoNuevo
}

let asignarResponsable = (nombreProyecto,nombreResponsable) => {
    let index = proyectos.indexOf(nombreProyecto)
    responsable[index] = nombreResponsable
}

let resumen = () => {
    console.log('Los proyectos que estan en curso son: ')
    for (let index = 0; index < estadoProyectos.length; index++) {
        if(estadoProyectos[index].includes('EN CURSO')){
            console.log(proyectos[index])
        }
        
    }
}

resumen()

// console.log(proyectos,estadoProyectos,responsable)
// asignarResponsable('VENTADEORGANOS','javier milei')
// console.log(proyectos,estadoProyectos,responsable)
// console.log(proyectos,estadoProyectos)

// cambiarEstado('TUCUARDINO','TERMINADO')

// console.log(proyectos,estadoProyectos)

