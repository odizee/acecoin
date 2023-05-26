import React from 'react';
import Image from 'next/image';
import styles from './checkoutdetails.module.scss';
import mastercard from '../../assets/mastercard-2.svg';
import chip from '../../assets/chip.png';
import wifi from '../../assets/wifi.png';
import apple from '../../assets/apple-13.svg';
import docket from '../../assets/docket.png';

const CheckoutDetails = () => {
  return (
    <div className={styles.checkoutwrapper}>
      <div className={styles.checkout}>
        <span className={styles.blu}></span>
        <div className={styles.credit_card}>
          <div className={styles.credit_card__head}>
            <Image
              src={chip}
              alt=''
              className={styles.chip}
              width={40}
              height={100}
            />
            <Image
              src={wifi}
              alt=''
              className={styles.wifi}
              width={40}
              height={40}
            />
          </div>
          <div className={styles.credit_card__body}>
            <span className={styles.holder}>jonathan micheal</span>
            <div className={styles.card_digits}>
              <div className={styles.hidden_digits}>
                <span className={styles.circle}></span>
                <span className={styles.circle}></span>
                <span className={styles.circle}></span>
                <span className={styles.circle}></span>
              </div>
              <span className={styles.visible_digits}>3456</span>
            </div>
          </div>
          <div className={styles.credit_card__footer}>
            <span className={styles.expiry}>09/22</span>
            <Image
              src={mastercard}
              alt=''
              width={100}
              height={100}
              className={styles.logo}
            />
          </div>
          <div className={styles.card__design}>
            <span className={styles.inner}></span>
          </div>
        </div>
        <div className={styles.checkout_details}>
          <div className={styles.purchase_data}>
            <div className={styles.data}>
              <span className={styles.title}>company</span>
              <span className={styles.value}>
                <Image src={apple} alt='' width={40} height={40} />
                <span className={styles.inner_text}>apple</span>
              </span>
            </div>
            <div className={styles.data}>
              <span className={styles.title}>order number</span>
              <span className={styles.value}>
                <span className={styles.inner_text}>1266201</span>
              </span>
            </div>
            <div className={styles.data}>
              <span className={styles.title}>product</span>
              <span className={styles.value}>
                <span className={styles.inner_text}>macbook air</span>
              </span>
            </div>
            <div className={styles.data}>
              <span className={styles.title}>VAT (20%)</span>
              <span className={styles.value}>
                <span className={styles.inner_text}>$100.00</span>
              </span>
            </div>
          </div>
          <div className={styles.divider}>
            <div className={styles.left}></div>
            <div className={styles.right}></div>
          </div>
          <div className={styles.purchase_total}>
            <div className={styles.total}>
              <span className={styles.desc}>You have to Pay</span>
              <div className={styles.t_amount}>
                <h1 className={styles.amount}>
                  549<sub>.99</sub>
                </h1>
                <span className={styles.symbol}>USD</span>
              </div>
            </div>
            <Image src={docket} alt='' width={30} height={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutDetails;
