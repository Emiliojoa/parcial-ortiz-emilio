// Interfaz Observer
interface IObserver {
  notificar(mensaje: string): void;
}

// Interfaz Subject
interface ISubject {
  agregarObservador(observer: IObserver): void;
  eliminarObservador(observer: IObserver): void;
  notificarObservadores(): void;
}

// Clase Soporte que implementa IObserver
export class Soporte implements IObserver {
  private nombre: string;

  constructor(nombre: string = "Soporte") {
    this.nombre = nombre;
  }

  notificar(mensaje: string): void {
    console.log(`${this.nombre} notificado: ${mensaje}`);
  }
}

// Clase Equipo que implementa ISubject
export class Equipo implements ISubject {
  private observadores: IObserver[] = [];
  private estado: string = "disponible";
  private nombre: string;
  private tipo: string;

  constructor(
    nombre: string,
    tipo: string,
    estadoInicial: string = "disponible"
  ) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.estado = estadoInicial;
  }

  agregarObservador(observer: IObserver): void {
    this.observadores.push(observer);
  }

  eliminarObservador(observer: IObserver): void {
    this.observadores = this.observadores.filter(obs => obs !== observer);
  }

  notificarObservadores(): void {
    const mensaje = `${this.nombre} ha cambiado su estado a ${this.estado}`;
    this.observadores.forEach(observer => observer.notificar(mensaje));
  }

  cambiarEstado(nuevoEstado: string): void {
    this.estado = nuevoEstado;
    this.notificarObservadores();
  }

  getEstado(): string {
    return this.estado;
  }

  getNombre(): string {
    return this.nombre;
  }

  getTipo(): string {
    return this.tipo;
  }
}
