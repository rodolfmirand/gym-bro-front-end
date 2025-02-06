import { useState } from "react";
import style from "./record.module.sass";
import GroupRoutine from "../../../components/pages/record/groups/group-routine-radio/group_routine";
import GroupExercise from "../../../components/pages/record/groups/group-exercise/group_exercise";

export default function Record() {
  const userId = localStorage.getItem("userId");
  const [routineId, setRoutineId] = useState<string | null>(null);

  const handleRoutineId = (id: string) => {
    setRoutineId(id);
  };

  return (
    <>
      <div className={style.container_record}>
        <div className={style.container_routines}>
          {/* Agrupamento das rotinas de exercicios */}
          <GroupRoutine personId={userId} onRoutineId={handleRoutineId} />
          <div className={style.title_exercise}>
            <h1>Exercises: </h1>
          </div>
        </div>
        {/* Agrupamento dos exercicios */}
        <div className={style.container_exercise}>
          <GroupExercise dailyId={routineId} />
        </div>
      </div>
    </>
  );
}
