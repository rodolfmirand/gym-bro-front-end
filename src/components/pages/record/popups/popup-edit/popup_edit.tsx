import { useState } from "react";
import { UPDATE } from "../../../../../core/services/update";
import style from "./popup_edit.module.sass";
import Popup from "reactjs-popup";
import InputField from "../../../../common/input/input";

interface PopUpEditProps {
  exerciseId: string;
  exerciseType: string;
}

export default function PopUpEdit({
  exerciseId,
  exerciseType,
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
                    iconClass="fi fi-rs-stationary-bike"
                    onChange={handleChange}
                  />
                  <InputField
                    label="time"
                    placeholder=""
                    type="number"
                    iconClass="fi fi-rs-time-oclock"
                    onChange={handleChange}
                  />
                </div>
                <InputField
                  label="description"
                  placeholder="Enter the description:"
                  type="text"
                  iconClass="fi fi-rs-notebook-alt"
                  onChange={handleChange}
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
                  />
                  <InputField
                    label="equipment"
                    placeholder=""
                    type="text"
                    iconClass="fi fi-rs-stationary-bike"
                    onChange={handleChange}
                  />
                </div>
                <div className={style.same_place}>
                  <InputField
                    label="sets"
                    placeholder=""
                    type="number"
                    iconClass="fi fi-rs-memo-pad"
                    onChange={handleChange}
                  />
                  <InputField
                    label="reps"
                    placeholder=""
                    type="number"
                    iconClass="fi fi-rs-endless-loop"
                    onChange={handleChange}
                  />
                  <InputField
                    label="load"
                    placeholder=""
                    type="number"
                    iconClass="fi fi-rs-gym"
                    onChange={handleChange}
                  />
                </div>
              </>
            )}
            <div className={style.actions}>
              <button>Cancelar</button>
              <button type="submit">Salvar</button>
            </div>
          </form>
        </div>
      </div>
    </Popup>
  );
}
