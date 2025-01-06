import PopUpDelete from "../popup-modal/popup_delete";
import style from "./popup_menu.module.sass";
import Popup from 'reactjs-popup';

export default function PopUpExercise() {
  return (
    <>
      <Popup 
      trigger={<button> <i className="fi fi-rs-menu-dots"></i></button>} 
      position="bottom center"
      arrow={false}
      
      >
        <div className={style.menu}>
          <div className={style.menu_item}><i className="fi fi-rs-dumbbell-horizontal"></i> Editar exercicio</div>
          <div className={style.menu_item}> <PopUpDelete/> </div>
        </div>
      </Popup>
    </>
  );
}

