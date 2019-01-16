const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tare por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'

};




const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'borrar una tarea', {
        descripcion,
        completado
    })
    .help()
    .argv;

module.exports = {
    argv
}