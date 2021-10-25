import logoMarca from '../img/logo.PNG';
import '../css/MenuVertical.css';

function MenuVertical ({options, selected}) {

    return (
        <section className="Menu-vertical-container">
            <div className="Logomarca">
                <img src={logoMarca} alt="Torxs Services" height='46' />
            </div>

            <nav className="Nav-Menu">
            {options.map((item,index)=>(
                <ul key={index} className={item.selected === true ? "resetUlLi navBarItem navBarItemSelect" : "resetUlLi navBarItem"}>
                    <li style={{display: 'flex'}}>
                        <div style={{height:'20px', width: '30px'}}>
                            <img style={{height: '100%'}} src={item.imagem} alt={item.opcao} />
                        </div>
                    {item.opcao}
                    </li>
                </ul>
            ))}
            </nav>

            <div className="itemCentralizar versao">
                Versão 1.0
            </div>
        </section>
    )
}
export default MenuVertical;