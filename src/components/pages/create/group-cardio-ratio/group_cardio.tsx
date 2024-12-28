import MuscleRadio from "../card-muscle-radio/muscle_radio";
import style from "./group_cardio.module.sass";

interface GroupProps {
  onChange: (value: string) => void;
}

const GroupCadio: React.FC<GroupProps> = ({ onChange }) => {
  const exercise = [
    { id: "CYCLING", name: "cycling" },
    { id: "DANCE", name: "dance" },
    { id: "JUMP_ROPE", name: "jump rope" },
    { id: "RUNNING", name: "running" },
    { id: "SWIMMING", name: "swimming" },
  ];

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={style.group_cardio}>
      {exercise.map((exercise) => (
        <MuscleRadio
          key={exercise.id}
          name={exercise.name}
          id={exercise.id}
          onChange={handleRadioChange}
        />
      ))}
    </div>
  );
};

export default GroupCadio;
