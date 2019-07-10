import React from "react";

// import { ReactComponent as Round } from "../../oneround.svg";
import { ReactComponent as ReactLogo } from "../reactlogo.svg";
import { ReactComponent as JS } from "../js.svg";
import { ReactComponent as Node } from "../node.svg";
import { ReactComponent as Mongo } from "../mongodb.svg";
import styled, { keyframes } from "styled-components";

import "./Logos.scss";

const float = keyframes`
  from { transform: translate(0,  0px); }
  65%  { transform: translate(0, 5px); }
  to   { transform: translate(0, -0px); }    
`;

const StyledMongo = styled(Mongo)`
  fill : #fff
  width : 200px
  animation: ${float} 5s ease-in-out infinite;
`;
const StyledJs = styled(JS)`
  width : 200px
  animation: ${float} 5s ease-in-out infinite;
  .letter : {
    fill : #61dafb
  }
`;
const StyledReact = styled(ReactLogo)`
  width : 100px
  transition: fill 0.5s ease;
  animation: ${float} 5s ease-in-out infinite;
  &:hover{ 
    fill : #61dafb
  }
`;

const StyledNode = styled(Node)`
  fill : #fff
  animation: ${float} 5s ease-in-out infinite;
`;

const Logos = () => {
  return (
    <div className="logo-anim">
      <StyledReact />
      <StyledJs />
      <StyledNode />
      <StyledMongo />
    </div>
  );
};

export default Logos;
