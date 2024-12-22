import InputField from "../../../common/input/input";
import GroupMuscle from "../group-muscle-ratio/group_muscle";
import GroupRoutineCreate from "../group-routine-create-ratio/group_routine_create";

import style from "./create_exercise.module.sass";

export default function CreateExercise() {
  return (
      <div className={style.body_exercise}>
        <div className={style.muscleGroup_exercise}>
          <div className={style.text_exercise}>
            <h3>Select muscle group: </h3>
          </div>
          <GroupMuscle />
        </div>

        <div className={style.container_form}>
          <div className={style.text_exercise}>
            <h3>Register the exercise: </h3>
          </div>
          <form action="">
            <div className={style.same_place}>
              <InputField
                label="Name:"
                placeholder="Enter the name for the exercise:"
                type="text"
                iconClass="fi fi-rs-dumbbell-fitness"
              />
              <InputField
                label="Equipament:"
                placeholder="Enter the device to be used:"
                type="text"
                iconClass="fi fi-rs-stationary-bike"
              />
            </div>
            <div className={style.same_place}>
              <InputField
                label="Sets:"
                placeholder=""
                type="number"
                iconClass="fi fi-rs-memo-pad"
              />
              <InputField
                label="Reps:"
                placeholder=""
                type="number"
                iconClass="fi fi-rs-endless-loop"
              />
              <InputField
                label="Load:"
                placeholder=""
                type="number"
                iconClass="fi fi-rs-gym"
              />
            </div>

            <div className={style.routine_day}>
              <label>Routine day</label>
              <GroupRoutineCreate />
            </div>

            <button type="submit">Create</button>
          </form>
        </div>
      </div>

  );
}
