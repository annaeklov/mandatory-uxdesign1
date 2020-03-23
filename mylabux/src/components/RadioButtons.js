import React from "react";
import styled from "styled-components";

export default function RadioButtons() {
  return (
    <section>
      <div className="section__top">
        <h1>RadioButtons</h1>
      </div>
      <div className="section__bottom">
        <Form>
          <div>
            <input type="radio" id="radio1" name="radio" />
            <label htmlFor="radio1" />
          </div>
          <div>
            <input type="radio" id="radio2" name="radio" />
            <label htmlFor="radio2" />
          </div>
          <div>
            <input type="radio" id="radio4" checked />
            <label htmlFor="radio4" />
          </div>
          <div>
            <input type="radio" id="radio3" disabled />
            <label htmlFor="radio3" />
          </div>
        </Form>
      </div>
    </section>
  );
}

/* ---STYLING--- */

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  height: 100%;

  div {
    display: inline-block;
    position: relative;
    width: 50%;
  }

  input {
    position: absolute;
    top: 4px;
    left: 0;
    width: 20px;
    height: 20px;
    opacity: 0;
    z-index: 0;
    margin: 0;

  }

  label {
    display: inline-block;
    cursor: pointer;

    &:before {
      content: "";
      position: absolute;
      top: 4px;
      left: 0;
      width: 20px;
      height: 20px;
      background-color: transparent;
      border: 2px solid grey;
      border-radius: 14px;
      z-index: 1;
      transition: border-color 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    }
    &:after {
      content: "";
      position: absolute;
      top: 9px;
      left: 5px;
      width: 14px;
      height: 14px;
      background-color: #e38066;
      border-radius: 50%;
      z-index: 2;
      transform: scale(0, 0);
      transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  input:checked + label {
    ::before {
      border-color: #e38066;
    }
  }
  input:checked + label {
    ::after {
      transform: scale(1, 1);
    }
  }

  input:disabled ~ label:before {
    border: 2px solid lightgrey;
  }
  input:disabled ~ label,
  input:checked ~ label {
    cursor: auto;
  }
`;
