import InputField from "../../../components/common/input/input";
import style from "./register.module.sass";

export default function Register() {
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
            <h1>Welcome!! </h1>
          </div>
          <form action="">
            <InputField
              label="Name:"
              placeholder="Eduardo Octávio"
              type="text"
              iconClass="fi fi-rs-dumbbell-weightlifting"
            />
            <InputField
              label="E-mail:"
              placeholder="email@site.com"
              type="email"
              iconClass="fi fi-rs-envelope"
            />

            <InputField
              label="Password:"
              placeholder="Create your best password:"
              type="password"
              iconClass="fi fi-rs-lock"
            />

            <button>Register account</button>
          </form>
        </div>
      </div>
    </>
  );
}
