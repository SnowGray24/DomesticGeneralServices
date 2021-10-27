import taskSelected from '../img/icones/taskSelect.PNG';
import task from '../img/icones/task.PNG';
import perfil from '../img/icones/perfil.PNG';
import perfilSelected from '../img/icones/perfil-selected.png';
import ajuda from '../img/icones/ajuda.PNG';
import sair from '../img/icones/sair.PNG';
import servicos from '../img/icones/todos-servicos.png';
import servicosSelected from '../img/icones/todos-servicos-selected.png';

const opcoesMenuContratante = [
    {
        opcao: 'Meus Pedidos',
        imagemSelected: taskSelected,
        imagemNoSelected : task,
        selected: false
    },
    {
        opcao: 'Todos Serviços',
        imagemSelected: servicosSelected,
        imagemNoSelected : servicos,
        selected: false
    },
    {
        opcao: 'Meu Perfil',
        imagemSelected: perfilSelected,
        imagemNoSelected : perfil,
        selected: false
    },
    {
        opcao: 'Ajuda',
        imagemSelected: ajuda,
        imagemNoSelected: ajuda,
        selected: false
    },
    {
        opcao: 'Sair',
        imagemSelected: sair,
        imagemNoSelected: sair,
        selected: false
    },
]

export default opcoesMenuContratante;













