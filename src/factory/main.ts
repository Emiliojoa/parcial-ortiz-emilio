import { EquipoFactory } from "./class/factory"




export const runFactory=async()=>{
    const factory = new EquipoFactory()
    const server = factory.createProduct("Servidor", "dell Poweredge","32gb","xeon")
    console.log(server.getDetalles())
}