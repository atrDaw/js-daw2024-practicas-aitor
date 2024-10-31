let persona={
    nombre:"Juan",
    edad:30,
    profesion:"Ingeniero",
    presentarse:function(){
        return `Hola me llamo ${this.nombre} y soy ${this.profesion}`
    },
    cumplirAnios:function(){
        this.edad++;
    }
}

persona.cumplirAnios();
console.log(persona.edad);
