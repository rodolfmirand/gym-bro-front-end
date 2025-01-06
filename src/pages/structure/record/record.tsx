import { useState } from "react";
import GroupExercise from "../../../components/pages/record/group-exercise/group_exercise";
import GroupRoutine from "../../../components/pages/record/group-routine-ratio/group_routine";
import style from "./record.module.sass";


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
