import { Link } from "react-router-dom";
import style from "./card_home.module.sass";
import { useRef } from "react";

interface CardHomeProps {
  link: string;
  text: string;
  url: string;
}
const CardHome: React.FC<CardHomeProps> = ({ link, text, url }) => {
  const video = useRef<HTMLVideoElement>(null);
  const handleMouseEnter = () => {
    video.current?.play();
  };

  const handleMouseLeave = () => {
    if (video.current) {
      video.current.pause();
      video.current.currentTime = 0;
    }
  };

  return (
    <>
      <Link
        to={link}
        className={style.item}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video ref={video} src={url} muted loop></video>
        <div className={style.text}>
          <h3>{text}</h3>
          <i className="fi fi-rs-arrow-alt-right"></i>
        </div>
      </Link>
    </>
  );
};

export default CardHome;
