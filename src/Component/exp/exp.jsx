import React from "react";
import {Link} from 'react-router-dom'
import styles from './exp.module.css'

class Experience extends React.Component {
  render() {
    return (
      <div className={styles.content}>
        <Link to={"/anubis"} className={styles.LinkButton}>Anubis</Link>
        <Link to={"/anubispp"} className={styles.LinkButton}>Anubis Products and People</Link>
        <Link to={"/conveyor"} className={styles.LinkButton}>Conveyor</Link>
        <Link to={"/rundeck"} className={styles.LinkButton}>Rundeck</Link>
        <Link to={"/symphony"} className={styles.LinkButton}>Symphony</Link>
        <Link to={"/vision"} className={styles.LinkButton}>Vision</Link>
      </div>
    )
  }
}

export default Experience;
