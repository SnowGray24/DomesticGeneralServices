import imgTask from '../img/icones/task.PNG';
import '../css/titleBar.css';

function TitleBar({step1, route1, step2, route2, step3, route3}) {
    return (
        <div className="containerTitleBar">
            <div>
                <img height="20" src={imgTask} alt="" /> {'>'} <a href={route1}>{step1}</a> <a href={route2}>{step2}</a> <a href={route3}>{step3}</a>
            </div>
        </div>
    )
}
export default TitleBar;