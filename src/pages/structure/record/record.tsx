import Exercise from "../../../components/pages/record/exercise/exercise";
import GroupRoutine from "../../../components/pages/record/group-routine-ratio/group_exercise";
import style from "./record.module.sass";

export default function Record() {
  return (
    <>
      <div className={style.container_record}>
        <GroupRoutine />
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
