import style from "../../create/cards/card-muscle-radio/muscle_radio.module.sass";

interface DietRadioProps {
  name: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean
  type: string
}

const DietRadio: React.FC<DietRadioProps> = ({ name, id, onChange, checked, type}) => {
  return (
    <div className={style.card_radio}>
      <input type="radio" id={`radio-${id}`} name={`${type}-option`} onChange={onChange} value={id} defaultChecked={checked}/>
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

export default DietRadio;
