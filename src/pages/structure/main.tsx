import { Outlet } from "react-router-dom";

import style from "./structure.module.sass";
import Header from "../../components/layout/header/header";

export default function Main() {
  return (
    <>
      <Header />
      <section className={style.structure_section}>
        <Outlet />
      </section>
    </>
  );
}
