import styled from "@emotion/styled";
import {
  STYLES_COLOR_DARK,
  STYLES_COLOR_WHITE,
  STYLES_GRADIENTS,
} from "../../constants";

export const Container = styled.div`
  display: grid;
  height: 100vh;
  background: rgb(34, 193, 195);
  padding: 20px;
  background: ${STYLES_GRADIENTS};
  h1 {
    max-width: 800px;
    font-weight: 900;
    text-shadow: 4px 3px 0px ${STYLES_COLOR_DARK};
    color: ${STYLES_COLOR_WHITE};
  }
  h3 {
    color: ${STYLES_COLOR_DARK};
  }
  .content {
    margin-left: 50px;
  }
  div {
    margin: auto;
  }
`;
