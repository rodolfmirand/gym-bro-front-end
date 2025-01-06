import {
  Route,
  Routes,
  Navigate,
  BrowserRouter,
  Outlet,
} from "react-router-dom";

import style from "./structure.module.sass";
import Home from "./home/home";
import Record from "./record/record";
import Create from "./create/create";
import CreateExercise from "../../components/pages/create/create-exercise/create_exercise";
import CreateCardio from "../../components/pages/create/create-cardio/create_cardio";
import Header from "../../components/layout/header/header";

function Body() {
  return (
    <>
      <Header />
      <section className={style.structure_section}>
        <Outlet />
      </section>
    </>
  );
}

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Body />}>
          <Route path="/home" element={<Home />} />
          <Route index element={<Navigate to="/home" />} />
          <Route path="/record" element={<Record />} />
          <Route path="/exercise" element={<Create />}>
            <Route index element={<Navigate to="bodybuilding" />} />
            <Route path="bodybuilding" element={<CreateExercise />} />
            <Route path="cardio" element={<CreateCardio />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
