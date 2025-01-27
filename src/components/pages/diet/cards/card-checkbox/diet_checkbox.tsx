import style from "../../../create/cards/card-muscle-radio/muscle_radio.module.sass";

interface DietRadioProps {
  name: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string
}

const DietCheckbox: React.FC<DietRadioProps> = ({ name, id, onChange, type}) => {
  return (
    <div className={style.card_radio}>
      <input type="checkbox" id={`radio-${id}`} name={`${type}-option`} onChange={onChange} value={id} />
      <label htmlFor={`radio-${id}`}>
        <h4>{name}</h4>
        <img
          src={`/assets/diet/${id}.png`}
          alt=""
        />
      </label>
    </div>
  );
};

export default DietCheckbox;
