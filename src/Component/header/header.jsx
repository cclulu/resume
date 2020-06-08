import React from "react";
import styles from './header.module.css'
import linkdinLogo from '../../media/images/LI-In-Bug.png'
import githubLogo from '../../media/images/GitHub-Mark-64px.png'

class Header extends React.Component {
  render() {
    return (
      <div className={styles.content}>
        <h3 className={styles.headerThree}>Cuahuctemoc L. Osorio</h3>
        <div className={styles.orgIcons}>
          <a href="https://www.linkedin.com/in/cuahuctemoclo"> <img className={styles.linkdInIcon} src={linkdinLogo} alt="linkdinIcon"/></a>
          <a href="https://github.com/cclulu"> <img className={styles.githubIcon} src={githubLogo} alt="githubIcon"/></a>
        </div>
      </div>
    )
  }
}

export default Header;
