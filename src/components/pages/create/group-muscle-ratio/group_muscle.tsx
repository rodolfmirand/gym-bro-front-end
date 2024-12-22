import MuscleRadio from "../card-muscle-radio/muscle_radio";
import style from "./group_muscle.module.sass";

const exercise = [
  "abdominal",
  "back",
  "biceps",
  "chest",
  "hamstrings",
  "quadriceps",
  "shoulders",
  "triceps",
];

export default function GroupMuscle() {
  return (
    <div className={style.group_muscle}>
      {exercise.map((exercise) => (
        <MuscleRadio key={exercise} name={exercise} />
      ))}
    </div>
  );
}
