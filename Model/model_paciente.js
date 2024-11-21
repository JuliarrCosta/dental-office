import { database_paciente } from "../Database/table_paciente.js"
import { validatorAge, validatorConsulta, validatorDate } from "../Controller/validatorDateHour.js"
import { validateCPF } from "../Controller/validatorCPF.js"
import { validatorName } from "../Controller/validatorName.js"
import { isEqualCPF } from "../Controller/validatorCPF.js"


export function create_paciente(cpf, name, date){
    if(validateCPF(cpf)){
        if(!isEqualCPF(cpf)){
            if(validatorName(name)){
                if(validatorDate){
                    if(validatorAge){
                        database_paciente.Paciente.push(cpf, name, date)
                        return 0
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
// utilizando esse 1 como se fosse um true para fazer a interface dps
export function delete_paciente(cpf){
    if(isEqualCPF(cpf)){
        if(!validatorConsulta(cpf)){
            const index = database_paciente.Paciente.findIndex(paciente => paciente.cpf === cpf)
            if(index !== -1){
                database_paciente.Paciente.splice(index, 1)
                console.log("Paciente deletado com sucesso!")
                return 0
            }
        }else{
            return "Erro: O paciente possui uma consulta agendada!"

        }
    }else{
        return "Erro: Paciente não existe!"
    }
}

