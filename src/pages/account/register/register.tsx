import React, { useState } from "react";
import InputField from "../../../components/common/input/input";
import style from "./register.module.sass";
import { Link, useNavigate } from "react-router-dom";
import { POST } from "../../../core/services/post";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    weight: 0,
    height: 0,
    birthDate: "",
  });
  const navigate = useNavigate();
  const convertDate = (date: string): string => {
    const [day, month, year] = date.split("/");
    return `${year}-${month}-${day}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    /* Conversor */
    if (id === "birthDate" && value) {
      setForm((data) => ({ ...data, [id]: convertDate(value) }));
    } else if (id === "weight" || id === "height") {
      setForm((data) => ({
        ...data,
        [id]: value ? parseFloat(value) : 0,
      }));
    } else {
      setForm((data) => ({ ...data, [id]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await POST("http://localhost:8080/gymbro/person", form);

    if (result.success) {
      navigate("/login");
    } else {
      console.error("Erro ao registrar usuário:", result.message);
      console.log(form);
    }
  };

  return (
    <>
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
            <h1>Hi there!</h1>
            <p>Wellcome to your training manager.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className={style.same_place}>
              <InputField
                label="name"
                placeholder="Eduardo Octávio"
                type="text"
                iconClass="fi fi-rs-dumbbell-weightlifting"
                onChange={handleChange}
              />
              <InputField
                label="username"
                placeholder="Nickname"
                type="text"
                iconClass="fi fi-rs-user-ninja"
                onChange={handleChange}
              />
            </div>
            <InputField
              label="email"
              placeholder="email@site.com"
              type="email"
              iconClass="fi fi-rs-envelope"
              onChange={handleChange}
            />
            <InputField
              label="password"
              placeholder="Create your best password:"
              type="password"
              iconClass="fi fi-rs-lock"
              onChange={handleChange}
            />
            <InputField
              label="birthDate"
              placeholder="22/01/2005"
              type="data"
              iconClass="fi fi-rs-cake-birthday "
              onChange={handleChange}
            />
            <div className={style.same_place}>
              <InputField
                label="weight"
                placeholder="83 Kg"
                type="number"
                iconClass="fi fi-rs-scale"
                onChange={handleChange}
              />
              <InputField
                label="height"
                placeholder="184 Cm"
                type="number"
                iconClass="fi fi-rs-measuring-tape"
                onChange={handleChange}
              />
            </div>
            <button type="submit">Explore Gymbro</button>
          </form>
        </div>
        <div className={style.toggle_pages}>
          <p>Already have an account?</p>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </>
  );
}
