/*5. O serviço Current weather data pode ser encontrado no link a seguir. Observe que ele
não é o mesmo utilizado em aula.
    https://openweathermap.org/current
Faça um programa que, utilizando promises e as funções then/catch, exibe a temperatura
atual (atributo chamado  temp). O programa deve ser um loop que exibe as seguintes
opções para o usuário:
    1- Digitar latitude e longitude
    2- Sair
O programa fica em loop até que o usuário digite 2. Ao digitar 1, o usuário deve
informar   os   valores   de   latitude   e   longitude   da   localização   da   qual   deseja   saber   a
temperatura atual. Use um arquivo .env e o pacote dotenv para configurar uma variável
de ambiente que indica qual unidade de medida  de temperatura  deve ser utilizada:
Kelvin, Fahrenheit ou Celsius. Lembre-se de armazenar a chave de API no arquivo .env
e de tomar o cuidado de não armazená-lo no sistema de controle de versão.*/

const axios = require('axios'); 
require('dotenv').config();

const {PROTOCOL, BASE_URL, API_KEY, UNITS, LANGUAGE} = process.env

function temperatura(latitude, longitude){
    return new Promise(function(resolve,reject){
        const url = `${PROTOCOL}://${BASE_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=${UNITS}&lang=${LANGUAGE}`;
        let response = axios.get(url).then(res => res)
        resolve(response);
    });
}

const menu = "Menu\n 1-Exibir temperatura\n 2-Sair"
const prompt = require('prompt-sync') ({sigint: true});

function principal(){
    let op, lat, lon;

    do{
        console.log(menu)
        op = parseInt(prompt("Digite o número da opção desejada: "))

        switch(op){
            case 1:
                lat = parseInt(prompt("Digite a latitude: " ));
                lon = parseInt(prompt("Digite a longitude: " ));

                temperatura(lat, lon)
                    .then(res => console.log(`\nA Temperatura do local é ${res.data.main.temp}°C`))
                    .catch(err => console.log(err));
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
