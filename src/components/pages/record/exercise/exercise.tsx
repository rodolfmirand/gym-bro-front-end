import PopUpExercice from "../popup-menu/popup_menu";
import style from "./exercise.module.sass";


export default function Exercise() {
  return (
    <>
      <div className={style.body_exercise}>
        <div className={style.info_exercise}>

          <div className={style.text_exercise}>
            <h1>Cross Over</h1>
            <div className={style.subtext_exercise}>
              <p>Peito</p>
              <p>3x12 reps</p>
            </div>
          </div>

          <PopUpExercice />

        </div>
        <div className={style.current_exercise}>
          <p>Carga: <strong>12 KG</strong></p>
        </div>
      </div>
    </>
  );
} 

