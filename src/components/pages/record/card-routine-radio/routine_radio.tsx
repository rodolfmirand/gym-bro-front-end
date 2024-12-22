import style from "./routine_radio.module.sass";

interface RoutineProps {
  day: string;
}

const RoutineRadio: React.FC<RoutineProps> = ({ day }) => {
  return (
    <div className={style.routine_radio}>
      <input type="radio" id={`radio-${day}`} name="routine-option" />
      <label htmlFor={`radio-${day}`}>
        <h4>{day}</h4>
      </label>
    </div>
  );
};

export default RoutineRadio;
