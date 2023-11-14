/*
Registro de notas de estudiantes: 
Tienes dos arrays, uno con nombres de estudiantes y 
otro con sus respectivas notas en un curso. 
Debes crear funciones que calculen el promedio de notas por estudiante
 y muestren un resumen con los nombres de los estudiantes que 
 aprobaron y reprobaron el curso.
*/

let estudiantes = ['Juan','Roberto','Florencia']
let notas = [5.50,6,9.50]

let promedio = (notas) => {
    let total = notas.reduce((prev,actual)=> prev + actual)

    return total / notas.length
}


let resumen = (notas,estudiantes) => {
    console.log(`El promedio total es: ${promedio(notas)}`)

    console.log('Los estudiantes que aprobaron son: ')
    for (let index = 1; index < notas.length; index++) {
        if(notas[index] >= 6){
            console.log(estudiantes[index])
        }
        
    }
}

resumen(notas,estudiantes)