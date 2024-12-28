import React, { useState, useEffect } from "react";
import style from "./group_routine_create.module.sass";
import { GET } from "../../../../core/services/get";
import RoutineRadioCreate from "../card-routine-create-radio/routine_radio";


interface GroupRoutineCreateProps {
  personId: string | unknown;
  onRoutineId: (id: string) => void;
}

  const GroupRoutineCreate: React.FC<GroupRoutineCreateProps> = ({ personId, onRoutineId }) => {
  const [routines, setRoutines] = useState<{ name: string, id: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRoutines = async () => {
      try {
        const result = await GET(`http://localhost:8080/gymbro/daily/${personId}`);
        if (result.success) {
          setRoutines(result.data);
        } else {
          console.error("Erro ao buscar rotinas:", result.message);
        }
      } catch (error) {
        console.error("Erro na solicitação:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRoutines();
  }, [personId]);

  const handleRoutine = (id: string) => {
    onRoutineId(id); 
  };

  return (
    <div className={style.group_routine_create}>
      {loading ? (
        <p>Carregando rotinas...</p>
      ) : routines.length > 0 ? (
        routines.map((routine) => (
          <RoutineRadioCreate key={routine.id} day={routine.name} onClick={() => handleRoutine(routine.id)} id={routine.id}/>
        ))
      ) : (
        <p>Nenhuma rotina encontrada.</p>
      )}
    </div>
  );
}

export default GroupRoutineCreate;