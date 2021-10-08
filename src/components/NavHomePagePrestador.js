

import '../css/configCSS.css';
import '../css/homePages.css';

import imgTask from '../img/icones/task.PNG';

function NavHomePagePrestador(){

    return (
        <div>

                    { /* Title-bar */ }
                    <div style={{marginLeft: '30px',height: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                       <div>
                           <img height="20" src={imgTask} alt="" /> {'>'} Meus Serviços
                        </div>
                    </div>


                    { /* Options */ }
                    <div>
                        <nav className='barOptionsMeusServicos' style={{display: 'flex'}}>
                           
                           <div style={{display: 'flex'}}>
                                <ul className='resetUlLi'  style={{marginLeft: '16px'}}>
                                    <li className="optionItemSelect" >Em andamento</li>
                                </ul>

                                <ul className='resetUlLi'>
                                    <li >Finalizado</li>
                                </ul>
                            </div>
                        </nav>
                    </div>
        </div>
    );
}

export default NavHomePagePrestador;