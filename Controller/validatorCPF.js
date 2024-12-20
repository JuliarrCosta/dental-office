import PromptSync from "prompt-sync";
import CPF from 'cpf-check';
import { database_paciente } from "../Database/table_paciente.js";

/** Link da biblioteca: https://github.com/flasd/cpf-check#readme  */
const prompt = PromptSync()

export function validateCPF(cpf){  
    const cpfFormated = CPF.validate(CPF.strip(cpf))
    if(cpfFormated){
        return true;
    } else{
        return false
    }
}

//usar esse método também para verificar cpf no bd
// metodo com nome estranho, alterar dps
export function isEqualCPF(cpf){
    database_paciente.Paciente.forEach( paciente => {
        if(CPF.strip(paciente.cpf) === CPF.strip(cpf)){
            return true;
        }
    })
    return false;
}

//criar função para ver se o dentista existe, teoricamente teria que verificar se o dentista está disponível. Porém vou tratar apenas existindo um dentista

//const cpf = prompt("Digite o cpf")
//console.log(validateCPF(cpf), isEqualCPF(cpf))