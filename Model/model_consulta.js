import { isEqualCPF } from "../Controller/validatorCPF.js";
import { validatorDate } from "../Controller/validatorDateHour.js";
import { DateTime } from "luxon";
import { validatorHourFormated } from "../Controller/validatorDateHour.js";
import { validatorHourConsulta } from "../Controller/validatorDateHour.js";
import { database_dentista } from "../Database/table_dentista.js";
import { database_paciente } from "../Database/table_paciente.js";
import { database_consulta } from "../Database/table_consulta.js";
import { database_agenda } from "../Database/table_agenda.js";

export function agendar(cpf, date, input, dentist){
    if(isEqualCPF(cpf)){
        if(validatorDate(date)){
            const dateFormated = DateTime.fromFormat(date, "dd/MM/yyyy")
            if(validatorHourFormated(input)){
                const output = validatorHourConsulta(input)
                //chamar método aqui que valida dentista no BD {fazer depois}
                const index = database_paciente.Paciente.findIndex(paciente => paciente.cpf === cpf)
                // pensar se percorro o banco de dados ou pego o objeto paciente pelo index
                database_consulta.Consulta.push(database_paciente.Paciente[index], dateFormated, input, output, dentist)
                
            }
        }
    }
}