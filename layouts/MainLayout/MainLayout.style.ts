import styled from "@emotion/styled";
import {
  STYLES_COLOR_DANGER,
  STYLES_COLOR_DARK,
  STYLES_COLOR_LIGHT,
  STYLES_DESKTOP_VIEW,
  STYLES_GRADIENTS,
  STYLES_SIDEBAR_OPEN,
} from "../../constants";

export const Container = styled.div`
  display: flex;
  align-items: stretch;

  .sidebar {
    margin: 0;
    padding: 0;
    width: 0;
    background: ${STYLES_GRADIENTS};
    height: 100%;
    position: fixed;
    overflow: auto;
    transition: 0.3s;
    z-index: 1500;
    font-weight: 900;
    @media (min-width: ${STYLES_DESKTOP_VIEW}) {
      width: ${STYLES_SIDEBAR_OPEN};
    }
    ul {
      list-style: none;
    }
    a {
      color: ${STYLES_COLOR_DARK};
    }
  }

  .content {
    width: 100%;
    margin-left: 0;
    @media (min-width: ${STYLES_DESKTOP_VIEW}) {
      margin-left: ${STYLES_SIDEBAR_OPEN};
    }
  }

  .btnMenu {
    position: fixed;
    top: 50%;
    transform: translate(0, -50%);
    z-index: 2000;
    height: 40px;
    width: 40px;
    background-color: rgba($color: ${STYLES_COLOR_DANGER}, $alpha: 0.5);
    color: ${STYLES_COLOR_LIGHT};
    font-weight: 900;
    transition: 0.3s;
    margin-left: 10px;
    @media (min-width: ${STYLES_DESKTOP_VIEW}) {
      display: none;
    }
    &:hover {
      background-color: ${STYLES_COLOR_DANGER};
    }
  }
`;
