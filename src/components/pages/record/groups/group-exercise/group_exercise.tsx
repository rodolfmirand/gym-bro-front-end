import { useEffect, useState } from "react";
import style from "./group_exercise.module.sass";
import { Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { GET } from "../../../../../core/services/get";
import Cardio from "../../cards/card-cardio/cardio";
import Exercise from "../../cards/card-exercise/exercise";

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
  const [needsUpdate, setNeedsUpdate] = useState<boolean>(false);

  useEffect(() => {
    const fetchRoutines = async () => {
      try {
        const result = await GET(
          `https://gym-bro-ysay.onrender.com/gymbro/daily/${dailyId}`
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
        setNeedsUpdate(false);
      }
    };

    fetchRoutines();
  }, [dailyId, needsUpdate]);

  const recallLoading = (newLoading: boolean) => {
    setLoading(newLoading);
    if (newLoading) {
      // Ativa o recarregamento ao mudar o estado de loading para true
      setNeedsUpdate(true);
    }
  };

  return (
    <div className={style.container_group}>
      {loading ? (
        <DotLottieReact
          className={style.animated_Icon}
          src="https://lottie.host/dc467656-77ec-48df-a597-f3936ab89e78/UpBTTawhrL.lottie"
          loop
          autoplay
        />
      ) : exerciseCardio.length > 0 || exerciseBulding.length > 0 ? (
        <>
          {exerciseCardio.length > 0 && (
            <>
              <h1>Cardio</h1>
              <div className={style.group_exercise}>
                {exerciseCardio.map((c) => (
                  <Cardio
                    key={c.id}
                    name={c.cardioExercise}
                    time={c.time}
                    description={c.description}
                    equipment={c.equipment}
                    id={c.id}
                    onLoading={recallLoading}
                  />
                ))}
              </div>
            </>
          )}

          {exerciseBulding.length > 0 && (
            <>
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
                    muscle={e.muscleGroup}
                    id={e.id}
                    onLoading={recallLoading}
                  />
                ))}
              </div>
            </>
          )}
        </>
      ) : (
        <div className={style.notFound_container}>
          <p>
            Nenhum exercício encontrado.{" "}
            <Link to={"/exercise/bodybuilding"}>Cadastre aqui</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default GroupExercise;
