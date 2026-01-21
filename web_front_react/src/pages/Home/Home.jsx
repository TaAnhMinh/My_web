import React from 'react';
import styles from './scss/Home.module.scss';

const Home = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.quote}>
          "The only way to do great work <br />
          is to love what you do."
        </h1>
      </div>
    </div>
  );
};

export default Home;