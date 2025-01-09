import { useEffect, useState } from "react";
import Exercise from "../exercise/exercise";
import style from "./group_exercise.module.sass";
import { GET } from "../../../../core/services/get";
import Cardio from "../cardio/cardio";
import { Link } from "react-router-dom";

interface GroupExerciseProps {
  dailyId: string | unknown;
}

const GroupExercise: React.FC<GroupExerciseProps> = ({ dailyId }) => {
  const [exerciseBulding, setExerciseBulding] = useState<
    {
      name: string;
      sets: number;
      reps: number;
      load: number;
      muscleGroup: string;
      equipment: string;
      id: string;
    }[]
  >([]);
  const [exerciseCardio, setExerciseCardio] = useState<
    {
      cardioExercise: string;
      time: number;
      description: string;
      equipment: string;
      id: string;
    }[]
  >([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRoutines = async () => {
      try {
        const result = await GET(
          `http://localhost:8080/gymbro/daily/${dailyId}`
        );
        if (result.success) {
          setExerciseBulding(result.data.bodybuildingExercises);
          setExerciseCardio(result.data.cardioExercises);
      
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
  }, [dailyId]);

  return (
    <div className={style.container_group}>
      {loading ? (
        <p>Carregando rotinas...</p>
      ) : exerciseCardio.length > 0 || exerciseBulding.length > 0 ? (
        <>
          {exerciseCardio.length > 0 && (
            <div>
              <h1>Cardio</h1>
              <div className={style.group_exercise}>
                {exerciseCardio.map((c) => (
                  <Cardio
                    key={c.id}
                    name={c.cardioExercise}
                    time={c.time}
                    description={c.description}
                    equipment={c.equipment} id={c.id}                  />
                ))}
              </div>
            </div>
          )}

          {exerciseBulding.length > 0 && (
            <div>
              <h1>Bodybuilding</h1>
              <div className={style.group_exercise}>
                {exerciseBulding.map((e) => (
                  <Exercise
                    key={e.id}
                    name={e.name}
                    sets={e.sets}
                    reps={e.reps}
                    load={e.load}
                    equipment={e.equipment}
                    muscle={e.muscleGroup} id={e.id}                  />
                ))}
              </div>
            </div>
          )}
        </>
      ) : (
        <p>Nenhum exercício encontrado. <Link to={"/exercise/bodybuilding"}>Clique aqui</Link></p>
      )}
    </div>
  );
};

export default GroupExercise;
