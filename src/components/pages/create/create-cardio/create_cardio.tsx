import InputField from "../../../common/input/input";
import GroupCadio from "../group-cardio-ratio/group_cardio";
import GroupRoutineCreate from "../group-routine-create-ratio/group_routine_create";

import style from "./create_cardio.module.sass";

export default function CreateCardio() {
  return (
    <>
      <div className={style.body_exercise}>
        <div className={style.cardioGroup_exercise}>
          <div className={style.text_exercise}>
            <h3>Select the cardio: </h3>
          </div>
          <GroupCadio />
        </div>

        <div className={style.container_form}>
          <div className={style.text_exercise}>
            <h3>Register the exercise: </h3>
          </div>
          <form action="">
            <div className={style.same_place}>
              <InputField
                label="Equipament:"
                placeholder="Enter the device to be used:"
                type="text"
                iconClass="fi fi-rs-stationary-bike"
              />
              <InputField
                label="Description:"
                placeholder="Enter the description:"
                type="text"
                iconClass="fi fi-rs-notebook-alt"
              />
              <InputField
                label="Time:"
                placeholder=""
                type="number"
                iconClass="fi fi-rs-time-oclock"
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
    </>
  );
}
