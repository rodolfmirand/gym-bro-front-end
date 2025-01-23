import style from "./popup_logout.module.sass";
import Popup from "reactjs-popup";
import { POST } from "../../../../../core/services/post-auth";
import { useNavigate } from "react-router-dom";


export default function PopUpLogout() {
  const navigate = useNavigate();
  const handleDelete = async () => {
    const response = await POST(
      `http://localhost:8080/gymbro/auth/logout`, {}, localStorage.getItem('token')
    );

    if (response.success) {
      navigate("/login")
      console.log("Log out efetuado com sucesso!");
    } else {
      console.log(`Erro ao fazer log out: ${response.message}`);
    }
  };

  return (
    <>
      <Popup
        modal
        trigger={
          <button className={style.button}>
            <i className="fi fi-rs-running"></i> Logout{" "}
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
