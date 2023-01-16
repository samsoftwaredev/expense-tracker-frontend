import styled from "@emotion/styled";
import { STYLES_COLOR_DARK } from "../../constants";

export const Container = styled.div`
  margin: 20px;
  max-width: 700px;
  .header {
    font-weight: 900;
  }
  .sub-header {
    color: ${STYLES_COLOR_DARK};
  }
`;
