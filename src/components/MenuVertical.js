import logoMarca from '../img/logo.PNG';
import imgTaskSelect from '../img/icones/taskSelect.PNG';
import imgPerfil from '../img/icones/perfil.PNG';
import imgAjuda from '../img/icones/ajuda.PNG';
import imgSair from '../img/icones/sair.PNG';

import '../css/MenuVertical.css';

function MenuVertical (props) {
    return (
        <section className="Menu-vertical-container">
            <div className="Logomarca">
                <img src={logoMarca} alt="Torxs Services" height='46' />
            </div>

            <nav className="Nav-Menu">
                <ul className="resetUlLi navBarItem navBarItemSelect">
                    <li style={{display: 'flex'}}>
                        <div style={{height:'20px', width: '30px'}}>
                            <img style={{height: '100%'}} src={imgTaskSelect} alt="" />
                        </div>
                        {props.options[0]}
                    </li>
                </ul>

                <ul className="resetUlLi navBarItem">
                    <li style={{display: 'flex'}}>
                        <div style={{height:'20px', width: '30px'}}>
                            <img style={{height: '100%'}} src={imgPerfil} alt={props.options[1]} />
                        </div>
                        {props.options[1]}
                    </li>
                </ul>

                <ul className="resetUlLi navBarItem">
                    <li style={{display: 'flex'}}>
                        <div style={{height:'20px', width: '30px'}}>
                            <img style={{height: '100%'}} src={imgAjuda} alt={props.options[2]} />
                        </div>
                        {props.options[2]}
                    </li>
                </ul>

                <ul className="resetUlLi navBarItem">
                    <li style={{display: 'flex'}}>
                        <div style={{height:'20px', width: '30px'}}>
                            <img style={{height: '100%'}} src={imgSair} alt={props.options[3]} />
                        </div>
                        {props.options[3]}
                    </li>
                </ul>
            </nav>

            <div className="itemCentralizar versao">
                Versão 1.0
            </div>
        </section>
    )
}
export default MenuVertical;