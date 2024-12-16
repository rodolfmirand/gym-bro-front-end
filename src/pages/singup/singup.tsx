import style from "./login.module.sass";

export default function Login() {
  return (
    <>
      <section>
        <div className={style.container_img}>
          <img src="" alt=""/>
        </div>
        <div className={style.container_login}>
          <img src="../../assets/blob-haikei.svg" alt="" />
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
      </section>
    </>
  );
}
