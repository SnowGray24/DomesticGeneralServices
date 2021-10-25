import MeusServicos from './components/MeusServicos';
import './css/homePages.css';
import './css/configCSS.css';
import React, {useState} from 'react';
import MenuVertical from './components/MenuVertical';
import taskSelected from './img/icones/taskSelect.PNG';
import perfil from './img/icones/perfil.PNG';
import ajuda from './img/icones/ajuda.PNG';
import sair from './img/icones/sair.PNG';

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
                   
                    <div style={{borderBottom:'1px solid #EBEBEB' ,height: '50px', paddingRight: '45px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'end'}}>
                        <div style={{display: 'flex'}}>
                            <div className="bolaPerfilUsuario">
                                M
                            </div>
                            <div style={{marginLeft: '8px'}}>
                                Maria
                            </div>
                        </div>
                    </div>

                    { mostrarTela() }
                </section>

            </main>
        </div>
    );
}

export default HomePagePrestador;