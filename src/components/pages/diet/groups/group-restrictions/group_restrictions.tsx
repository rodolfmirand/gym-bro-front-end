
import DietCheckbox from "../../cards/card-checkbox/diet_checkbox";
import style from "../group_diet.module.sass";

interface GroupProps {
  onChange: (value: string) => void;
}

const GroupRestrictions: React.FC<GroupProps> = ({ onChange }) => {
  const restrictions = [
    { id: "LACTOSE_INTOLERANCE", name: "lactose int." },
    { id: "GLUTEN_INTOLERANCE", name: "gluten int." },
    { id: "NUT_ALLERGY", name: "nut allergy" },
    { id: "SEAFOOD_ALLERGY", name: "seafood allergy" },
  ];

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={style.group_diet}>
      {restrictions.map((restrictions) => (
        <DietCheckbox
          key={restrictions.id}
          name={restrictions.name}
          id={restrictions.id}
          onChange={handleRadioChange}
          type={"restrictions"}
        />
      ))}
    </div>
  );
};

export default GroupRestrictions;
