import { ReactComponent as Zap } from "../../assets/img/checkmark-circle-icon.svg";
import { ReactComponent as Error } from "../../assets/img/close-circle-icon.svg";
import { ReactComponent as Doubt } from "../../assets/img/help-circle-icon.svg";
import { ReactComponent as Play } from "../../assets/img/play-outline-icon.svg";

import Party from "../../assets/img/party.png";
import Arrow from "../../assets/img/arrow.png";
import Sad from "../../assets/img/sad.png";

import "./style.css";

export default function Icon (props) {
  const icons = {
    zap: <Zap fill="#2FBE34" />,
    error: <Error fill="#FF3030" />,
    doubt: <Doubt fill="#FF922E" />,
    play: <Play />,
    arrow: <img src={Arrow} alt="turn" />,
    party: <img src={Party} alt="party" />,
    sad: <img src={Sad} alt="sad" />
  };

  const {icon} = props;
  const css = `Icon ${icon}`;
  return <span className={css}>{icons[icon]}</span>
}

