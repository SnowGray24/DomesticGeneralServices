import notFinished from "../img/icones/advertencia.PNG"
import isFinished from "../img/icones/okay.PNG"

const myServices = [
    {
        id: 0,
        title: "Serviço de Mecânica",
        prediction: "Previsão de término em 3 dias.",
        isFinished: true,
        image: isFinished
    },
    {
        id: 1,
        title: "Serviço de Limpeza",
        prediction: "Serviço finalizado.",
        isFinished: true,
        image: isFinished
    },
    {
        id: 2,
        title: "Serviço de Montagem",
        prediction: "Previsão de término em 1 dia.",
        isFinished: false,
        image: notFinished
    },
    {
        id: 3,
        title: "Serviço de Limpeza",
        prediction: "Previsão de término em 2 dias.",
        isFinished: false,
        image: notFinished
    },
]

export default myServices;