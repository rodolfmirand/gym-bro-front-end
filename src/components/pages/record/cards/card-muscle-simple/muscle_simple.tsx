import style from "./muscle_simple.module.sass";

interface MuscleRadioProps {
  name: string;
  id: string;
}

const MuscleSimple: React.FC<MuscleRadioProps> = ({ name, id}) => {
  return (
    <div className={style.card_radio}>
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

export default MuscleSimple;
