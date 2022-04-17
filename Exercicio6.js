// 6. Refaça o exercício 5 usando a construção async/await.

const axios = require('axios'); 
require('dotenv').config();

const {PROTOCOL, BASE_URL, API_KEY, UNITS, LANGUAGE} = process.env

const menu = "Menu\n 1-Exibir temperatura\n 2-Sair"
const prompt = require('prompt-sync') ({sigint: true});

async function principal(){
    let op, lat, lon;

    do{
        console.log(menu)
        op = parseInt(prompt("Digite o número da opção desejada: "))

        switch(op){
            case 1:
                lat = parseInt(prompt("Digite a latitude: " ));
                lon = parseInt(prompt("Digite a longitude: " ));

                const response = await axios.get(`${PROTOCOL}://${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${UNITS}&lang=${LANGUAGE}`)
                console.log(`\nA Temperatura do local é ${response.data.main.temp}°C\n`)
                break;

                case 2:
                    console.log("Programa Encerrado")
                break;

                default:
                    console.log("Opção Inválida")
        }
    }while(op !== 2)
}

principal()