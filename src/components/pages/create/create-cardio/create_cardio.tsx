// CreateCardio.tsx
import React, { useState } from "react";
import InputField from "../../../common/input/input";
import GroupCadio from "../group-cardio-ratio/group_cardio";
import GroupRoutineCreate from "../group-routine-create-ratio/group_routine_create";
import style from "./create_cardio.module.sass";
import { Post } from "../../../../core/services/post-auth";

export default function CreateCardio() {
  const [form, setForm] = useState({
    equipment: "",
    description: "",
    time: "",
    videoUrl: "",
    cardioExercise: "",
  });

  const userId = localStorage.getItem("userId");
  const [routineId, setRoutineId] = useState<string | null>(null);

  const handleExerciseChange = (value: string) => {
    setForm((data) => ({ ...data, cardioExercise: value }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setForm((data) => ({ ...data, [id]: value }));
  };

  const handleRoutineId = (id: string) => {
    setRoutineId(id);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (routineId) {
      const result = await Post(
        `http://localhost:8080/gymbro/daily/cardio/${routineId}`,
        form,
        localStorage.getItem("token")
      );

      if (result.success) {
        console.log("Exercicio registrado com sucesso!");
      } else {
        console.error("Erro ao registrar exercicio:", result.message);
      }
    } else {
      console.error("Nenhuma rotina selecionada.");
    }
  };

  return (
    <>
      <div className={style.body_exercise}>
        <div className={style.cardioGroup_exercise}>
          <div className={style.text_exercise}>
            <h3>Select the cardio: </h3>
          </div>
          <GroupCadio onChange={handleExerciseChange} />
        </div>

        <div className={style.container_form}>
          <div className={style.text_exercise}>
            <h3>Register the exercise: </h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className={style.same_place}>
              <InputField
                label="equipment"
                placeholder="Enter the device to be used:"
                type="text"
                iconClass="fi fi-rs-stationary-bike"
                onChange={handleChange}
              />
              <InputField
                label="description"
                placeholder="Enter the description:"
                type="text"
                iconClass="fi fi-rs-notebook-alt"
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
            <div className={style.routine_day}>
              <label>Routine day</label>
              <GroupRoutineCreate
                personId={userId}
                onRoutineId={handleRoutineId}
              />
            </div>
            <button type="submit">Create</button>
          </form>
        </div>
      </div>
    </>
  );
}
