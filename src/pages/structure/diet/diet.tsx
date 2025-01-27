import GroupObejective from "../../../components/pages/diet/groups/group-objective/group_objective";
import GroupRestrictions from "../../../components/pages/diet/groups/group-restrictions/group_restrictions";
import GroupSpecific from "../../../components/pages/diet/groups/group-specific/group_specific";
import style from "./diet.module.sass";

export default function Diet() {
  const handleChange = () => {
    console.log("");
  };
  return (
    <div className={style.container_diet}>
      <div className={style.section_title}>
        <h1>Build your diet</h1>
      </div>

      <div className={style.container_options}>
        <div className={style.container_groups}>
          <h3>Select the objective: </h3>
          <GroupObejective onChange={handleChange} />
        </div>
        <div className={style.container_groups}>
          <h3>Select the specific diet: </h3>
          <GroupSpecific onChange={handleChange} />
        </div>
        <div className={style.container_groups}>
          <h3>Select the dietary restrictions: </h3>
          <GroupRestrictions onChange={handleChange} />
        </div>
      </div>
      <button className={style.submit} type="submit">Create</button>
    </div>
  );
}
