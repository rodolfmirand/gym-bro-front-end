import style from "./muscle_radio.module.sass";

interface MuscleRadioProps {
  name: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MuscleRadio: React.FC<MuscleRadioProps> = ({ name, id, onChange}) => {
  return (
    <div className={style.card_radio}>
      <input type="radio" id={`radio-${id}`} name="exercise-option"  onChange={onChange} value={id}/>
      <label htmlFor={`radio-${id}`}>
        <h4>{name}</h4>
        <img
          src={`/assets/group-muscle/${id}.png`}
          alt=""
        />
      </label>
    </div>
  );
};

export default MuscleRadio;
