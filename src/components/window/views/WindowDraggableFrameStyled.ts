import styled from "styled-components";
import { IPoint } from "../../../types/domain";

interface IWindowDraggableFrameStyledProps {
  position: IPoint;
}

export const WindowDraggableFrameStyled = styled.div.attrs<
  IWindowDraggableFrameStyledProps
>(({ position }) => ({
  style: {
    top: position.y,
    left: position.x,
  },
}))<IWindowDraggableFrameStyledProps>`
  position: fixed;
  will-change: top, left;
`;
