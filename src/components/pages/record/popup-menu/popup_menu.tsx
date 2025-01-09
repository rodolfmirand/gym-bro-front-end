import PopUpDelete from "../popup-delete/popup_delete";
import PopUpEdit from "../popup-edit/popup_edit";
import style from "./popup_menu.module.sass";
import Popup from 'reactjs-popup';

interface PopUpExerciceProps {
  exerciseId: string; 
  exerciseType: string;
}

const PopUpExercice: React.FC<PopUpExerciceProps> = ({ exerciseId, exerciseType}) => {
  return (
    <>
      <Popup 
      trigger={<button> <i className="fi fi-rs-menu-dots"></i></button>} 
      position="bottom center"
      arrow={false}
      closeOnDocumentClick={false}
      >
        <div className={style.menu}>
          <div className={style.menu_item}> <PopUpEdit exerciseId={exerciseId} exerciseType={exerciseType}/></div>
          <div className={style.menu_item}> <PopUpDelete exerciseId={exerciseId}/> </div>
        </div>
      </Popup>
    </>
  );
}

export default PopUpExercice;