import style from "./popup_delete.module.sass";
import Popup from "reactjs-popup";
import { DELETE } from "../../../../core/services/delete";

interface PopUpDeleteProps {
  exerciseId: string;
  onLoading: (loading: boolean) => void;
}

export default function PopUpDelete({
  exerciseId,
  onLoading,
}: PopUpDeleteProps) {
  const handleDelete = async () => {
    const response = await DELETE(
      `http://localhost:8080/gymbro/exercise/${exerciseId}`,
      localStorage.getItem("token")
    );

    if (response.success) {
      // Recarregar GroupExercise após deletar
      onLoading(true);
    } else {
      console.error(`Erro ao deletar: ${response.message}`);
    }
  };

  const renderPopupContent = (close: () => void) => (
    <div className={style.modal}>
      <div className={style.header}>Confirmar exclusão</div>
      <div className={style.content}>
        Tem certeza de que deseja excluir este exercício? Esta ação não pode ser
        desfeita.
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
        <button
          onClick={() => {
            handleDelete();
            close();
          }}
          className={style.deleteButton}
        >
          Deletar
        </button>
      </div>
    </div>
  );

  return (
    <>
      <Popup
        modal
        trigger={
          <button className={style.button}>
            <i className="fi fi-rs-dumpster"></i> Deletar exercício
          </button>
        }
        nested
      >
        {(close: () => void) => renderPopupContent(close)}
      </Popup>
    </>
  );
}
