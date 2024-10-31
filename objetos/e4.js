function Coche(marca,modelo,anyo){
    this.marca=marca;
    this.modelo=modelo;
    this.anyo=anyo;
    this.detalles=function(){
        return `Marca: ${this.marca} Modelo: ${this.modelo} Año: ${this.anyo}`;
    }
}

let c1=new Coche("seat","leon",1990)
let c2=new Coche("Lamborghini","gallardo",2005)

console.log(c1.detalles())
console.log(c2.detalles())