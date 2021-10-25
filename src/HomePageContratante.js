import MenuVertical from './components/MenuVertical';
import taskSelected from './img/icones/taskSelect.PNG';
import todosServicos from './img/icones/todos-servicos.png';
import perfil from './img/icones/perfil.PNG';
import ajuda from './img/icones/ajuda.PNG';
import sair from './img/icones/sair.PNG';
import Header from './components/Header';
import CardCategorias from './components/CardCategorias';

function HomePageContratante () {

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
        <>
            <MenuVertical options={Options}/>
            <Header letraPerfil="J" nome="João"/>
            <CardCategorias/>
       </>
    )
}

export default HomePageContratante;
