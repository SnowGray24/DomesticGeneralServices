import React, { useState } from 'react';
import '../css/homePages.css';

function TabBarHorizontal(props) {

    const [inProgressChecked, setInProgressChecked] = useState(props.inProgressChecked)
    const [finishedChecked, setFinishedChecked] = useState(props.finishedChecked)

    function handleChangeInProgress(){
        setInProgressChecked(true)
        setFinishedChecked(false)
    }

    function handleChangeFinished(){
        setFinishedChecked(true)
        setInProgressChecked(false)
    }

    return (
        <div>
            <nav className='barOptionsMeusServicos' style={{display: 'flex'}}>
                {inProgressChecked === true
                ? <div style={{display: 'flex'}}>
                    <ul className='resetUlLi'  style={{marginLeft: '16px', cursor: 'pointer'}}>
                        <li className="optionItemSelect">Em andamento</li>
                    </ul>
                    <ul className='resetUlLi' style={{cursor: 'pointer'}} onClick={()=>handleChangeFinished()}>
                        <li>Finalizado</li>
                    </ul>
                    
                    </div>
                : <div style={{display: 'flex'}}>
                    <ul className='resetUlLi'  style={{marginLeft: '16px', cursor: 'pointer'}} onClick={()=>handleChangeInProgress()} >
                            <li>Em andamento</li>
                        </ul>
                    <ul className='resetUlLi' style={{cursor: 'pointer'}}>
                        <li className="optionItemSelect">Finalizado</li>
                    </ul>
                    </div>
                }
            </nav>
        </div>
    )
}
export default TabBarHorizontal