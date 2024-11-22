import { Paciente } from '../Class/Paciente.js';
import fs from 'fs';


function salvarPacientes(pacientes) {
    const dadosJSON = JSON.stringify(pacientes, null, 2); // Converte o array de objetos em uma string JSON
    fs.writeFileSync('teste.json', dadosJSON, 'utf8'); // Salva no arquivo 'pacientes.json'
    console.log('Dados salvos com sucesso!');
}
const paciente = new Paciente("000.000.000-00", "Juliete", "01/01/2001")
console.log(paciente.cpf)

salvarPacientes(paciente)