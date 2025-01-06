import style from "./routine_radio.module.sass";

interface RoutineProps {
  day: string;
  id: string;
  onClick: (id: string) => void; 
  checked: boolean
}

const RoutineRadio: React.FC<RoutineProps> = ({ day, id, onClick, checked }) => {
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
        defaultChecked={checked}
      />
      <label htmlFor={`radio-${day}`}>
        <h4>{day}</h4>
      </label>
    </div>
  );
};

export default RoutineRadio;
