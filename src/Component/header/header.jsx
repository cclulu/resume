import React from "react";
import styles from './header.module.css'

class Header extends React.Component {
  render() {
    return (
      <div className={styles.content}>
        <h3 className={styles.headerThree}>Cuahuctemoc L. Osorio</h3>
        <h4 className={styles.headerFour}>linkedin.com/in/CuahuctemocLO</h4>
      </div>
    )
  }
}

export default Header;
