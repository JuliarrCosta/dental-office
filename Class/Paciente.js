export class Paciente{

    _cpf;
    _name;
    _dateOfBirth;
    
    constructor(cpf, name, date){
        this._cpf = cpf
        this._name = name
        this._dateOfBirth = date
    }

    get name(){
        return this._name;
    }
    
    get cpf(){
        return this._cpf
    }

    get dateOfBirth(){
        return this._dateOfBirth
    }


}