import style from "./login.module.sass";

export default function Login() {
  return (
    <>
      <div className={style.custom_shape}></div>
     
      
      <div className={style.container_video}>
        <video
          src="https://assets.mixkit.co/videos/23450/23450-720.mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div className={style.container_login}>
        

        <div className={style.container_form}>
          <div className={style.text_container}>
            <h1>Bem vindo de volta! </h1>
          </div>
          <form action="">
            <label>
              E-mail:
              <div className={style.input_body}>
                <i className="fi fi-rs-envelope"></i>
                <input
                  type="text"
                  id="email"
                  placeholder="Insira o se e-mail:"
                />
              </div>
            </label>

            <label>
              Senha:
              <div className={style.input_body}>
                <i className="fi fi-rs-lock"></i>
                <input
                  type="text"
                  id="senha"
                  placeholder="Insira a sua senha:"
                />
              </div>
            </label>
            <button>Continuar</button>
          </form>
        </div>
      </div>
    </>
  );
}
