/*

Objeto "Lista de Tareas": 
Crea un objeto listaTareas con una propiedad 
tareas que sea un array de tareas, y métodos como agregarTarea, 
completarTarea y listarTareas 
que realicen acciones sobre la lista de tareas.

*/

let listaTareas = {
    tareas: [{ tarea: 'hacerTarea', completed: false }, { tarea: 'Sepillar dientes', completed: false }, { tarea: 'pagar cuentas', completed: false }],
    agregarTarea: (nuevaTarea) => {
        this.tareas.push({ tarea: nuevaTarea, completed: false })
    },
    completarTarea: (nombreTarea) => {
        this.tareas.forEach(e => {
            if(e.tarea === nombreTarea){
                e.completed = true
            }
        })
    },
    listaTareas: () =>{
        this.tareas.forEach(e => {
            console.log(e)
        })
    }
}