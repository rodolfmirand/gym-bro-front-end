import DietRadio from "../../cards/card-ratio/diet_radio";
import style from "../group_diet.module.sass";

interface GroupProps {
  onChange: (value: string) => void;
}

const GroupSpecific: React.FC<GroupProps> = ({ onChange }) => {
  const specific = [
    { id: "VEGAN", name: "vegan" },
    { id: "VEGETARIAN", name: "vegetarian" },
    { id: "NONE", name: "none" },
  ];

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={style.group_diet}>
      {specific.map((specific) => (
        <DietRadio
          key={specific.id}
          name={specific.name}
          id={specific.id}
          onChange={handleRadioChange}
          checked={specific.id === "VEGAN"}
          type={"specific"}
        />
      ))}
    </div>
  );
};

export default GroupSpecific;
