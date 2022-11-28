import "./FormStyle.css";

import React from "react";

const Form = () => {
  const handleClick = () => {
    alert("This feature is not working yet and still under development");
  };

  return (
    <div className="form">
      <form>
        <label>Your Name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Message</label>
        <textarea rows="6" placeholder="Type your message here"></textarea>
        <button onClick={handleClick} className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
