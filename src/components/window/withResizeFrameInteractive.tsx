import { withStateHandlers, StateHandlerMap, StateHandler } from "recompose";
import { IDimensions, IPoint, ResizableDirection } from "../../types/domain";
import { FrameResizerService } from "./FrameResizerService";

interface IState {
  startPosition: IPoint | null;
  position: IPoint;
  dimensions: IDimensions;
}

interface IUpdaters extends StateHandlerMap<IState> {
  onResize: StateHandler<IState>;
  onResizeStart: StateHandler<IState>;
}

interface IOuterProps {
  config: {
    position: IPoint;
    dimensions: IDimensions;
  };
}

export const withResizeFrameInteractive = withStateHandlers<
  IState,
  IUpdaters,
  IOuterProps
>(
  ({ config: { position, dimensions } }) => ({
    startPosition: null,
    position,
    dimensions,
  }),
  {
    onResize: ({ startPosition, dimensions }) => (
      nativeEvent: MouseEvent | TouchEvent,
      side: ResizableDirection,
      domElement: HTMLDivElement,
      delta: IDimensions
    ) => {
      if (!startPosition) {
        throw new TypeError("Start Position must be defined");
      }

      const resizer = new FrameResizerService({
        pos: startPosition,
        dimensions,
        side,
        delta,
      });

      return {
        position: {
          x: resizer.getLeftStartPoint(),
          y: resizer.getTopStartPoint(),
        },
        dimensions: {
          width: resizer.getWidth(),
          height: resizer.getHeight(),
        },
      };
    },

    onResizeStart: ({ position }) => (
      nativeEvent: MouseEvent | TouchEvent,
      resizeSide: ResizableDirection,
      domElement: HTMLDivElement,
      delta: IDimensions
    ) => ({
      startPosition: position,
    }),
  }
);
