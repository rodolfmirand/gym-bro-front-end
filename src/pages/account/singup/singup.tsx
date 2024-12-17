import style from "./singup.module.sass";

export default function SingUp() {
  return (
    <>
      <div className={style.custom_shape}></div>
      
      <div className={style.container_video}>
        <video
          src="https://assets.mixkit.co/videos/52088/52088-720.mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>

      <div className={style.container_singup}>
        <div className={style.container_form}>
          <div className={style.text_container}>
            <h1>Seja bem-vindo! </h1>
          </div>
          <form action="">
            <label>
              Nome:
              <div className={style.input_body}>
                <i className="fi fi-rs-dumbbell-weightlifting"></i>
                <input type="text" id="nome" placeholder="Eduardo Octávio" />
              </div>
            </label>

            <label>
              E-mail:
              <div className={style.input_body}>
                <i className="fi fi-rs-envelope"></i>
                <input type="text" id="email" placeholder="email@site.com" />
              </div>
            </label>

            <label>
              Senha:
              <div className={style.input_body}>
                <i className="fi fi-rs-lock"></i>
                <input
                  type="password"
                  id="senha"
                  placeholder="Crie sua melhor senha"
                />
              </div>
            </label>
            <button>Criar conta</button>
          </form>
        </div>
      </div>
    </>
  );
}
