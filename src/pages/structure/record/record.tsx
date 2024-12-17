import Exercise from "../../../components/exercise/exercise";
import style from "./record.module.sass";

export default function Record() {
  return (
    <>
      <div className={style.container_record}>
        <div className={style.day_training}>
          <button>A</button>
          <button>B</button>
          <button>C</button>
        </div>
        <div className={style.title_exercise}>
          <h1>Treino A</h1>
        </div>
        <div className={style.container_exercise}>
          <Exercise />
          <Exercise />
          <Exercise />
          <Exercise />
         
        </div>
      </div>
    </>
  );
}
