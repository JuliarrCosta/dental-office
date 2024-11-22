import { DateTime } from "luxon";
import PromptSync from "prompt-sync";
import { database_consulta } from "../Database/table_consulta.js";

const prompt = PromptSync();

//valida e formata se precisar [TESTADA]

export function validatorDate(date){
    const format = "dd/MM/yyyy"
    const dateFormated = DateTime.fromFormat(date, format)
    
    if(dateFormated.isValid){
        return dateFormated.toFormat(format)
    }else{
        return false
    }
}

//redundante a validação da data [TESTADA]
export function validatorAge(dateOfBirth){
    const now = DateTime.now()
    const dateFormated = DateTime.fromFormat(dateOfBirth, "dd/MM/yyyy")
    
    if(now.diff(dateFormated, ["years"]).as("years") >= 13){
        return true;
    }else{
        return false
    }
    

}

// [TESTADA]
export function validatorConsulta(cpf){
    
    const format = "dd/MM/yyyy"
    const now = DateTime.now().toFormat(format)

    for(let consulta of database_consulta.Consulta){
        const dateFormated = validatorDate(consulta.date)
        if(DateTime.fromFormat(dateFormated, format) > DateTime.fromFormat(now, format) && consulta.patient.cpf === cpf){
            return true
        }
    }
    return false
}

// [TESTADA]
export function validatorHourFormated(hour){
    const format = "HH:mm"
    const hourFormated = DateTime.fromFormat(hour, format)
    const max = DateTime.fromFormat("19:00", format)
    const min = DateTime.fromFormat("8:00", format)
    if(hourFormated.isValid){
        if(hourFormated < max|| hourFormated > min ){
            return true
        }
    }else{
        return false
    }

}

//Já que cada consulta deve ter no máximo 15 minutos, o sistema vai setar automaticamente [TESTADA]
export function validatorHourConsulta(input){
    const format = "HH:mm"
    const hourFormated = DateTime.fromFormat(input, format)
    const output = hourFormated.plus({minutes: 15}).toFormat("HH:mm")
    
    return output
    
}
// criar função para saber se os minutos são multiplos de 15 ou integrar na função hourFormated


// Testando função
//const dateOfBirth = prompt("Data de nascimento(dd/MM/yyyy): ")
//console.log(validatorAge(dateOfBirth))

//const cpf = prompt("Qual cpf deseja buscar: ")
//console.log(validatorConsulta(cpf))

//const hora = prompt("Digite a hora: \n")
//console.log(validatorHourConsulta(hora))
//console.log(validatorHourFormated(hora))