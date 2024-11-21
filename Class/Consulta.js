class Consulta{
    #patient;
    #date;
    #input
    #output
    #dentist

    constructor(patient, date, input, output, dentist){
        
        this.#date = date
        this.#patient = patient
        this.#input = input
        this.#output = output
        this.#dentist = dentist
    }

    get patient(){
        return this.#patient;
    }

    get date(){
        return this.#date;
    }

    get input(){
        return this.#input;
    }

    get output(){
        return this.#output;
    }

    get dentist(){
        return this.#dentist;
    }
}
