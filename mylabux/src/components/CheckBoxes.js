import React from "react";
import styled from "styled-components";

export default function CheckBoxes() {
  return (
    <section>
      <div className="section__top">
        <h1>CheckBoxes</h1>
      </div>
      <div className="section__bottom">
        <Form>
          <input id="checkbox" type="checkbox" />
          <label htmlFor="checkbox" />
        </Form>
        <Form2>
          <input id="checkbox2" type="checkbox" checked disabled />
          <input id="checkbox3" type="checkbox" disabled />
        </Form2>
      </div>
    </section>
  );
}
/* ---STYLING--- */

const Form = styled.form`
  position: relative;

  input {
    position: relative;
    width: 24px;
    height: 24px;
    border: 2px solid grey;
    border-radius: 4px;
    appearance: none;
    outline: none;
    cursor: pointer;
    z-index: 3;

    &:before {
      position: absolute;
      content: "";
      display: inline-block;
      width: 8px;
      height: 12px;
      border-color: transparent;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      opacity: 0;
      left: 6px;
      z-index: 3;
    }

    &:checked::before {
      border-color: white;
      border-style: solid;
      opacity: 1;
      z-index: 3;
    }

    &:checked {
      background: #e38066;
      border-color: #e38066;
      transition: 0.4s;
      z-index: 3;
    }

    &:hover ~ label {
      z-index: 1;
    }
  }
  label {
    position: absolute;
    top: -4px;
    left: -4px;
    display: inline-block;
    z-index: -1;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: lightgrey;
    opacity: 0.5;
  }

  input:focus ~ label {
    opacity: 0.7;
    z-index: 1;
  }
`;

const Form2 = styled.form`
  position: relative;

  input:disabled {
    position: relative;
    width: 24px;
    height: 24px;
    border: 2px solid grey;
    border-radius: 4px;
    appearance: none;
    outline: none;
    opacity: 0.7;
  }

  input {
    position: relative;
    width: 24px;
    height: 24px;
    border: 2px solid grey;
    border-radius: 4px;
    appearance: none;
    outline: none;

    &:before {
      position: absolute;
      content: "";
      display: inline-block;
      width: 8px;
      height: 12px;
      border-color: transparent;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      opacity: 0;
      left: 6px;
    }

    &:checked::before {
      border-color: white;
      border-style: solid;
      opacity: 1;
    }

    &:checked {
      background: #e38066;
      border-color: #e38066;
      transition: 0.4s;
    }
  }
`;
