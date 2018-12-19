import { IDimensions, IPoint, ResizableDirection } from "../../types/domain";

interface IFrameResizerConfig {
  side: ResizableDirection;
  pos: IPoint;
  delta: IDimensions;
  dimensions: IDimensions;
}

export class FrameResizerService {
  constructor(private config: IFrameResizerConfig) {}

  getLeftStartPoint = () =>
    /left/i.test(this.config.side)
      ? this.config.pos.x - this.config.delta.width
      : this.config.pos.x;

  getTopStartPoint = () =>
    /top/i.test(this.config.side)
      ? this.config.pos.y - this.config.delta.height
      : this.config.pos.y;

  getWidth = () => this.config.dimensions.width + this.config.delta.width;

  getHeight = () => this.config.dimensions.height + this.config.delta.height;
}
