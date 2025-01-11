import { Link } from "react-router-dom";
import style from "./card_home.module.sass";

interface CardHomeProps {
  link: string;
  text: string;

}
const CardHome: React.FC<CardHomeProps> = ({link, text}) => {
  return (
    <>
      <Link to={link} className={style.item}>
        <div className={style.img}></div>
        <div className={style.text}>
          <h3>{text}</h3>
          <i className="fi fi-rs-arrow-alt-right"></i>
        </div>
      </Link>
    </>
  );
}

export default CardHome;

