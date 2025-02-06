import { useState, useEffect } from "react";
import GroupObejective from "../../../components/pages/diet/groups/group-objective/group_objective";
import GroupRestrictions from "../../../components/pages/diet/groups/group-restrictions/group_restrictions";
import GroupSpecific from "../../../components/pages/diet/groups/group-specific/group_specific";
import style from "./diet.module.sass";
import { POST } from "../../../core/services/post";

export default function Diet() {
  const [message, setMessage] = useState<string | null>(null);
  const [displayedMessage, setDisplayedMessage] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<{
    objectives: string[];
    diet: string;
    dietaryRestrictions: string[];
  }>({
    objectives: [],
    diet: "vegan",
    dietaryRestrictions: [],
  });

  useEffect(() => {
    if (message) {
      let index = -1;

      const interval = setInterval(() => {
        setDisplayedMessage((prev) => prev + message[index]);
        index++;
        if (index >= message.length) {
          clearInterval(interval);
        }
      }, 50);
      return () => clearInterval(interval);
    }
    setDisplayedMessage("");
  }, [message]);

  const handleChange = (field: string, value: string) => {
    if (field === "dietaryRestrictions" || field === "objectives") {
      setForm((data) => {
        const updatedArray = data[
          field as "dietaryRestrictions" | "objectives"
        ].includes(value)
          ? data[field as "dietaryRestrictions" | "objectives"].filter(
              (item) => item !== value
            )
          : [...data[field as "dietaryRestrictions" | "objectives"], value];
        return { ...data, [field]: updatedArray };
      });
    } else {
      setForm((data) => ({ ...data, [field]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      const result = await POST(
        `http://localhost:8080/gymbro/gemini/${localStorage.getItem("userId")}`,
        form
      );

      if (result.success) {
        setMessage(result.message ?? "An unexpected error occurred.");
      } else {
        console.error("Erro ao registrar exercicio: ", result.message);
        setMessage(result.message ?? "An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={style.container_diet}>
      <div className={style.section_title}>
        <h1>Build your diet</h1>
      </div>
      {message ? (
        <div className={style.message}>
          <p>{displayedMessage}</p>
        </div>
      ) : (
        <div className={style.container_options}>
          <div className={style.container_groups}>
            <h3>Select the objective: </h3>
            <GroupObejective
              onChange={(value) => handleChange("objectives", value)}
            />
          </div>
          <div className={style.container_groups}>
            <h3>Select the specific diet: </h3>
            <GroupSpecific onChange={(value) => handleChange("diet", value)} />
          </div>
          <div className={style.container_groups}>
            <h3>Select the dietary restrictions: </h3>
            <GroupRestrictions
              onChange={(value) => handleChange("dietaryRestrictions", value)}
            />
          </div>
        </div>
      )}
      <button
        className={style.submit}
        onClick={handleSubmit}
        disabled={loading}
      >
        {" "}
        {loading ? "Creating..." : "Create"}
      </button>
    </div>
  );
}
