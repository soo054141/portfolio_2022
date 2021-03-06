import styled from "styled-components";
import bg from "../asset/images/header_bg3.jpg";

export const BgWrapper = styled.div`
  z-index: -99;
  width: 100%;
  height: 100vh;
  color: ${(props) => props.theme.color};
  background: ${(props) =>
    props.theme.bgColor === "#202124" ? props.theme.bgColor : `url(${bg})`};
  background-size: cover;
  background-repeat: no-repeat;
`;
