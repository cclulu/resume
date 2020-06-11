import React from "react";
import styles from './header.module.css'
import linkdinLogo from '../../media/images/LI-In-Bug.png'
import githubLogo from '../../media/images/GitHub-Mark-Light-64px.png'

class Header extends React.Component {
  render() {
    return (
      <div className={styles.content}>
        <h1 className={styles.myName}>Cuahuctemoc L. Osorio</h1>
        <div className={styles.orgIcons}>
          <a href="https://github.com/cclulu"> <img className={styles.githubIcon} src={githubLogo} alt="githubIcon"/></a>
          <a href="https://www.linkedin.com/in/cuahuctemoclo"> <img className={styles.linkdInIcon} src={linkdinLogo} alt="linkdinIcon"/></a>
        </div>
      </div>
    )
  }
}

export default Header;
