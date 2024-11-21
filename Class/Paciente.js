export class Paciente{

    #cpf;
    #name;
    #dateOfBirth;
    
    constructor(cpf, name, date){
        this.#cpf = cpf
        this.#dateOfBirth = date
        this.#name = name
    }

    get name(){
        return this.#name;
    }
    
    get cpf(){
        return this.#cpf
    }

    get dateOfBirth(){
        return this.#dateOfBirth
    }

    set cpf(cpf){
        this.#cpf = cpf
    }

    set name(name){
        this.#name = name
    }

    set dateOfBirth(date){
        this.#dateOfBirth = date
    }


}