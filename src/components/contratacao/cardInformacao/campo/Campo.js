

const Campo = (props) =>{

    return(
        <div style={{marginTop: '15px', color: 'rgba(0, 0, 0, 0.65)', fontSize: '16px', lineHeight: '20px'}}>
            <label style={{fontWeight: '600'}}>{props.nome}:</label>
            <span>{' '}{props.info}</span>
        </div>
    )
}

export default Campo;