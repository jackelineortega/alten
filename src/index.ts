import 'dotenv/config'
import inquirer from 'inquirer';
import axios from 'axios';
import { IAnswers, IReqApiReading, IRespApiReading } from './config/interfaces/interfaces.js'
import { messages } from './config/constants/constants.js'

export default async function _indexPrompt() {
  try {

    const exit = "X"
    let fileExists = false
    console.log(messages.welcome)
    let answers : IAnswers
    do {
        answers = await inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: `Por favor ingrese el nombre de archivo a analizar (${exit} para salir):`,
        }
      ]);

      if(answers.name !== exit)
      {
        try {
            const reqApiReading : IReqApiReading = { file : answers.name }
            const respApiReading : IRespApiReading = await axios.post(`${process.env.URL_API}${process.env.CONTROLLER}`,reqApiReading);
            if (Array.isArray(respApiReading.data.data)) { 
                if (respApiReading.data.data.length > 0) {
                  const arraySuspicious = respApiReading.data.data
                  console.log(messages.found_suspicious)
                  console.log(messages.title_result)
                  arraySuspicious.forEach((element:any) => {
                    console.log(`| ${element.clientID} | ${element.periodo} | ${element.lectura}        | ${element.mediana}`)
                  })
                  console.log("\n")
                }
            } else {
              console.log(respApiReading.data.data)
            }
            
        } catch (error:any) {
            console.error('Error en la petición:', error.message);
        }
      } else console.log(messages.goodbye)

    } while (!fileExists && answers.name!==exit) 
  } catch (error) {
    console.log("Algo salio mal!", error);
  }
}

_indexPrompt();
