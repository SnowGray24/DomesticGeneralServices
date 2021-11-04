
import iconPix from '../../../img/icones/iconPix.PNG';
import iconMastercard from '../../../img/icones/iconMastercard.PNG';
import iconWhatsapp from '../../../img/icones/iconWhatsapp.PNG';
import iconMoeda from '../../../img/icones/iconMoeda.PNG';
import perfilPessoa from '../../../data/User';
import '../../../css/configCSS.css';

const CardPagamento = () =>{

    return (
        <div className="flex-container" style={{fontSize: '16px', color: 'rgba(0, 0, 0, 0.65)'}}>
            <div  style={{width: '200px'}}>
                <label style={{fontWeight: '500'}}>Formas de Pagamento</label>
                
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <div>
                        <img height={24} src={iconMoeda} alt="" />
                    </div>

                    <div>
                        <img height={24} src={iconMastercard} alt="" />
                    </div>

                    <div>
                        <img height={24} src={iconPix} alt="" />
                    </div>
                </div>
            </div>

            <div style={{width: '190px'}}>
                <label style={{fontWeight: '500', letterSpacing: '.9px'}}>Contato</label>

                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div style={{paddingLeft: '4px', paddingRight:'4px'}}>
                        <img height={24} src={iconWhatsapp} alt="" />
                    </div>

                    <div>
                        {perfilPessoa.contato}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPagamento;