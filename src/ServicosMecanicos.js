import CardPrestador from "./components/CardPrestador";
import Header from "./components/Header";
import MenuVertical from "./components/MenuVertical";
import TitleBar from "./components/TitleBar";
import OptionsMenuContratante from './data/OpcoesMenuContratante';


function ServicosMecanicos() {

    let options = OptionsMenuContratante;
    options[0].selected = true;

    return (
        <div className='page'>
            <main style={{display: 'flex'}}>
                <MenuVertical options={options} selected="Todos Serviços"/>
                <section style={{width: '100%', color: 'rgba(0, 0, 0, 0.5)'}}>
                    <Header letraPerfil="J" nome="João"/>
                    <TitleBar step1="Todos os Serviços"/>
                    <CardPrestador/>
                </section>
            </main>
        </div>
    )
}

export default ServicosMecanicos;