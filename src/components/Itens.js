
function Itens (props){
    
    function verificationCard(typeCard){

        if (typeCard === "solicitacao"){
            return (
                <div key={props.chave} style={{paddingLeft: '30px'}}>
                    
                
                    <div className="cardSolicitacao configCard itemCentralizar">
                        

                        <div style={{display: 'flex'}}>

                        <div style={{paddingLeft: '16px', paddingRight: '16px'}} className="iconeSolicitacao">
                            <img width="22" height="22" src={props.image} alt="" />
                        </div>

                        <div style={{width: '210px'}}>
                            <div className="tituloSolicitacao">
                                <div style={{display: 'flex', color: 'rgba(0, 0, 0, 0.85)'}} className="textoTituloSolicitacao">
                                    {props.titulo} {props.chave}
                                </div>
                            </div>


                            <div style={{marginTop: '8px'}} className="textoSolicitacao">
                                Previsão de término em {props.previcao} dias.
                            </div>


                            <div style={{marginTop: '14px'}} className="operacaoSolicitacao itemCentralizar">
                                
                                <div>
                                    <button itemID={props.chave} className="btExcluirServicos">Excluir</button>
                                    <button style={{marginLeft: '20px'}} className="btAceitarServicos">Aceitar</button>
                                </div>


                            </div>


                            </div>

                        </div>
                    </div>


                </div>
            )


        }else if (typeCard === "emAndamento"){
            
            return (
                <div key={props.chave} style={{paddingLeft: '30px'}}>
                
            
                <div className="cardSolicitacao configCard itemCentralizar">
                    

                    <div style={{display: 'flex'}}>

                    <div style={{paddingLeft: '16px', paddingRight: '16px'}} className="iconeSolicitacao">
                        <img width="22" height="22" src={props.image} alt="" />
                    </div>

                    <div style={{width: '210px'}}>
                        <div className="tituloSolicitacao">
                            <div style={{display: 'flex', color: 'rgba(0, 0, 0, 0.85)'}} className="textoTituloSolicitacao">
                                {props.titulo} {props.chave}
                            </div>
                        </div>


                        <div style={{marginTop: '8px'}} className="textoSolicitacao">
                            Serviço finalizado
                        </div>


                        <div style={{marginTop: '14px', display: 'flex', justifyContent: 'end'}} className="operacaoSolicitacao">
                            
                           
                                <button style={{marginRight: '14px'}} itemID={props.chave} className="btFinalizarServicos">Finalizar</button>
                          


                        </div>


                        </div>

                    </div>
                </div>


            </div>

            )
        }
    }



    return verificationCard(props.typeCard)
}

export default Itens;