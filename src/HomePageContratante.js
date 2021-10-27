import MenuVertical from './components/MenuVertical';
import Header from './components/Header';
import TitleBar from './components/TitleBar';
import CardCategorias from './components/CardCategorias';
import TabBarHorizontal from './components/TabBarHorizontal';
import OptionsMenuContratante from './data/OpcoesMenuContratante';
import { useState } from 'react';

function HomePageContratante () {

    let CardCategoria = <CardCategorias/>

    
    let options = OptionsMenuContratante
    options[0].selected = true;



    return (
        <div className='page'>
            <main style={{display: 'flex'}}>
                <MenuVertical options={options} selected="Meus Pedidos"/>
            
                
                <section style={{width: '100%', color: 'rgba(0, 0, 0, 0.5)'}}>
                    <Header letraPerfil="J" nome="João"/>
                    <TitleBar step1="Meus Pedidos"/>
                    <TabBarHorizontal inProgressChecked={true} finishedChecked={false}/>
                </section>
            </main>
        </div>

    )
}

export default HomePageContratante;
