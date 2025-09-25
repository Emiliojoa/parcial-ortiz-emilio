import { AdaptadorInventario, InventarioViejo } from "./class/adapter";



export const runAdapter = async() => {
  const inventarioViejo = new InventarioViejo();
  const adaptador = new AdaptadorInventario(inventarioViejo);
  adaptador.agregarEquipo("Router Cisco", "Red", "Disponible");
  console.log(adaptador.listarEquipos());
};
