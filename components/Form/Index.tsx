import Image from 'next/image';
import styles from './form.module.scss';
import { FaPen } from 'react-icons/fa';
import mcsymbol from '../../assets/mc_symbol.svg';
import badge from '../../assets/verified-badge.svg';
import dots from '../../assets/dots.svg';

const Form = () => {
  return (
    <div>
      <section className={styles.form_body}>
        <form action=''>
          <div className={styles.input_group}>
            <div className={styles.header}>
              <div className={styles.description}>
                <h2 className={styles.title}>card number</h2>
                <p className={styles.desc}>
                  Enter the 15-digit card number on the card
                </p>
              </div>
              <button
                type='button'
                style={{ cursor: 'pointer' }}
                className={styles.edit}
              >
                <FaPen size={15} />
                <span className={styles.btn_desc}>Edit</span>
              </button>
            </div>
            <div className={styles.main}>
              <Image
                src={mcsymbol}
                alt=''
                className={styles.leading_icon}
                width={50}
                height={50}
              />
              <input
                type='text'
                placeholder='2412   -   7512   -   3412   -   3456'
              />
              <Image
                src={badge}
                alt=''
                width={50}
                height={50}
                className={styles.trailing_icon}
              />
            </div>
          </div>
          <div className={`${styles.input_group} ${styles.__col}`}>
            <div className={styles.header}>
              <div className={styles.description}>
                <h2 className={styles.title}>CVV number</h2>
                <p className={styles.desc}>
                  Enter the 3 or 4 digit number on the card
                </p>
              </div>
            </div>
            <div className={styles.main}>
              <input type='text' placeholder='327' />
              <Image
                src={dots}
                alt=''
                width={50}
                height={50}
                className={styles.trailing_icon}
              />
            </div>
          </div>
          <div className={`${styles.input_group} ${styles.__col}`}>
            <div className={styles.header}>
              <div className={styles.description}>
                <h2 className={styles.title}>expiry date</h2>
                <p className={styles.desc}>
                  Enter the expiration date of the card
                </p>
              </div>
            </div>
            <div className={styles.grp}>
              <div className={`${styles.main} ${styles.__date}`}>
                <input type='text' placeholder='09' />
              </div>
              <span className={styles.divider}>/</span>
              <div className={`${styles.main} ${styles.__date}`}>
                <input type='text' placeholder='22' />
              </div>
            </div>
          </div>
          <div className={`${styles.input_group} ${styles.__col}`}>
            <div className={styles.header}>
              <div className={styles.description}>
                <h2 className={styles.title}>password</h2>
                <p className={styles.desc}>Enter your Dynamic password</p>
              </div>
            </div>
            <div className={styles.main}>
              <input type='password' placeholder='******' />
              <Image
                src={dots}
                alt=''
                className={styles.trailing_icon}
                width={50}
                height={50}
              />
            </div>
          </div>
          <button type='button' className={styles.btn_submit}>
            pay now
          </button>
        </form>
      </section>
    </div>
  );
};

export default Form;
