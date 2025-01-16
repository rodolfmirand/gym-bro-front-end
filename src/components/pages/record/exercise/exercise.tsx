
import PopUpExercice from "../popups/popup-menu/popup_menu";
import style from "./exercise.module.sass";

interface ExerciseProps {
  id: string;
  name: string;
  sets: number;
  reps: number;
  load: number;
  equipment: string;
  muscle: string;
  onLoading: (newLoading: boolean) => void;
}

const Exercise: React.FC<ExerciseProps> = ({id, name, sets, reps, load, equipment, muscle, onLoading}) => {
  return (
    <>
      <div className={style.body_exercise}>
        <div className={style.info_exercise}>

          <div className={style.text_exercise}>
            <h1>{name}</h1>
            <div className={style.subtext_exercise}>
              <p>{muscle}</p>
              <p>{sets}x{reps} reps</p>
              <p>{equipment}</p>
            </div>
          </div>

          <PopUpExercice exerciseId={id} exerciseType={"bodybuilding"} onLoading={onLoading} />

        </div>
        <div className={style.current_exercise}>
          <p>Carga: <strong>{load} KG</strong></p>
        </div>
      </div>
    </>
  );
} 

export default Exercise;