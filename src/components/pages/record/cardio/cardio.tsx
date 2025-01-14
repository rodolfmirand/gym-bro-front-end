import PopUpExercice from "../popup-menu/popup_menu";
import style from "../exercise/exercise.module.sass";

interface ExerciseProps {
  name: string;
  description: string;
  time: number;
  equipment: string;
  id: string;
  onLoading: (newLoading: boolean) => void;
}

const Cardio: React.FC<ExerciseProps> = ({ id, name, description, time, equipment, onLoading }) => {
  return (
    <>
      <div className={style.body_exercise}>
        <div className={style.info_exercise}>

          <div className={style.text_exercise}>
            <h1>{name}</h1>
            <div className={style.subtext_exercise}>
              <p>{equipment}</p>
              <p>{time}</p>
            </div>
          </div>

          <PopUpExercice exerciseId={id} exerciseType={"cardio"} onLoading={onLoading} />

        </div>
        <div className={style.current_exercise}>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
} 

export default Cardio;