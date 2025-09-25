interface IInventarioNuevo {
  agregarEquipo(nombre: string, tipo: string, estado: string): void;
}

export class InventarioViejo {
  private equipos: { nombre: string, tipo: string, estado: string }[] = [];
  public addItem(nombre: string, tipo: string, estado: string): void {
    this.equipos.push({ nombre, tipo, estado });
  }
  public getItems(): { nombre: string }[] {
    return this.equipos;
  }
}

export class AdaptadorInventario implements IInventarioNuevo {
  private adapter: InventarioViejo;

  constructor(adapter: InventarioViejo) {
    this.adapter = adapter;
  }

  public agregarEquipo(nombre: string, tipo: string, estado: string): void {
    this.adapter.addItem(nombre, tipo, estado);
  }
  public listarEquipos() {
    return this.adapter.getItems();
  }
}

