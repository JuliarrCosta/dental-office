import { DateTime } from "luxon"
import { database_consulta } from "../Database/table_consulta";

// se retornar true nao posso excluir, utilizar esse conceito no model
export function validatorConsulta(){
  
    const now = DateTime.now()
    database_consulta.Consulta.forEach(consulta => {
        if(now < consulta.date){
            return true;
        }else{
            return false;
        }
    })
}