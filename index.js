import { create_paciente, delete_paciente } from "consultorio/Model/model_paciente.js";
import PromptSync from "prompt-sync";

const prompt = PromptSync();

let aux;

do{
    aux = parseInt(prompt("---------------- MENU PRINCIPAL ------------------\n 1-Menu de pacientes \n 2- Agendamento \n 0- Sair \n \n"))

    switch(aux){
        case 1: {
            let aux;
            do{
                aux = parseInt(prompt("---------------- MENU PRINCIPAL ------------------\n 1-Cadastrar Paciente \n 2- Excluir Paciente \n 0- Voltar ao menu principal \n \n"))
                switch(aux){
                    case 1:
                        aux = 0;
                        
                    case 2:
                    case 0:
                        break
                }
            }while(aux!==0)

        }
    }
    
    if(isNaN(aux)){
        console.log("Digite uma opção válida! \n\n")
    }

}while(aux !== 0)

console.log("Programa encerrado com sucesso!")