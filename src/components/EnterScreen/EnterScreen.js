import {useState} from "react";

import Logo from "../../assets/img/logo.png";
import "./style.css";

export default function Home() {
  const [hidden, setUnhidden] = useState(false);

  return (
    hidden ? <div className="home">
      <img src={Logo} alt="Zap Recall!" />
      <h1>ZapRecall</h1>
      <button onClick={() => setUnhidden(true)}>Iniciar Recall!</button>
    </div>: <></>
  )
}
