import MenuVertical from './components/MenuVertical';
import Header from './components/Header';
import TitleBar from './components/TitleBar';
import OptionsMenuContratante from './data/OpcoesMenuContratante';
import MeusPedidos from '../src/components/MeusPedidos';
import { useState } from 'react';

function HomePageContratante () {

    let options = OptionsMenuContratante
    options[0].selected = true;





    
    const [telaPedidos, setTelaPedidos] = useState(0);

    const mostrarTela = () =>{
        if (telaPedidos === 0){
            return <MeusPedidos/>
        }
    }



    return (
        <div className='page'>
            <main style={{display: 'flex'}}>
                <MenuVertical options={options} selected="Meus Pedidos"/>
            
                
                <section style={{width: '100%', color: 'rgba(0, 0, 0, 0.5)'}}>
                    <Header letraPerfil="J" nome="João"/>
                    <TitleBar step1="Meus Pedidos"/>
                    {mostrarTela()}
                </section>
            </main>
        </div>
    )
}

export default HomePageContratante; 
