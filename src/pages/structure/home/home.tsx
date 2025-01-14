import CardHome from "../../../components/pages/home/card_home/card_home";
import style from "./home.module.sass";

const menu = [
  { link: "/record", text: "Seu treino", video: "https://assets.mixkit.co/videos/52106/52106-720.mp4"},
  { link: "/exercise", text: "Montar exercicio", video: "https://assets.mixkit.co/videos/606/606-720.mp4"},
];

export default function Home() {
  return (
    <>
      <div className={style.container_home}>
        <div className={style.title_home}>
          <h1>HOME</h1>
        </div>
        <div className={style.grid}>
          {menu.map((item) => (
            <CardHome key={item.link} link={item.link} text={item.text} url={item.video} />
          ))}
        </div>
      </div>
    </>
  );
}
