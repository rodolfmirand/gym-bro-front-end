import style from "./muscle_radio.module.sass";

interface MuscleRadioProps {
  name: string; // O tipo pode ser ajustado com base no que 'a' realmente representa
}

const MuscleRadio: React.FC<MuscleRadioProps> = ({ name }) => {
  return (
    <div className={style.card_radio}>
      <input type="radio" id={`radio-${name}`} name="exercise-option" />
      <label htmlFor={`radio-${name}`}>
        <h4>{name}</h4>
        <img
          src={`/assets/group-muscle/${name}.png`}
          alt="Posterior View"
        />
      </label>
    </div>
  );
};

export default MuscleRadio;
