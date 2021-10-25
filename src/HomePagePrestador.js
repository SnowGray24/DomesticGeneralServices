import MeusServicos from './components/MeusServicos';
import './css/homePages.css';
import './css/configCSS.css';
import React, {useState} from 'react';
import MenuVertical from './components/MenuVertical';
import taskSelected from './img/icones/taskSelect.PNG';
import perfil from './img/icones/perfil.PNG';
import ajuda from './img/icones/ajuda.PNG';
import sair from './img/icones/sair.PNG';
import Header from './components/Header';

function HomePagePrestador(){

    const Options =[
        {
            opcao: 'Meus Serviços',
            imagem: taskSelected,
            selected: true
        },
        {
            opcao: 'Meu Perfil',
            imagem: perfil,
            selected: false
        },
        {
            opcao: 'Ajuda',
            imagem: ajuda,
            selected: false
        },
        {
            opcao: 'Sair',
            imagem: sair,
            selected: false
        },        
    ]

    const [telaServicos, setTelaServicos] = useState(0);

    const mostrarTela = () =>{
        if (telaServicos === 0){
            return <MeusServicos />
        }
    }

    return (
        <div className='page'>
            <main style={{display: 'flex'}}>
                <MenuVertical options={Options}/>
                <section style={{width: '100%', color: 'rgba(0, 0, 0, 0.5)'}}>
                    <Header letraPerfil="M" nome="Maria"/>
                    { mostrarTela() }
                </section>

            </main>
        </div>
    );
}

export default HomePagePrestador;