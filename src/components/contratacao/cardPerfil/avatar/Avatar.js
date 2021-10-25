import "../../../../css/configCSS.css"

const Avatar = (props) =>{
    return(
        <div style={{backgroundColor: props.cor, height: props.altura, width: props.largura, borderRadius: '50%'}}>
            <div style={{position: 'relative', color: 'white', fontSize: '24px'}} className="contentCentralizar">
                {props.siglaName}
            </div>
        </div>
    )
}

export default Avatar;