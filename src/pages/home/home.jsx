import React from "react";
import Skills from '../../Component/skills/skills.jsx';
import Experience from '../../Component/exp/exp.jsx';
import Cards from '../../Component/cards/cards.jsx';

class Home extends React.Component {
  render() {
    return (
      <div>
        <p>FullStack developer, specializing in Java and Go.
      I am passionate about automation and building or improving systems and infrastructure
      using best practices to consistently deliver a better product</p>
        <Skills/>
        <Experience/>
        <Cards/>
      </div>
    )
  }
}

export default Home;
