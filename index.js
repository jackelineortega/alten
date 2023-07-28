import inquirer from 'inquirer';
import axios from 'axios';
export default async function addData() {
    try {
        let arrayData = [];
        const ruta = "archivos/";
        const exit = "X";
        let fileExists = false;
        console.log("************************************************************* \n               Bienvenido a Hola Luz \nEsta es una app para analizar posibles lecturas sospechosas!!\n*************************************************************\n");
        let answers = {};
        do {
            answers = await inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: `Por favor ingrese el nombre de archivo a analizar (${exit} para salir):`,
                }
            ]);
            if (answers.name !== exit) {
                try {
                    const req = {
                        file: answers.name
                    };
                    const response = await axios.post('http://localhost:3010/reading/file', req);
                    if (Array.isArray(response.data.data)) {
                        if (response.data.data.length > 0) {
                            const arraySuspicious = response.data.data;
                            console.log("\nAtencion: Se ha encontrado las siguientes lecturas sospechosas.");
                            console.log("\n| Cliente       | Mes     | Sospechoso  | Mediana \n----------------------------------------------------------------------------------------");
                            arraySuspicious.forEach((element) => {
                                console.log(`| ${element.clientID} | ${element.periodo} | ${element.lectura}        | ${element.mediana}`);
                            });
                            console.log("\n");
                        }
                    }
                    else {
                        console.log(response.data.data);
                    }
                }
                catch (error) {
                    console.error('Error en la petición:', error.message);
                }
            }
            else
                console.log("\nHasta luego, vuelve pronto!! =)\n");
        } while (!fileExists && answers.name !== exit);
    }
    catch (error) {
        console.log("Something went wrong!", error);
    }
}
addData();
