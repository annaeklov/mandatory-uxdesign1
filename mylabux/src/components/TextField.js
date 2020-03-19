import React, { useState } from "react";
import styled from "styled-components";

export default function TextField() {
  const [isFocused, setIsFocused] = useState(false);

  function onFocus() {
    console.log("in focus");
  }

  return (
    <section>
      <div className="section__top">
        <h1>TextField</h1>
      </div>
      <div className="section__bottom">
        <Form>
          <Input__Label htmlFor="textField">Label</Input__Label>
          <Input__Field type="text" id="textField" onFocus={onFocus} />
        </Form>
      </div>
    </section>
  );
}
/* ---STYLING--- */

const Form = styled.form`
  width: 280px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Input__Field = styled.input`
  border: none;
  border-bottom: 1px solid grey;
  width: 100%;
  height: 56px;
  border-radius: 4px 4px 0 0;
  padding: 0 12px 0 12px;
  outline: none;
`;

const Input__Label = styled.label`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  color: #00000099;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  padding: 0 12px 0 12px;
`;
