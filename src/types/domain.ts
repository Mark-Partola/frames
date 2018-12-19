export interface IPoint {
  x: number;
  y: number;
}

export interface IDimensions {
  width: number;
  height: number;
}

export type ResizableDirection =
  | "top"
  | "right"
  | "bottom"
  | "left"
  | "topRight"
  | "bottomRight"
  | "bottomLeft"
  | "topLeft";
