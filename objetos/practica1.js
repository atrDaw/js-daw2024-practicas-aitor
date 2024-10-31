function Punto(x, y) {
    if (isNaN(x)) {
        this.x = 0;
    } else {
        this.x = x;
    }
    if (isNaN(y)) {
        this.y = 0;
    } else {

        this.y = y;
    }
    this.cambiar = function (n1, n2) {
        this.x = n1;
        this.y = n2;
    }
    this.copia = function () {
        return new Punto(this.x, this.y);
    }
    this.suma = function (P) {
        return new Punto(this.x + P.x, this.y + P.y)
    }
}
//instanciamos 2 puntos diferentes
let punto1 = new Punto("hola", 20)
let punto2 = new Punto(5, 15)

console.log(punto1)
console.log(punto2)

//usamos cambiar para comprobar que funciona el metodo cambiar
punto1.cambiar(45,78)
console.log(punto1)

//instanciamos un tercer punto copia de punto1
let punto3=punto1.copia()
console.log(punto3)

//instanciamos un cuarto punto suma de punto1 y punto2
let puntoSuma=punto1.suma(punto2)
console.log(puntoSuma)