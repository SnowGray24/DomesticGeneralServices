import "../../../css/configCSS.css";
import Campo from "./campo/Campo";
import perfilPessoa from '../../../data/User';

const CardInformacao = () =>{

    const options = perfilPessoa.servico;
    const listOptions = options.map((options)=>
        <div style={{minWidth: '92px', position: 'block'}}>
            <input type="checkbox" className="configCheckbox" disabled checked={options.isActive} />{' '}
            <label style={{color: 'rgba(0, 0, 0, 0.65)'}}>{options.name}</label>
        </div>
    )

    return (
        <div style={{padding: '18px', border: '1px solid rgba(235, 235, 235, 1)', borderRadius: '5px', width: '522px', marginLeft: '13px'}}>
            <h5>Detalhes do Prestador</h5>

            <Campo nome="Nome" info={perfilPessoa.nome}></Campo>
            <Campo nome="E-mail" info={perfilPessoa.email}></Campo>
            <Campo nome="CNPJ" info={perfilPessoa.cnpj}></Campo>
            <Campo nome="Endereço" info={perfilPessoa.endereco}></Campo>
            <Campo nome="Cidade" info={perfilPessoa.cidade}></Campo>
            <Campo nome="Cidade de atendimento" info={perfilPessoa.cidadeAtendimento}></Campo>
            <Campo nome="Serviços" info={''}></Campo>

            <div style={{display: 'grid', gridTemplateColumns: '100px 100px 100px 100px'}}>
                {listOptions}
            </div>
        </div>
    )
}

export default CardInformacao;