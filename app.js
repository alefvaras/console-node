const { guardarDb, leerDb } = require('./helpers/guardarArchivo');
const { inquirerMenu, inquirerPausa, leerInput, listBorrar, confirmar, mostarListadoChecklist } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

require('colors');
// const { mostrarMenu, pausa } = require('./helpers/mensajes');




const main = async () => {

    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDb();
    if (leerDb) {
        tareas.cargarTareaFromArray(tareasDB);
    }



    do {
        //   opt=  await mostrarMenu();
        opt = await inquirerMenu();
        //   console.log(({opt}))



        switch (opt) {

            case '1':
                const desc = await leerInput('Descripcion:')
                tareas.creatTarea(desc);
                break;
            case '2':

                tareas.listadoCompletos();
                break;
            case '3':
                tareas.listarPendientesCompletadas();
                break;
            case '4':
                tareas.listarPendientesCompletadas(false);
                break;
            case '5':
               const ids= await mostarListadoChecklist(tareas.listadoArr);
               tarea.toogleCompletadas(ids);
                break;
            case '6':

                const id = await listBorrar(tareas.listadoArr);

                if(id!=='0'){
                    const conf = await confirmar('estas seguro?');

                    if (conf) {
                        tareas.borrarTarea(id);
                        console.log('tarea borrada')
                    }
                }
               
                break;
            case '0':

                break;




        }

        guardarDb(tareas.listadoArr);

        await inquirerPausa();




        //   if(opt!=='0') await pausa();


    } while (opt !== '0')


}


main();
