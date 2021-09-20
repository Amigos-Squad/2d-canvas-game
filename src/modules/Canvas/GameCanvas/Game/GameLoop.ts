import { Game } from './Game';
import { drawMap } from './Map/Map';

const resizeCanvasToDisplaySize = (canvas: HTMLCanvasElement) => {
  const { width, height } = canvas.getBoundingClientRect();

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
    return true;
  }

  return false;
};

const predraw = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
  ctx.save();
  resizeCanvasToDisplaySize(canvas);
  const { width, height } = ctx.canvas;
  ctx.clearRect(0, 0, width, height);
};

const postdraw = (ctx: CanvasRenderingContext2D) => {
  ctx.restore();
};

export const draw = (
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  game: Game
) => {
  predraw(ctx, canvas);

  drawMap(ctx, game.map);

  postdraw(ctx);
};
