import React from 'react';
import { resolve } from 'path';
import { renderToString } from 'react-dom/server';
import { createMemoryHistory } from 'history';
import { Response, Request } from 'express';
import { ChunkExtractor } from '@loadable/server';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { StaticRouter, StaticRouterContext } from 'react-router';
import { getInitialState } from '@/redux';
import { App } from '@/pages';

export const serverRenderMiddleware = (req: Request, res: Response) => {
  const statsFile = resolve('dist/loadable-stats.json');
  const extractor = new ChunkExtractor({ statsFile });
  const history = createMemoryHistory({ initialEntries: ['/'] });

  const store = configureStore({
    reducer: getInitialState(history),
    preloadedState: {},
  });

  const location = req.url;
  const context: StaticRouterContext = {};

  const jsx = extractor.collectChunks(
    <Provider store={store}>
      <StaticRouter context={context} location={location}>
        <App />
      </StaticRouter>
    </Provider>
  );

  const reactHtml = renderToString(jsx);
  console.log(extractor.getScriptTags());
  res
    .set('content-type', 'text/html')
    .status(200)
    .send(getHtml(reactHtml, extractor, store.getState()));
};

function getHtml(
  reactHtml: string,
  extractor: ChunkExtractor,
  reduxState = {}
) {
  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>2d-canvas-game</title>
          ${extractor.getLinkTags()}
          ${extractor.getStyleTags()}
      </head>
      <body>
          <div id="root">${reactHtml}</div>
          <script>
              window.__PRELOADED_STATE__ = ${JSON.stringify(reduxState)}
          </script>
          ${extractor.getScriptTags()}
      </body>
      </html>
  `;
}
