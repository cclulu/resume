import React from "react";
import {Link} from 'react-router-dom'

class Experience extends React.Component {
  render() {
    return (
      <div>
        <Link to={"/anubis"}>Anubis</Link>
        <Link to={"/anubispp"}>Anubis Products and People</Link>
        <Link to={"/conveyor"}>Conveyor</Link>
        <Link to={"/rundeck"}>Rundeck</Link>
        <Link to={"/symphony"}>Symphony</Link>
        <Link to={"/vision"}>Vision</Link>
      </div>
    )
  }
}

export default Experience;
