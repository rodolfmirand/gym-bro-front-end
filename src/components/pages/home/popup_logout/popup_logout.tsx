import style from "./popup_logout.module.sass";
import Popup from "reactjs-popup";
import { DELETE } from "../../../../core/services/delete";

interface PopUpDeleteProps {
  exerciseId: string; 
}

export default function PopUpLogout({ exerciseId }: PopUpDeleteProps) {
  const handleDelete = async () => {
    const response = await DELETE(
      `http://localhost:8080/gymbro/exercise/${exerciseId}`,
      localStorage.getItem("token")
    );

    if (response.success) {
      console.log("Exercício deletado com sucesso!");
    } else {
      console.log(`Erro ao deletar: ${response.message}`);
    }
  };

  return (
    <>
      <Popup
        modal
        trigger={
          <button className={style.button}>
            <i className="fi fi-rs-sign-out-alt"></i> Logout{" "}
          </button>
        }
        nested
      >
        <div className={style.modal}>
          <div className={style.header}>Logout</div>
          <div className={style.content}>
            Tem certeza de que deseja finalizar sua sessão?
          </div>
          <div className={style.actions}>
            <button
              onClick={() => {
                close();
              }}
              className={style.cancelButton}
            >
              Cancelar
            </button>
            <button onClick={handleDelete} className={style.deleteButton}>
              Sair
            </button>
          </div>
        </div>
      </Popup>
    </>
  );
}
