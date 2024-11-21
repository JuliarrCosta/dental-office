import { Consulta } from 'consultorio/Class/Consulta.js';
import { database_dentista } from '../Database/table_dentista.js';
import { database_paciente } from '../Database/table_paciente.js';

export const database_consulta = {
    Consulta : [
        new Consulta(
            database_paciente.Paciente[0], 
            "01/12/2024", 
            "09:00", 
            "09:30", 
            database_dentista.Dentista[0]
        ),
        new Consulta(
            database_paciente.Paciente[1], 
            "02/12/2024", 
            "10:00", 
            "10:45", 
            database_dentista.Dentista[1]
        ),
        new Consulta(
            database_paciente.Paciente[2], 
            "03/12/2024", 
            "14:00", 
            "14:30", 
            database_dentista.Dentista[2]
        )

    ]
}