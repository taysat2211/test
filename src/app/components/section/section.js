import React from "react";
import "./section.css";

function Section(props) {
  const { title } = props;
  return (
    <div>
      <div className="container-fluid mt-3">
        <p className="section-title ms-5">{title}</p>
        {props.children}
      </div>
    </div>
  );
}

export default Section;
