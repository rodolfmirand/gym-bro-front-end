import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import style from './structure.module.sass'
import Home from './home/home';
import Record from './record/record';

function Body() {
    return (
      <section className={style.structure_section}>
        <Outlet />
      </section >
    );
  
  }
  
  export default function Main() {
    return (
      <BrowserRouter>
        <Routes>
  
          <Route path='' element={<Body />}>
            <Route path='home' element={<Home />}/>
            <Route path='record' element={<Record />}/>
          </Route>
  
        </Routes>
      </BrowserRouter>
    );
  }