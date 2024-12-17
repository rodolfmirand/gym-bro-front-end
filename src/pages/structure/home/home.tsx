import style from "./home.module.sass";

export default function Home() {
  return (
    <>
      <header>
        <img src="/public/assets/logo.svg" alt="" />
        <i className="fi fi-rs-settings"></i>
      </header>
      <div className={style.container}>
        <div className={style.grid}>
          <div className={style.item}>
            <div className={style.img}></div>
            <div className={style.text}>
              <h2>Sua Ficha</h2>
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </div>
          <div className={style.item}>
            <div className={style.img}></div>
            <div className={style.text}>
              <h2>Exercicios</h2>
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </div>
          <div className={style.item}>
            <div className={style.img}></div>
            <div className={style.text}>
              <h2>Lorem</h2>
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </div>
          <div className={style.item}>
            <div className={style.img}></div>
            <div className={style.text}>
              <h2>Dicas</h2>
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
