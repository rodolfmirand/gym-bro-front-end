import { useState } from "react";
import GroupObejective from "../../../components/pages/diet/groups/group-objective/group_objective";
import GroupRestrictions from "../../../components/pages/diet/groups/group-restrictions/group_restrictions";
import GroupSpecific from "../../../components/pages/diet/groups/group-specific/group_specific";
import style from "./diet.module.sass";

export default function Diet() {
  const [message, setMessage] = useState<string | null>(null); 
  
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<{
    objectives: string;
    diet: string;
    dietaryRestrictions: string[];
  }>({
    objectives: "ENDURANCE",
    diet: "VEGAN",
    dietaryRestrictions: [],
  });

  const handleChange = (field: string, value: string) => {
    if (field === "restriction") {
      setForm((data) => {
        const updatedRestrictions = data.dietaryRestrictions.includes(value)
          ? data.dietaryRestrictions.filter((item) => item !== value)
          : [...data.dietaryRestrictions, value];
        return { ...data, dietaryRestrictions: updatedRestrictions };
      });
    } else {
      setForm((data) => ({ ...data, [field]: value }));
    }
  };
  const log = () => {
    console.log(form)
  }

  return (
    <div className={style.container_diet}>
      <div className={style.section_title}>
        <h1>Build your diet</h1>
      </div>
      {message ? (
        <div className={style.message}>
          <h3>{message}</h3>
        </div>
      ) : (
        <div className={style.container_options}>
          <div className={style.container_groups}>
            <h3>Select the objective: </h3>
            <GroupObejective onChange={(value) => handleChange("objectives", value)} />
          </div>
          <div className={style.container_groups}>
            <h3>Select the specific diet: </h3>
            <GroupSpecific onChange={(value) => handleChange("diet", value)} />
          </div>
          <div className={style.container_groups}>
            <h3>Select the dietary restrictions: </h3>
            <GroupRestrictions onChange={(value) => handleChange("dietaryRestrictions", value)} />
          </div>
        </div>
      )}
      <button className={style.submit} onClick={log}  disabled={loading}> {loading ? "Creating..." : "Create"}</button>
    </div>
  );
}
