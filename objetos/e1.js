let persona={
    nombre:"Juan",
    edad:30,
    profesion:"Ingeniero",
    presentarse:function(){
        return `Hola me llamo ${this.nombre} y soy ${this.profesion}`
    }
}

console.log(persona.presentarse())