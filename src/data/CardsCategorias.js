import sMecanicos from "../img/icones/setting.png"
import sEletricos from "../img/icones/api.png"
import sLimpeza from "../img/icones/delete.png"
import sPintura from "../img/icones/format-painter.png"
import sFrete from "../img/icones/car.png"
import SHidraulicos from "../img/icones/tool.png"
import sBaba from "../img/icones/heart.png"
import sArCondicionado from "../img/icones/icon-park-outline_air-conditioning.png"

const categorias = [
    {
        id: 0,
        title: "Serviços Mecânicos",
        image: sMecanicos,
        route: "/ServicosMecanicos"
    },
    {
        id: 1,
        title: "Serviços Elétricos",
        image: sEletricos,
        route: "/ServicosMecanicos"
    },
    {
        id: 2,
        title: "Serviços de Limpeza",
        image: sLimpeza,
        route: "/ServicosMecanicos"
    },
    {
        id: 3,
        title: "Pintura",
        image: sPintura,
        route: "/ServicosMecanicos"
    },
    {
        id: 4,
        title: "Frete",
        image: sFrete,
        route: "/ServicosMecanicos"
    },
    {
        id: 5,
        title: "Serviços Hidráulicos",
        image: SHidraulicos,
        route: "/ServicosMecanicos"
    },
    {
        id: 6,
        title: "Serviços de Babá",
        image: sBaba,
        route: "/ServicosMecanicos"
    },
    {
        id: 7,
        title: "Ar-Condicionado",
        image: sArCondicionado,
        route: "/Teste"
    }    
]

export default categorias;