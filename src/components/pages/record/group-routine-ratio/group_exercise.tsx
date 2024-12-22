
import RoutineRadio from "../card-routine-radio/routine_radio";
import style from "./group_exercise.module.sass";

const routine = [
  "A",
  "B",
  "C",
  "D",
 
];

export default function GroupRoutine() {
  return (
    <div className={style.group_routine}>
      {routine.map((routine) => (
        <RoutineRadio key={routine} day={routine} />
      ))}
    </div>
  );
}
