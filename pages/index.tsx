import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import Header from '../components/Header/Index';
import Form from '../components/Form/Index';
import CheckoutDetails from '../components/CheckoutDetails/Index';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.close_btn}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className={styles.ionicon}
            viewBox='0 0 512 512'
          >
            <title>Close</title>
            <path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z' />
          </svg>
        </div>
        <div className={styles.maincontainer}>
          <div className={styles.left}>
            <Header />
            <Form />
          </div>
          <div className={styles.right}>
            <CheckoutDetails />
          </div>
        </div>
      </div>
    </div>
  );
}
