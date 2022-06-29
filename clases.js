function Saludar(){
    this.name = "",
    this.apellido = "",
    this.saludarPersona = function(){
        return console.log(`Hola ${this.name} ${this.apellido}`)
    }
    this.saldoActual = function(misaldo){
        return console.log(`Tu saldo actual es de: ${misaldo}`)
    }

    this.enCeros = function(){
        if(this.misaldo === 0){
            console.log("Ahora no tiene nada")
        }
    }
}

const persona = new Saludar()
persona.name = "Kevin"
persona.apellido =  "Luciano"
persona.misaldo= 4000

const ucamper = new Saludar()
ucamper.name = "Hugo"
ucamper.apellido = "García"

persona.saludarPersona();
ucamper.saludarPersona();

persona.saldoActual(persona.misaldo);

function retirar(cantidad){
    persona.misaldo = persona.misaldo - cantidad
}

retirar(1500); //2500

persona.saldoActual(persona.misaldo);

retirar(2000); //500

persona.saldoActual(persona.misaldo);

retirar(500); //0

persona.saldoActual(persona.misaldo);

if(persona.misaldo === 0){
    persona.enCeros();
}