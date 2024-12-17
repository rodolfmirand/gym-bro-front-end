import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import styles from './account.module.sass'
import Login from './login/login';
import SingUp from './singup/singup';

function Body() {
  return (
    <section className={styles.account_section}>
      <Outlet />
    </section >
  );

}

export default function Account() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='' element={<Body />}>
          <Route path='singup' element={<SingUp />}/>
          <Route path='login' element={<Login />}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}