import MenuVertical from './components/MenuVertical';
import taskSelected from './img/icones/taskSelect.PNG';
import todosServicos from './img/icones/todos-servicos.png';
import perfil from './img/icones/perfil.PNG';
import ajuda from './img/icones/ajuda.PNG';
import sair from './img/icones/sair.PNG';
import Header from './components/Header';
import TitleBar from './components/TitleBar';
import CardCategorias from './components/CardCategorias';
import TabBarHorizontal from './components/TabBarHorizontal';

function HomePageContratante () {

    let CardCategoria = <CardCategorias/>

    const Options =[
        {
            opcao: 'Meus Pedidos',
            imagem: taskSelected,
            selected: true
        },
        {
            opcao: 'Todos Serviços',
            imagem: todosServicos,
            selected: false
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

    return (
        <div className='page'>
            <main style={{display: 'flex'}}>
                <MenuVertical options={Options}/>
                <section style={{width: '100%', color: 'rgba(0, 0, 0, 0.5)'}}>
                    <Header letraPerfil="M" nome="Maria"/>
                    <TitleBar step1="Meus Pedidos"/>
                    <TabBarHorizontal inProgressChecked={true} finishedChecked={false}/>
                </section>
            </main>
        </div>

    )
}

export default HomePageContratante;
