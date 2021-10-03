import { MutableRefObject } from 'react';

export type Props = {
  canvasRef: MutableRefObject<null | HTMLCanvasElement>;
  onClick: (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => void;
};
