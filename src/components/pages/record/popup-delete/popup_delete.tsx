import style from "./popup_delete.module.sass";
import Popup from "reactjs-popup";
import { DELETE } from "../../../../core/services/delete";

interface PopUpDeleteProps {
  exerciseId: string; 
}

export default function PopUpDelete({ exerciseId }: PopUpDeleteProps) {
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
            <i className="fi fi-rs-dumpster"></i> Deletar exercício{" "}
          </button>
        }
        nested
      >
        <div className={style.modal}>
          <div className={style.header}>Confirmar exclusão</div>
          <div className={style.content}>
            Tem certeza de que deseja excluir este exercício? Esta ação não pode
            ser desfeita.
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
              Deletar
            </button>
          </div>
        </div>
      </Popup>
    </>
  );
}
