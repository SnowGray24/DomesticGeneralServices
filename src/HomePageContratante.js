import MenuVertical from './components/MenuVertical';
import Header from './components/Header';
import TitleBar from './components/TitleBar';
import CardCategorias from './components/CardCategorias';
import TabBarHorizontal from './components/TabBarHorizontal';
import OptionsMenuContratante from './data/OpcoesMenuContratante';
import { useState } from 'react';
import MeusPedidos from './data/MeusPedidos';

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
                    <div style={{padding: '25px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                        {MeusPedidos.map((item, index)=>(
                        <div id={item.id} key={index} className="containerCard" style={{marginLeft: '10px', borderRadius: '2px', width: '300px', boxShadow: '0px 3px 9px rgba(0,0,0,0.2)', padding: '33px', marginBottom: '10px'}}>
                            <div style={{display:"flex", alignItems: 'center', justifyContent: 'flex-start', marginBottom:'10px'}}>
                                <div>
                                    <img src={item.image} alt={item.profissao} style={{width:'22px', marginRight: '10px'}} />
                                </div>
                                <div className="titleCard">
                                    <h2 style={{color: 'rgba(0,0,0,0.85)', fontSize: '16px',marginBottom:'0px'}}>{item.title}</h2>
                                </div>
                            </div>
                            <p style={{marginBottom: '25px', fontSize: '16px'}}>{item.prediction}</p>
                            {item.isFinished
                            ? <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                <button className="btFinalizarServicos">Finalizar</button>
                            </div>
                            : <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                <button className="btExcluirServicos" style={{marginRight: '20px'}}>Excluir</button>
                                <button className="btAceitarServicos">Aceitar</button>
                            </div>
                            }
                        </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>

    )
}

export default HomePageContratante;
