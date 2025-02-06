import { useCallback, useEffect, useState } from "react";
import style from "./group_routine.module.sass";
import { DELETE } from "../../../../../core/services/delete";
import { GET } from "../../../../../core/services/get";
import RoutineRadio from "../../cards/card-routine-radio/routine_radio";
import { POST } from "../../../../../core/services/post-auth";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface GroupRoutineRecord {
  personId: string | unknown;
  onRoutineId: (id: string) => void;
}

const GroupRoutine: React.FC<GroupRoutineRecord> = ({
  personId,
  onRoutineId,
}) => {
  const [routines, setRoutines] = useState<{ name: string; id: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [routineId, setRoutineId] = useState<string | null>(null);
  const [deleting, setDeleting] = useState<boolean>(false);

  const fetchRoutines = useCallback(async () => {
    try {
      const result = await GET(
        `http://localhost:8080/gymbro/daily/findbyperson/${personId}`
      );

      if (result.success) {
        const sortedRoutines = result.data.sort(
          (a: { name: string }, b: { name: string }) =>
            a.name.localeCompare(b.name)
        );
        setRoutines(sortedRoutines);

        if (result.data.length > 0 && !routineId) {
          setRoutineId(result.data[0].id);
          onRoutineId(result.data[0].id);
        }
      } else {
        console.error("Erro ao buscar rotinas:", result.message);
      }
    } catch (error) {
      console.error("Erro na solicitação:", error);
    } finally {
      setLoading(false);
    }
  }, [personId, routineId, onRoutineId]);

  useEffect(() => {
    fetchRoutines();
  }, [fetchRoutines]);

  const handleClickCreate = async () => {
    setLoading(true);
    try {
      const result = await POST(
        `http://localhost:8080/gymbro/daily/${localStorage.getItem("userId")}`,
        {},
        localStorage.getItem("token")
      );

      if (result.success) {
        fetchRoutines();
      } else {
        console.error("Erro ao buscar rotinas:", result.message);
      }
    } catch (error) {
      console.error("Erro na solicitação:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRoutine = async (idRoutine: string) => {
    if (deleting) {
      setLoading(true);
      try {
        const result = await DELETE(
          `http://localhost:8080/gymbro/daily/${idRoutine}/${localStorage.getItem(
            "userId"
          )}`,
          localStorage.getItem("token")
        );

        if (result.success) {
          fetchRoutines();
        } else {
          console.error("Erro ao buscar rotinas:", result.message);
        }
      } catch (error) {
        console.error("Erro na solicitação:", error);
      } finally {
        setDeleting(false);
        setLoading(false);
      }
    } else {
      setRoutineId(idRoutine);
      onRoutineId(idRoutine);
    }
  };

  const handleClickDelete = async () => {
    setDeleting((prev) => !prev);
  };

  return (
    <div className={style.group_routine_container}>
      <div className={style.header_routine_options}>
        <h1>Routines:</h1>
        <div className={style.group_routine_options}>
          {routines.length > 1 && (
            <button onClick={handleClickDelete}>
              {deleting ? (
                <i className="fi fi-rs-x"></i>
              ) : (
                <i className="fi fi-rs-trash"></i>
              )}
            </button>
          )}
          {routines.length < 5 && (
            <button
              className={style.createRoutine}
              onClick={handleClickCreate}
              disabled={loading}
            >
              <i className="fi fi-rs-plus"></i>
            </button>
          )}
        </div>
      </div>
      <div className={style.group_routine}>
        {loading ? (
          <DotLottieReact
            className={style.animated_Icon}
            src="https://lottie.host/dc467656-77ec-48df-a597-f3936ab89e78/UpBTTawhrL.lottie"
            loop
            autoplay
          />
        ) : routines.length > 0 ? (
          routines.map((routine) => (
            <RoutineRadio
              key={routine.id}
              day={routine.name}
              id={routine.id}
              onClick={() => handleRoutine(routine.id)}
              checked={routineId === routine.id}
              className={deleting ? "deleting" : ""}
            />
          ))
        ) : (
          <p>Nenhuma rotina encontrada.</p>
        )}
      </div>
    </div>
  );
};

export default GroupRoutine;
