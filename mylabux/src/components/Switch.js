import React from "react";
import styled from "styled-components";

export default function Switch() {
  return (
    <section>
      <div className="section__top">
        <h1>Switch</h1>
      </div>
      <div className="section__bottom">
        <Form>
          <input type="checkbox" id="switch" />
          <label htmlFor="switch" />
        </Form>
        <Form2>
          <input type="checkbox" id="switch2" />
          <label htmlFor="switch2" />
        </Form2>
      </div>
    </section>
  );
}
/* ---STYLING--- */

const Form = styled.form`
  display: inline-block;
  position: relative;
  margin: 20px 5px;
  width: 50%;

  input {
    width: 36px;
    height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 0;
  }

  label {
    display: block;
    padding: 0 0 0 44px;
    cursor: pointer;

    &:before {
      content: "";
      position: absolute;
      top: 5px;
      left: 0;
      width: 36px;
      height: 14px;
      background-color: grey;
      border-radius: 14px;
      z-index: 1;
      transition: background-color 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    }

    &:after {
      content: "";
      position: absolute;
      top: 2px;
      left: 0;
      width: 20px;
      height: 20px;
      background-color: white;
      border-radius: 50%;
      z-index: 2;
      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.16),
        0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
      transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      transition-property: left, background-color;
    }
  }

  input:checked + label {
    ::before {
      background-color: #fac4a6;
    }
    ::after {
      left: 17px;
      background-color: #e38066;
    }
  }
`;

const Form2 = styled.form`
  display: inline-block;
  position: relative;
  margin: 20px 5px;
  width: 50%;

  input {
    width: 36px;
    height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 0;
  }

  label {
    display: block;
    padding: 0 0 0 44px;

    &:before {
      content: "";
      position: absolute;
      top: 5px;
      left: 0;
      width: 36px;
      height: 14px;
      background-color: lightgrey;
      border-radius: 14px;
      z-index: 1;
      opacity: 0.7;
    }

    &:after {
      content: "";
      position: absolute;
      top: 2px;
      left: 0;
      width: 20px;
      height: 20px;
      background-color: white;
      border-radius: 50%;
      z-index: 2;
      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.16),
        0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    }
  }
`;
