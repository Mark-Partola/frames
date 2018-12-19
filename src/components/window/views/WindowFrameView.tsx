import React, { ReactNode } from "react";
import Resizable, { ResizeCallback, ResizeStartCallback } from "re-resizable";
import styled from "styled-components";
import { IPoint, IDimensions } from "../../../types/domain";
import { WindowDraggableFrameStyled } from "./WindowDraggableFrameStyled";
import { WindowFrameStyled } from "./WindowFrameStyled";

interface IProps {
  dimensions: IDimensions;
  position: IPoint;
  onResize?: ResizeCallback;
  onResizeStop?: ResizeCallback;
  onResizeStart?: ResizeStartCallback;
}

export function WindowFrameView({
  dimensions,
  position,
  onResize,
  onResizeStop,
  onResizeStart,
}: IProps) {
  return (
    <WindowDraggableFrameStyled position={position}>
      <Resizable
        defaultSize={dimensions}
        onResize={onResize}
        onResizeStop={onResizeStop}
        onResizeStart={onResizeStart}
        minHeight={100}
        minWidth={100}
      >
        <WindowFrameStyled />
      </Resizable>
    </WindowDraggableFrameStyled>
  );
}
