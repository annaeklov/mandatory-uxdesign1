import React from "react";
import styled from "styled-components";
import TextField from "./components/TextField";
import Switch from "./components/Switch";
import CheckBoxes from "./components/CheckBoxes";
import RadioButtons from "./components/RadioButtons";
import pic from "./pic1.png";

export default function MainContainer() {
  return (
    <Main>
      <img className="pic" src={pic}></img>
      <TextField />
      <Switch />
      <CheckBoxes />
      <RadioButtons />
    </Main>
  );
}
/* ---STYLING--- */

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #f9f3dd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .pic {
    mix-blend-mode: multiply;
    position: absolute;
    top: -180px;
    left: -300px;
    opacity: 0.5;
  }

  section {
    width: 50%;
    height: 20%;
    display: flex;
    flex-direction: column;
  }
  .section__top {
    height: 30%;
  }
  .section__bottom {
    border: 1px solid #c7c2b1;
    height: 65%;
  }
  h1 {
    color: #7a7048; /* #e2422d;  */
    margin: 0;
    font-family: "Playfair Display SC", serif;
  }
`;
