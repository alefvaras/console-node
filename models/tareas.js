const Tarea = require("./tarea");

class Tareas {

    _listado = {};


    get listadoArr() {
        const listado = [];

        Object.keys(this._listado).forEach(key => {

            const tarea = this._listado[key];
            listado.push(tarea);
        });

        return listado;
    }

    constructor() {
        this._listado = {};
    }

    cargarTareaFromArray(tareas = []) {

        tareas.map(x => {
            this._listado[x.id] = x;
        })


    }

    listadoCompletos() {

        console.log()
        this.listadoArr.forEach((tarea, i) => {
            const idx = `${i + 1}`.green
            const { desc, completadoEb } = tarea;

            const estado = (completadoEb) ? 'completado'.green : 'pendiente'.red
            console.log(`${idx} ${desc} :: ${estado}`)

        })

    }

    listarPendientesCompletadas(completadas = true) {

        if (completadas) {
            const arr = this.listadoArr.filter(({ completadoEb }) => completadoEb != null);

            arr.forEach((tarea, i) => {
                const idx = `${i + 1}`.green
                const { desc } = tarea;
                console.log(`${idx} ${desc} :: ${'completado'.green} ${tarea.completadoEb}`);

            })

        } else {
            const arr = this.listadoArr.filter(({ completadoEb }) => completadoEb == null);

            arr.forEach((tarea, i) => {
                const idx = `${i + 1}`.green
                const { desc } = tarea;
                console.log(`${idx} ${desc} :: ${'pendiente'.red}`);

            })
        }

    }


    borrarTarea(id = '') {
        if (this._listado[id]) {
            delete this._listado[id];
        }

        toogleCompletadas(ids = []){

            ids.forEach(id => {
                const tarea = this._listado[id];
                if (!tarea.completadoEb) {
                    tarea.completadoEb = new Date().toISOString();
                }

            })

this.listadoArr.forEach(tarea=>{
    if(!id.includes(tarea.id)){
        const tarea= this._listado[tarea.id];
        tarea.completadoEb=null;
    }
})

        }


    }

    creatTarea(desc = '') {

        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;


    }

}

module.exports = Tareas;