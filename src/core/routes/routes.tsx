import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Account from "../../pages/account/account";
import Register from "../../pages/account/register/register";
import Login from "../../pages/account/login/login";
import Main from "../../pages/structure/main";
import Home from "../../pages/structure/home/home";
import CreateCardio from "../../components/pages/create/create-cardio/create_cardio";
import CreateExercise from "../../components/pages/create/create-exercise/create_exercise";
import Create from "../../pages/structure/create/create";
import Record from "../../pages/structure/record/record";
import PageNotFound from "../../pages/structure/not-found/notFound";
import Diet from "../../pages/structure/diet/diet";

export default function RoutesControll() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Account />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route index element={<Navigate to="/login" />} />
        </Route>

        <Route path="" element={<Main />}>
          <Route path="/home" element={<Home />} />
          <Route path="/record" element={<Record />} />
          <Route path="/exercise" element={<Create />}>
            <Route index element={<Navigate to="bodybuilding" />} />
            <Route path="bodybuilding" element={<CreateExercise />} />
            <Route path="cardio" element={<CreateCardio />} />
          </Route>
          <Route path="/diet" element={<Diet />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
