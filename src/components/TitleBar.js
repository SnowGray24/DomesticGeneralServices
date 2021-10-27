import imgTask from '../img/icones/task.PNG';
import '../css/titleBar.css';

function TitleBar({step1, step2, step3}) {
    return (
        <div className="containerTitleBar">
            <div>
                <img height="20" src={imgTask} alt="" /> {'>'} {step1} {step2} {step3}
            </div>
        </div>
    )
}
export default TitleBar;