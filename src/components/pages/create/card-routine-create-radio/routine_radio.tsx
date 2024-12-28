import style from "./routine_radio.module.sass";

interface RoutineProps {
  day: string;
  id: string;
  onClick: (id: string) => void; 
}

const RoutineRadioCreate: React.FC<RoutineProps> = ({ day, id, onClick }) => {
  const handleClick = () => {
    onClick(id); 
  };

  return (
    <div className={style.routine_radio}>
      <input
        type="radio"
        id={`radio-${day}`}
        name="routine-option"
        onClick={handleClick}
      />
      <label htmlFor={`radio-${day}`}>
        <h4>{day}</h4>
      </label>
    </div>
  );
};

export default RoutineRadioCreate;
