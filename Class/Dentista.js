class Dentista{
    #name;
    #CRO;

    constructor(name, cro){
        this.#CRO = cro
        this.#name = name;
    }

    get name(){
        return this.#name 
    }

    get cro(){
        return this.#CRO
    }

    set name(name){
        this.#name = name
    }

    set cro(cro){
        this.#CRO = cro
    }
}