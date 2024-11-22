import PromptSync from "prompt-sync";

const prompt = PromptSync()

export function validatorName(name){
    if(name.length >= 5){
        return true
    }else{
        return false
    }
}


//const name = prompt("Nome do paciente: ")
//console.log(validatorName(name))