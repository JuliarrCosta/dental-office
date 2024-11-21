import { DateTime } from "luxon";
import PromptSync from "prompt-sync";

const prompt = PromptSync();

export function validatorDate(date){
    const format = "dd/MM/yyyy"
    const date = DateTime.fromFormat(date, format)
    
    if(date.isValid){
        return true;
    }else{
        return false
    }
}

//redundante a validação da data
export function validatorAge(dateOfBirth){
    const now = DateTime.now()
    if(validatorDate(dateOfBirth)){
        if(now.diff(date, ["years"]).as("years") >= 13){
            return true;
        }else{
            return false
        }
    }

}

// Testando função

const dateOfBirth = prompt("Data de nascimento(dd/MM/yyyy): ")
console.log(validatorAge(dateOfBirth))

