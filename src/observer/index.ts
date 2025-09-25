import { Soporte, Equipo } from "./class/observer";



export const runSoporte=async()=>{
const soporte = new Soporte();

const equipo = new Equipo("Notebook HP", "Portátil", "disponible");

equipo.agregarObservador(soporte);

equipo.cambiarEstado("en reparación");


}
