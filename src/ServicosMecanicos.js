import CardPrestador from "./components/CardPrestador";
import Header from "./components/Header";
import MenuVertical from "./components/MenuVertical";
import TitleBar from "./components/TitleBar";
import OptionsMenuContratante from './data/OpcoesMenuContratante';
import './css/layout.css';


function ServicosMecanicos() {

    let options = OptionsMenuContratante;
    options[0].selected = true;

    return (
        <div className='page'>
            <main style={{display: 'flex'}}>
                <MenuVertical options={options} selected="Todos Serviços"/>
                <section style={{width: '100%', color: 'rgba(0, 0, 0, 0.5)'}}>
                    <Header letraPerfil="J" nome="João"/>
                    <TitleBar step1="Todos os Serviços" route1="/Todos Serviços" step2="> Serviços Mecânicos" route2="/ServicosMecanicos"/>
                    <div className="main">
                        <h3>Explore os Serviços Mecânicos</h3>
                        <p>
                            Problemas com sua máquina ou veículo? Podemos te ajudar!<br/>Você pode contratar um ecanico TORXS para qualquer serviço de manutenção de máquinas ou conserto de carros.<br/> Além disso Você pode encontrar um prestador de serviços por cidade ou serviço prestado.
                        </p>
                        <CardPrestador/>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default ServicosMecanicos;