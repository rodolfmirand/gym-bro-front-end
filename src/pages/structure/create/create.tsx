import { NavLink, Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import style from "./create.module.sass";

export default function Create() {
  const location = useLocation();
  const [position, setPosition] = useState({
    width: 0,
    left: 0,
  });

  useEffect(() => {
    const active = document.querySelector(
      `a[href='${location.pathname}']`
    ) as HTMLElement;

    if (active) {
      const { offsetWidth, offsetLeft } = active;
      setPosition({ width: offsetWidth, left: offsetLeft });
    }
  }, [location]);

  return (
    <div className={style.container_record}>
      <div className={style.section_title}>
        <h1>Exercise building</h1>
      </div>

      <div className={style.container_options}>
        <div className={style.exercise_type}>
          <NavLink to="bodybuilding">BodyBuilding</NavLink>
          <NavLink to="cardio">Cardio</NavLink>

          <motion.div
            className={style.indicator}
            layout
            initial={false}
            animate={{
              width: position.width,
              x: position.left,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        </div>
      <i className="fi fi-rs-dumbbell-ray"></i>
      </div>

      <Outlet />
  
    </div>
  );
}
