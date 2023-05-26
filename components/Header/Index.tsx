import React from 'react';
import styles from './header.module.scss';
import { GiSwipeCard } from 'react-icons/gi';
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.logo_img}>
          <GiSwipeCard color='white' size={25} />
        </div>
        <span className={styles.logo_circle}></span>
        <h1>
          AceCoin<span className={styles.lean}>Pay</span>
        </h1>
      </div>
      <div className={styles.timer}>
        <span className={styles.timer_box}>0</span>
        <span className={styles.timer_box}>1</span>
        <span className={styles.divider}>:</span>
        <span className={styles.timer_box}>1</span>
        <span className={styles.timer_box}>9</span>
      </div>
    </header>
  );
};

export default Header;
