import React, { useState } from "react";
import styled from "styled-components";

export default function TextField() {
  return (
    <section>
      <div className="section__top">
        <h1>TextField</h1>
      </div>
      <div className="section__bottom">
        <Form>
          <input type="text" id="textField" required />
          <label htmlFor="textField">Label</label>
          <span className="bar"></span>
        </Form>
        <Form2>
          <input type="text" id="textField2" disabled />
          <label htmlFor="textField2">Label</label>
        </Form2>
      </div>
    </section>
  );
}
/* ---STYLING--- */
const Form2 = styled.form`
  position: relative;
  display: inline-block;
  margin: 20px 20px;
  width: 40%;

  input {
    box-sizing: border-box;
    border: none;
    width: 280px;
    height: 56px;
    border-radius: 4px 4px 0 0;
    padding: 0 12px 0 12px;
    outline: none;
    font-size: 16px;
    opacity: 0.5;
  }

  label {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    color: #00000099;
    font-size: 16px;
    font-family: "Roboto", sans-serif;
    padding: 0 12px 0 12px;
  }
`;

const Form = styled.form`
  position: relative;
  display: inline-block;
  margin: 20px 20px;
  width: 45%;

  input {
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid grey;
    width: 280px;
    height: 56px;
    border-radius: 4px 4px 0 0;
    padding: 0 12px 0 12px;
    outline: none;
    font-size: 16px;
    opacity: 0.5;

    &:focus {
      opacity: 1;
    }
  }

  label {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    color: #00000099;
    font-size: 16px;
    font-family: "Roboto", sans-serif;
    padding: 0 12px 0 12px;
    transition: 0.2s ease all;
  }

  input:focus ~ label,
  input:valid ~ label {
    top: 10px;
    font-size: 14px;
    color: #e38066;
  }

  .bar {
    position: relative;
    display: block;
    width: 280px;

    &:before,
    &:after {
      content: "";
      height: 2px;
      width: 0;
      bottom: 1px;
      position: absolute;
      background: #e38066;
      transition: 0.2s ease all;
    }
    &:before {
      left: 50%;
    }
    &:after {
      right: 50%;
    }
  }
  input:focus ~ .bar:before,
  input:focus ~ .bar:after,
  input:valid ~ .bar:after,
  input:valid ~ .bar:before {
    width: 50%;
  }
`;
