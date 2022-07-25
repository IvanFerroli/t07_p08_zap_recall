/* eslint-disable import/first */
import {useState} from "react";;
import Icon from "../Icon/Icon"
import "./style.css"

export default function FlashCard(props) {

    function stageAssemble() {
        
        const {stage, result} = status;
        if(stage === 1) {
            return(
                <div 
                    className="panel closed"
                    onClick={() => setStatus({...status, stage: 2})}
                 >
                    <p>FlashCard {index}</p>
                    <Icon icon="play" /> 
                </div>
            )
        }
    
        if(stage === 2) {
            return(
                <div className="panel open">
                    <p>{front}</p>
                    <div className="icon" onClick={() => setStatus({...status, stage: 3})}>
                        <Icon icon="arrow" />
                    </div>
                </div>
            )
        }
    
        if(stage === 3) {
            const buttons = [
                {text: "Não lembrei", result: "error"},
                {text: "Quase não lembrei", result: "doubt"},
                {text: "Zap!", result: "zap"}
            ]
            return (
                <div className="panel open">
                    <p>{back}</p>
                    <div className="buttons">
                    {
                        buttons.map(({text, result}) => {
                            return(
                                <button
                                key={result}
                                className={result}
                                onClick={() => {
                                    setStatus({stage: 4, result});
                                    finished(result);
                                }}
                                >
                                    {text}
                                </button>
                            )
                        })
                    }
                    </div>
                </div>
            )
        }

        if(stage === 4) {
            return(
                <div className="panel closed finished">
                    <p className={result}>FlashCard {index}</p>
                    <Icon icon={result} />
                </div>
            )
        }
    }

    const [status, setStatus] = useState({
        stage: 1,
        result: ""
    });
    const {front, back, index, finished} = props;

    const content = stageAssemble();
    return <div className="FlashCard">{content}</div>
}