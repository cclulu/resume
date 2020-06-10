import React from "react";
import {Link} from 'react-router-dom'
import styles from './cards.module.css'

class Cards extends React.Component {
  render() {
    return (
      <div className={styles.Content}>
        <div className={styles.Cards}>
          <div className={styles.javaImage}></div>
          <header className={styles.headerContent}>
            <h1 className={styles.javaTitle}>Java Projects</h1>
          </header>
          <div className={styles.cardContent}>
            <Link to={"/symphony"} className={styles.LinkButton}>Symphony</Link>
            <Link to={"/rundeck"} className={styles.LinkButton}>Rundeck</Link>
            <Link to={"/vision"} className={styles.LinkButton}>Vision</Link>
          </div>
        </div>

        <div className={styles.Cards}>
          <div className={styles.goImage}></div>
          <header className={styles.headerContent}>
            <h1 className={styles.goTitle}>Go Projects</h1>
          </header>
          <div className={styles.cardContent}>
            <Link to={"/anubis"} className={styles.LinkButton}>Anubis</Link>
            <Link to={"/anubispp"} className={styles.LinkButton}>Anubis Products and People</Link>
            <Link to={"/conveyor"} className={styles.LinkButton}>Conveyor</Link>
            <Link to={"/vision"} className={styles.LinkButton}>Vision</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Cards;
