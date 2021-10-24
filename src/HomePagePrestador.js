import MeusServicos from './components/MeusServicos';

import './css/homePages.css';
import './css/configCSS.css';

import logoMarca from './img/logo.PNG';
import imgTaskSelect from './img/icones/taskSelect.PNG';
import imgPerfil from './img/icones/perfil.PNG';
import imgAjuda from './img/icones/ajuda.PNG';
import imgSair from './img/icones/sair.PNG';


import React, {useState} from 'react';


function HomePagePrestador(){

    const [telaServicos, setTelaServicos] = useState(0);

    const mostrarTela = () =>{
        if (telaServicos === 0){
            return <MeusServicos />
        }
    }

    return (
        <div className='page'>

            <main style={{height: '100vh', display: 'flex'}}>
            
                <section style={{minWidth: '220px', borderRight: '1px solid #EBEBEB', color: 'rgba(0, 0, 0, 0.65)'}}>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px'}}>
                        <img src={logoMarca} alt="" height='46' />
                    </div>

                    <nav style={{padding: '10px', height: '80%'}}>
                        <ul className="resetUlLi navBarItem navBarItemSelect">
                            <li style={{display: 'flex'}}>
                                <div style={{height:'20px', width: '30px'}}>
                                    <img style={{height: '100%'}} src={imgTaskSelect} alt="" />
                                </div>
                                Meus Serviços
                            </li>
                        </ul>

                        <ul className="resetUlLi navBarItem">
                            <li style={{display: 'flex'}}>
                                <div style={{height:'20px', width: '30px'}}>
                                    <img style={{height: '100%'}} src={imgPerfil} alt="" />
                                </div>
                                Meu Perfil
                            </li>
                        </ul>

                        <ul className="resetUlLi navBarItem">
                            <li style={{display: 'flex'}}>
                                <div style={{height:'20px', width: '30px'}}>
                                    <img style={{height: '100%'}} src={imgAjuda} alt="" />
                                </div>
                                Ajuda
                            </li>
                        </ul>

                        <ul className="resetUlLi navBarItem">
                            <li style={{display: 'flex'}}>
                                <div style={{height:'20px', width: '30px'}}>
                                    <img style={{height: '100%'}} src={imgSair} alt="" />
                                </div>
                                Sair
                            </li>
                        </ul>
                    </nav>

                    
                    <div className="itemCentralizar" style={{borderTop: '1px solid #EBEBEB', height: '52px'}}>
                        Versão 1.0
                    </div>
                </section>

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