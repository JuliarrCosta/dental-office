import { DateTime } from "luxon";
import PromptSync from "prompt-sync";
import { database_consulta } from "../Database/table_consulta.js";

const prompt = PromptSync();

//valida e formata se precisar
export function validatorDate(date){
    const format = "dd/MM/yyyy"
    const dateFormated = DateTime.fromFormat(date, format)
    
    if(dateFormated.isValid){
        return dateFormated.toFormat(format)
    }else{
        return false
    }
}

//redundante a validação da data
export function validatorAge(dateOfBirth){
    const now = DateTime.now()
    const dateFormated = DateTime.fromFormat(dateOfBirth, "dd/MM/yyyy")
    
    if(now.diff(dateFormated, ["years"]).as("years") >= 13){
        return true;
    }else{
        console.log(now.diff(dateFormated, ["years"]).as("years"))
        return false
    }
    

}

// testar
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

export function validatorHourFormated(hour){
    const format = "HH:mm"
    const hourFormated = DateTime.fromFormat(hour, format)
    const max = DateTime.fromFormat("19:00", format)
    const min = DateTime.fromFormat("8:00", format)

    if(hourFormated.isValid){
        if(hour < max || hour > min){
            return true
        }
    }else{
        return false
    }

}

//Já que cada consulta deve ter no máximo 15 minutos, o sistema vai setar automaticamente
export function validatorHourConsulta(input){
    if(validatorHourFormated(input)){
        return input.plus({minutes: 15})
    }
    return false
}

// Testando função

const dateOfBirth = prompt("Data de nascimento(dd/MM/yyyy): ")
console.log(validatorAge(dateOfBirth))

const cpf = prompt("Qual cpf deseja buscar: ")
console.log(validatorConsulta(cpf))
