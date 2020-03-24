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
          <span></span>
        </Form>
        <Form2>
          <div>
            <input type="checkbox" id="switch2" checked />
            <label htmlFor="switch2" />
          </div>
          <div>
            <input type="checkbox" id="switch3" disabled />
            <label htmlFor="switch3" />
          </div>
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

    &:hover ~ span {
      z-index: 1;
    }
  }

  span {
    position: absolute;
    top: -6px;
    left: -9px;
    display: inline-block;
    z-index: -1;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: lightgrey;
    opacity: 0.4;
    transition: left 0.28s cubic-bezier(0.4, 0, 0.2, 1);
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

  input:checked ~ label:before {
    background-color: #fac4a6;
  }
  input:checked ~ label:after {
    left: 17px;
    background-color: #e38066;
  }
  input:checked ~ span {
    left: 8px;
  }
  input:focus ~ span {
    opacity: 0.5;
    z-index: 1;
  }
`;

const Form2 = styled.form`
  display: flex;
  margin: 20px 5px;
  width: 50%;

  div {
    width: 50%;
    position: relative;
  }

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

  input:checked + label {
    ::before {
      background-color: #fac4a6;
      opacity: 0.7;
    }
    ::after {
      left: 17px;
      background-color: #e38066;
      opacity: 0.7;
    }
  }
`;
