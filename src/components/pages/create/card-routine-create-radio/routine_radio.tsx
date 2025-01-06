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

      <button className={style.deleteRoutine}><i className="fi fi-rs-x"></i></button>
    </div>
  );
};

export default RoutineRadioCreate;
