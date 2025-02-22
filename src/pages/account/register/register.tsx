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

          <form onSubmit={handleSubmit} autoComplete="off">
            <div className={style.same_place}>
              <InputField
                label="name"
                placeholder="Your name"
                type="text"
                iconClass="fi fi-rs-dumbbell-weightlifting"
                onChange={handleChange} color={""} />
              <InputField
                label="username"
                placeholder="Nickname"
                type="text"
                iconClass="fi fi-rs-user-ninja"
                onChange={handleChange} color={""} />
            </div>
            <InputField
              label="email"
              placeholder="email@site.com"
              type="email"
              iconClass="fi fi-rs-envelope"
              onChange={handleChange} color={""} />
            <InputField
              label="password"
              placeholder="Create your best password:"
              type="password"
              iconClass="fi fi-rs-lock"
              onChange={handleChange} color={""} />
            <InputField
              label="birthDate"
              placeholder="__/__/____"
              type="data"
              iconClass="fi fi-rs-cake-birthday "
              onChange={handleChange} color={""} />
            <div className={style.same_place}>
              <InputField
                label="weight"
                placeholder="KG"
                type="number"
                iconClass="fi fi-rs-scale"
                onChange={handleChange} color={""} />
              <InputField
                label="height"
                placeholder="CM"
                type="number"
                iconClass="fi fi-rs-measuring-tape"
                onChange={handleChange} color={""} />
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
