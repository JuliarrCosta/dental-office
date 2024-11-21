import { database_paciente } from "../Database/table_paciente"
import { validatorAge, validatorDate } from "../Controller/validatorDateHour"
import { validateCPF } from "../Controller/validatorCPF"
import { validatorName } from "../Controller/validatorName"
import { isEqualCPF } from "../Controller/validatorCPF"

function create_paciente(cpf, name, date){
    if(validateCPF(cpf)){
        if(!isEqualCPF(cpf)){
            if(validatorName(name)){
                if(validatorDate){
                    if(validatorAge){
                        database_paciente.Paciente.push(cpf, name, date)
                        return "Paciente cadastrado!"
                    }else{
                        return "Erro: Paciente não possui data mínima"
                    }
                }else{
                    return "Erro: Formato de data inválido. Escreva: dd/MM/yyyy"
                }
            }else{
                return "Erro: Nome muito curto!"
            }
        }else{
            return "Erro: CPF já existente"
        }
    }else{
        return "Erro: CPF inválido"
    }
}