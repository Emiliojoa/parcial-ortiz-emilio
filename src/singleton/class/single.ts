


export class Configuracion {
    private static instance: Configuracion;
    private equipos:{modo:string, prduccion:string}[]=[]
  private constructor() {}

  public static obtenerInstancia(): Configuracion {
    if (!Configuracion.instance) {
      Configuracion.instance = new Configuracion();
    }
    return Configuracion.instance;
  }

  // Métodos adicionales aquí
  public set(modo:string,prduccion:string): void {
    this.equipos.push({modo,prduccion})
    console.log('Método del Configuracion');
  }

  public get(){
    return this.equipos
  }
}