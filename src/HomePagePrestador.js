import NavHomePagePrestador from './components/NavHomePagePrestador';

import './css/homePages.css';
import logoMarca from './img/logo.PNG';

import './css/configCSS.css';


function HomePagePrestador(){

    return (
        <div>

            <main style={{height: '100vh', display: 'flex'}}>
                <section style={{width: '220px', borderRight: '1px solid #EBEBEB', color: 'rgba(0, 0, 0, 0.65)'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px'}}>
                <img src={logoMarca} alt="" height='46' />
            </div>

                <nav>
                    <ul className="resetUlLi">
                        <li>Meus Serviços</li>
                    </ul>

                    <ul className="resetUlLi">
                        <li>Meu Perfil</li>
                    </ul>

                    <ul className="resetUlLi">
                        <li>Ajuda</li>
                    </ul>

                    <ul className="resetUlLi">
                        <li>Sair</li>
                    </ul>
                </nav>

                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', borderTop: '1px solid #EBEBEB'}}>
                        Versão 1.0
                    </div>
                </section>

                <section style={{width: '100%', color: 'rgba(0, 0, 0, 0.5)'}}>
                   <NavHomePagePrestador />
                </section>

            </main>
        </div>
    );
}

export default HomePagePrestador;