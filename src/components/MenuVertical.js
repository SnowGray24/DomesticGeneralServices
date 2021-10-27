import logoMarca from '../img/logo.PNG';
import '../css/MenuVertical.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function MenuVertical ({options, selected}) {
    const [Options, setOptions] = useState(options);
    console.log(Options)

    let sselected = "resetUlLi navBarItem navBarItemSelect"
    let noSelected = "resetUlLi navBarItem"


    return (
        <section className="Menu-vertical-container">
            <div className="Logomarca">
                <img src={logoMarca} alt="Torxs Services" height='46' />
            </div>

            <nav className="Nav-Menu">
            {options.map((item,index)=>(
                <Link key={index} to={"/" + item.opcao} className="Link-menu">
                    <ul  className={selected === item.opcao ? sselected : noSelected}>
                        <li style={{display: 'flex'}}>
                            <div style={{height:'20px', width: '30px'}}>
                                <img style={{height: '100%'}} src={selected === item.opcao ? item.imagemSelected : item.imagemNoSelected} alt={item.opcao} />
                            </div>
                        {item.opcao}
                        </li>
                    </ul>
                </Link>
            ))}
            </nav>

            <div className="itemCentralizar versao">
                Versão 1.0
            </div>
        </section>
    )
}
export default MenuVertical;