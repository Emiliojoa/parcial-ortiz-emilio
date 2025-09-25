import { Configuracion } from "./class/single"




export const runSingleton =()=>{
    const conf1= Configuracion.obtenerInstancia()
    const conf2= Configuracion.obtenerInstancia()

    conf1.set("modo","produccion")
    console.log(conf2.get("modo"))
}