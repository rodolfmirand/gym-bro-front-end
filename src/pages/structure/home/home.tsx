import CardHome from "../../../components/pages/home/card_home/card_home";
import style from "./home.module.sass";

const menu = [
  { link: "/record", text: "Seu treino" },
  { link: "/exercise", text: "Montar exercicio" },
  { link: "link3", text: "Lorem1" },
  { link: "link4", text: "Lorem2" },
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
            <CardHome key={item.link} link={item.link} text={item.text} />
          ))}
        </div>
      </div>
    </>
  );
}
