

import { Outlet } from 'react-router-dom';
import styles from './account.module.sass'

export default function Account() {
  return (
    <section className={styles.account_section}>
      <Outlet />
    </section >
  );

}

