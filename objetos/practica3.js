class Ordenador {
  constructor(marca, modelo, ram = 4, discoDuro = 512, pulgadas = 17) {
    this.marca = marca;
    this.modelo = modelo;
    this.ram = ram;
    this.discoDuro = discoDuro;
    this.pulgadas = pulgadas;
  }

  toString() {
    return `Ordenador:\nMarca: ${this.marca}\nModelo: ${this.modelo}\nRAM: ${this.ram} GB\nDisco Duro: ${this.discoDuro} GB\nTamaño de Pantalla: ${this.pulgadas} pulgadas`;
  }
}

class Portatil extends Ordenador {
    constructor(marca, modelo, ram = 4, discoDuro = 256, pulgadas = 12, autonomia = 4) {
        super(marca, modelo, ram, discoDuro, pulgadas);
        this.autonomia = autonomia;
    }
    toString(){
        return super.toString()+"\nAutonomía: "+this.autonomia+" h."
    }
}

let miPc = new Ordenador('timo', 'malo', 4, 45, 34);
console.log(miPc.toString());
console.log()
let miLaptop= new Portatil('peque','ñito',5,678,1,6)
console.log(miLaptop.toString())
