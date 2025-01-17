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
        <GroupRoutine personId={userId} onRoutineId={handleRoutineId} />
        <div className={style.title_exercise}>
          <h1>Treino A</h1> 
        </div>

        <div className={style.container_exercise}>
          <GroupExercise dailyId={routineId}/>
        </div>
      </div>
    </>
  );
}
