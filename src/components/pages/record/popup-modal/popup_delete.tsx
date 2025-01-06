import style from "./popup_delete.module.sass";
import Popup from "reactjs-popup";


export default function PopUpDelete() {
  return (
    <>
      <Popup
        modal
        trigger={
          <button className={style.button}>
            <i className="fi fi-rs-dumpster"></i> Deletar exercicio{" "}
          </button>
        }
        className={style.myPopup}
        nested
      >
        {
          <div className={style.modal}>
            <div className={style.header}> Modal Title </div>
            <div className={style.content}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a
              nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet
              quibusdam voluptates delectus doloremque, explicabo tempore dicta
              adipisci fugit amet dignissimos?
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur sit commodi beatae optio voluptatum sed eius cumque,
              delectus saepe repudiandae explicabo nemo nam libero ad,
              doloribus, voluptas rem alias. Vitae?
            </div>
          </div>
        }
      </Popup>
    </>
  );
}
