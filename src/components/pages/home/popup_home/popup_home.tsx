import style from "./popup_home.module.sass";
import Popup from 'reactjs-popup';


const PopUpHome: React.FC = () => {
  return (
    <>
      <Popup
        trigger={<button> <i className="fi fi-rs-user"></i></button>}
        position="bottom center"
        arrow={false}
        closeOnDocumentClick={false}
      >
        <div className={style.menu}>
          <div className={style.menu_item}><i className="fi fi-rs-sign-out-alt"></i> Logout</div>
        </div>
      </Popup>
    </>
  );
}

export default PopUpHome;