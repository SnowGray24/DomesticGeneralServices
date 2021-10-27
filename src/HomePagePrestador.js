import MeusServicos from './components/MeusServicos';
import './css/homePages.css';
import './css/configCSS.css';
import React, {useState} from 'react';
import MenuVertical from './components/MenuVertical';
import TitleBar from './components/TitleBar';
import Header from './components/Header';
import OptionsMenuPrestador from './data/OpcoesMenuPrestador';

function HomePagePrestador(){


    let options = OptionsMenuPrestador;
    options[0].selected = true;

    const [telaServicos, setTelaServicos] = useState(0);

    const mostrarTela = () =>{
        if (telaServicos === 0){
            return <MeusServicos />
        }
    }

    return (
        <div className='page'>
            <main style={{display: 'flex'}}>
                <MenuVertical options={options}/>
                <section style={{width: '100%', color: 'rgba(0, 0, 0, 0.5)'}}>
                    <Header letraPerfil="M" nome="Maria"/>
                    <TitleBar step1="Meus Serviços"/>
                    { mostrarTela() }
                </section>

            </main>
        </div>
    );
}

export default HomePagePrestador;