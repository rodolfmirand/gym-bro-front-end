import MuscleRadio from "../card-muscle-radio/muscle_radio";
import style from "./group_cardio.module.sass";

const exercise = ["cycling", "dance", "jump rope", "running", "swimming"];

export default function GroupCadio() {
  return (
    <div className={style.group_cardio}>
      {exercise.map((exercise) => (
        <MuscleRadio key={exercise} name={exercise} />
      ))}
    </div>
  );
}
