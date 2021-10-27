import imgTask from '../img/icones/task.PNG';

function TitleBar({step1, step2, step3}) {
    return (
        <div style={{marginLeft: '30px',height: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <div>
                <img height="20" src={imgTask} alt="" /> {'>'} {step1} {step2} {step3}
            </div>
        </div>
    )
}
export default TitleBar;