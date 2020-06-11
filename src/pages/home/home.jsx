import React from "react";
import Cards from '../../Component/cards/cards.jsx';
import styles from './home.module.css';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.Content}>
          <div className={styles.aboutMe}>
            <h3> I am a FullStack developer, specializing in Java and Go, who is passionate about automation
            and building or improving systems and infrastructure using best practices to consistently deliver a better product.
            I have been a professional Software Developer since June of 2016</h3>
          </div>
          <Cards/>
          <div className={styles.profilePic}></div>
        </div>
      </div>
    )
  }
}

export default Home;
