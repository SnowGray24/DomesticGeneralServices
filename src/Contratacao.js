import CardInformacao from "./components/contratacao/cardInformacao/CardInformacao";
import CardPagamento from "./components/contratacao/cardPagamento/CardPagamento";
import CardPerfil from "./components/contratacao/cardPerfil/CardPerfil";
import Header from "./components/Header";
import MenuVertical from "./components/MenuVertical";
import './css/layout.css';
import TitleBar from "./components/TitleBar";
import OptionsMenuContratante from './data/OpcoesMenuContratante';

function Contratacao () {
    let options = OptionsMenuContratante

    return (
        <>
        <div className='page'>
            <main style={{display: 'flex', marginBottom: '72px'}}>
                <MenuVertical options={options} selected="Todos Serviços" />

                <section style={{width: '100%', color: 'rgba(0, 0, 0, 0.5)'}}>
                    <Header letraPerfil="J" nome="João"/>
                    <TitleBar step1="Todos Serviços" route1="/Todos Serviços" step2="> Serviços Mecânicos" route2="/ServicosMecanicos" step3="> Contratação" route3="/Contratacao"/>

                    <section style={{display: 'flex', padding: '25px 30px'}}>
                        
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <CardPerfil/>
                            <CardPagamento/>
                        </div>
                        <CardInformacao/>
                    </section>
                </section>
            </main>
        </div>
        </>
    )
}
export default Contratacao;