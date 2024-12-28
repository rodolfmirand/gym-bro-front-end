import MuscleRadio from "../card-muscle-radio/muscle_radio";
import style from "./group_muscle.module.sass";

interface GroupProps {
  onChange: (value: string) => void;
}

const GroupMuscle: React.FC<GroupProps> = ({ onChange }) => {
  const exercise = [
    { id: "ABDOMINAL", name: "abdominal" },
    { id: "BACK", name: "back" },
    { id: "BICEPS", name: "biceps" },
    { id: "CHEST", name: "chest" },
    { id: "HAMSTRINGS", name: "hamstrings" },
    { id: "QUADRICEPS", name: "quadriceps" },
    { id: "SHOULDERS", name: "shoulders" },
    { id: "TRICEPS", name: "triceps" }
  ];

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={style.group_muscle}>
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

export default GroupMuscle;
