import React, { useState } from "react";
import { Post } from "../../../../core/services/post-auth";
import InputField from "../../../common/input/input";
import GroupMuscle from "../group-muscle-ratio/group_muscle";
import GroupRoutineCreate from "../group-routine-create-ratio/group_routine_create";

import style from "./create_exercise.module.sass";

export default function CreateExercise() {
  const [form, setForm] = useState({
    name: "",
    equipment: "",
    description: "",
    sets: "",
    reps: "",
    load: "",
    rest: "1",
    muscleGroup: "",
    videoUrl: "",
  });

  const userId = localStorage.getItem("userId");
  const [routineId, setRoutineId] = useState<string | null>(null);

  const handleExerciseChange = (value: string) => {
    setForm((data) => ({ ...data, muscleGroup: value }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    /* Conversor */
    if (id === "sets" || id === "reps" || (id === "load" && value)) {
      setForm((data) => ({
        ...data,
        [id]: value ? parseFloat(value) : 0,
      }));
    } else {
      setForm((data) => ({ ...data, [id]: value }));
    }
  };

  const handleRoutineId = (id: string) => {
    setRoutineId(id);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (routineId) {
      const result = await Post(
        `http://localhost:8080/gymbro/daily/bodybuilding/${routineId}`,
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
    <div className={style.body_exercise}>
      <div className={style.muscleGroup_exercise}>
        <div className={style.text_exercise}>
          <h3>Select muscle group: </h3>
        </div>
        <GroupMuscle onChange={handleExerciseChange} />
      </div>

      <div className={style.container_form}>
        <div className={style.text_exercise}>
          <h3>Register the exercise: </h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={style.same_place}>
            <InputField
              label="name"
              placeholder="Enter the name for the exercise:"
              type="text"
              iconClass="fi fi-rs-dumbbell-fitness"
              onChange={handleChange}
            />
            <InputField
              label="equipment"
              placeholder="Enter the device to be used:"
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

          <div className={style.routine_day}>
            <label>Routine day</label>
            <GroupRoutineCreate
              personId={userId}
              onRoutineId={handleRoutineId}
            />
          </div>

          <button className={style.submit} type="submit">Create</button>
        </form>
      </div>
    </div>
  );
}
