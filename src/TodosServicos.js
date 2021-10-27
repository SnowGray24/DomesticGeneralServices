import OptionsMenuContratante from './data/OpcoesMenuContratante';
import CardCategorias from "./components/CardCategorias";
import TitleBar from './components/TitleBar';
import MenuVertical from './components/MenuVertical';
import TabBarHorizontal from './components/TabBarHorizontal';
import Header from './components/Header';

function TodosServicos () {
    let CardCategoria = <CardCategorias/>

    
    let options = OptionsMenuContratante
    options[0].selected = true;

    return (
        <div className='page'>
            <main style={{display: 'flex'}}>
                <MenuVertical options={options} selected="Todos Serviços"/>
                <section style={{width: '100%', color: 'rgba(0, 0, 0, 0.5)'}}>
                    <Header letraPerfil="J" nome="João"/>
                    <TitleBar step1="Todos os Serviços"/>
                    <CardCategorias/>
                </section>
            </main>
        </div>
    )
}
export default TodosServicos;