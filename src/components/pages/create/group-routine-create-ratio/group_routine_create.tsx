import RoutineRadio from "../../record/card-routine-radio/routine_radio";

import style from "./group_routine_create.module.sass";

const routine = ["A", "B", "C", "D"];

export default function GroupRoutineCreate() {
  return (
    <div className={style.group_routine_create}>
      {routine.map((routine) => (
        <RoutineRadio key={routine} day={routine} />
      ))}
    </div>
  );
}
