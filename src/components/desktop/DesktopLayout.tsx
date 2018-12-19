import React, { ReactNode } from "react";
import styled from "styled-components";
import wallpaper from "./assets/wallpaper.jpg";

interface IProps {
  children: ReactNode;
}

const DesktopBackgroundStyled = styled("div")<{ wallpaper: string }>`
  height: 100vh;
  width: 100vw;
  background-color: #000;
  background: url(${props => props.wallpaper}) center center #99c8df;
  background-size: cover;
`;

export default function DesktopLayout({ children }: IProps) {
  return (
    <DesktopBackgroundStyled wallpaper={wallpaper}>
      {children}
    </DesktopBackgroundStyled>
  );
}
