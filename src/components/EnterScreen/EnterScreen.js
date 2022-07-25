import {useState} from "react";

import Logo from "../../assets/img/logo.png";
import "./style.css";

export default function EnterScreen() {
  const [visible, setInvisible] = useState(true);

  return (
    visible ? <div className="EnterScreen">
      <img src={Logo} alt="Zap Recall!" />
      <h1>ZapRecall</h1>
      <button onClick={() => setInvisible(false)}>Iniciar Recall!</button>
    </div>: <></>
  )
}
