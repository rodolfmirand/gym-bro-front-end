import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import styles from './account.module.sass'
import Login from './login/login';
import Register from './register/register';

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
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login />}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}