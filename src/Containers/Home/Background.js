import React from "react";
// import { ReactComponent as StyledBackground } from "../../cleanbg.svg";

import { ReactComponent as Round } from "../../round.svg";
import styled, { keyframes } from "styled-components";

const float = keyframes`
  from { transform: translate(0,  0px); }
  65%  { transform: translate(0, 15px); }
  to   { transform: translate(0, -0px); }    
`;
// const rotate = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// `;

const StyledRound = styled(Round)`
  fill : #fff
  width : 15px
  animation: ${float} 3s ease-in-out infinite;
`;

const OneRound = () => {
  return <StyledRound />;
};

export default OneRound;
