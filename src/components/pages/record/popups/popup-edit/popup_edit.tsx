import { useEffect, useState } from "react";
import { UPDATE } from "../../../../../core/services/update";
import style from "./popup_edit.module.sass";
import Popup from "reactjs-popup";
import { GET } from "../../../../../core/services/get";
import InputField from "../../../../common/input-edit/input";

interface PopUpEditProps {
  exerciseId: string;
  exerciseType: string;
  onLoading: (loading: boolean) => void;
}

export default function PopUpEdit({
  exerciseId,
  exerciseType,
  onLoading,
}: PopUpEditProps) {
  const [formExercise, setFormExercise] = useState({
    name: "",
    equipment: "",
    sets: "",
    reps: "",
    load: "",
  });

  const [formCardio, setFormCardio] = useState({
    equipment: "",
    description: "",
    time: "",
  });

  useEffect(() => {
    const fetchRoutines = async () => {
      try {
        const result = await GET(
          `http://localhost:8080/gymbro/exercise/${exerciseId}`
        );
        if (result.success) {
          if (exerciseType === "cardio") {
            setFormCardio(result.data);
          } else {
            setFormExercise(result.data);
          }
        } else {
          console.error("Erro ao buscar rotinas:", result.message);
        }
      } catch (error) {
        console.error("Erro na solicitação:", error);
      }
    };

    fetchRoutines();
  }, [exerciseId, exerciseType]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formUpdate = exerciseType === "cardio" ? formCardio : formExercise;
    console.log("Dados enviados:", formUpdate);
    const result = await UPDATE(
      `http://localhost:8080/gymbro/exercise/${exerciseId}`,
      formUpdate,
      localStorage.getItem("token")
    );

    if (result.success) {
      console.log("Sucesso ao atualizar o exercício");
      onLoading(true);
      close();
    } else {
      console.error("Erro ao registrar exercício:", result.message);
      console.log(formUpdate);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    if (exerciseType === "cardio") {
      setFormCardio((data) => ({ ...data, [id]: value }));
    } else {
      if (id === "sets" || id === "reps" || (id === "load" && value)) {
        setFormExercise((data) => ({
          ...data,
          [id]: value ? parseFloat(value) : 0,
        }));
      } else {
        setFormExercise((data) => ({ ...data, [id]: value }));
      }
    }
  };

  const renderPopupContent = (close: () => void) => (
    <div className={style.modal}>
      <div className={style.header}>
        <h3>Edit your exercise:</h3>
      </div>
      <div className={style.content}>
        <form onSubmit={handleSubmit}>
          {exerciseType === "cardio" ? (
            <>
              <div className={style.same_place}>
                <InputField
                  label="equipment"
                  placeholder=""
                  type="text"
                  value={formCardio.equipment}
                  iconClass="fi fi-rs-stationary-bike"
                  onChange={handleChange}
                />
                <InputField
                  label="time"
                  placeholder=""
                  type="number"
                  iconClass="fi fi-rs-time-oclock"
                  onChange={handleChange}
                  value={formCardio.time}
                />
              </div>
              <InputField
                label="description"
                placeholder="Enter the description:"
                type="text"
                iconClass="fi fi-rs-notebook-alt"
                onChange={handleChange}
                value={formCardio.description}
              />
            </>
          ) : (
            <>
              <div className={style.same_place}>
                <InputField
                  label="name"
                  placeholder=""
                  type="text"
                  iconClass="fi fi-rs-dumbbell-fitness"
                  onChange={handleChange}
                  value={formExercise.name}
                />
                <InputField
                  label="equipment"
                  placeholder=""
                  type="text"
                  iconClass="fi fi-rs-stationary-bike"
                  onChange={handleChange}
                  value={formExercise.equipment}
                />
              </div>
              <div className={style.same_place}>
                <InputField
                  label="sets"
                  placeholder=""
                  type="number"
                  iconClass="fi fi-rs-memo-pad"
                  onChange={handleChange}
                  value={formExercise.sets}
                />
                <InputField
                  label="reps"
                  placeholder=""
                  type="number"
                  iconClass="fi fi-rs-endless-loop"
                  onChange={handleChange}
                  value={formExercise.reps}
                />
                <InputField
                  label="load"
                  placeholder=""
                  type="number"
                  iconClass="fi fi-rs-gym"
                  onChange={handleChange}
                  value={formExercise.load}
                />
              </div>
            </>
          )}
          <div className={style.actions}>
            <button
              onClick={() => {
                close();
              }}
            >
              Cancelar
            </button>
            <button type="submit">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <Popup
      modal
      trigger={
        <button className={style.button}>
          <i className="fi fi-rs-dumbbell-horizontal"></i> Editar exercício
        </button>
      }
      nested
    >
      {(close: () => void) => renderPopupContent(close)}
    </Popup>
  );
}
