interface Product {
  getDetalles(): string;
}

export class Notebook implements Product {
    private nombre:string
    private ram:string;
    private almacenamiento:string

    constructor(nombre:string, ram:string, almacenamiento:string){
        this.nombre=nombre
        this.ram=ram
        this.almacenamiento=almacenamiento
    }
  getDetalles(): string {
    return `Producto A: ${this.nombre}, RAM: ${this.ram}GB, Almacenamiento: ${this.almacenamiento}GB`;
  }
}

export class Desktop  implements Product {
   private nombre:string
    private ram:string;
    private almacenamiento:string

    constructor(nombre:string, ram:string, almacenamiento:string){
        this.nombre=nombre
        this.ram=ram
        this.almacenamiento=almacenamiento
    }
  getDetalles(): string {
    return `Producto A: ${this.nombre}, RAM: ${this.ram}GB, Almacenamiento: ${this.almacenamiento}GB`;
  }
}


export class Servidor implements Product {
    private nombre:string
    private ram:string;
    private almacenamiento:string

    constructor(nombre:string, ram:string, almacenamiento:string){
        this.nombre=nombre
        this.ram=ram
        this.almacenamiento=almacenamiento
    }
  getDetalles(): string {
    return `Producto A: ${this.nombre}, RAM: ${this.ram}GB, Almacenamiento: ${this.almacenamiento}GB`;
  }
}


export class EquipoFactory {
   public  createProduct(type: string, paran1:string, paran2:string, paran3:string): Product {
    if (type === 'Notebook') {
      return new Notebook(paran1, paran2, paran3);
    } else if (type === 'Desktop ') {
      return new Desktop (paran1, paran2, paran3);
    } else if (type === "Servidor"){
        return new Servidor(paran1,paran2,paran3)
    }
    else{
      throw new Error('Tipo desconocido');
    }
  }
}
