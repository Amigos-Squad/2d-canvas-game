import React from 'react';
import { resolve } from 'path';
import { renderToStaticMarkup } from 'react-dom/server';
import { createMemoryHistory } from 'history';
import { Response, Request } from 'express';
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { StaticRouter, StaticRouterContext } from 'react-router';
import { getInitialState } from '@/redux';
import { App } from '@/pages';

export const serverRenderMiddleware = (req: Request, res: Response) => {
  const statsFile = resolve('dist/loadable-stats.json');
  const extractor = new ChunkExtractor({ statsFile });
  const history = createMemoryHistory();

  const store = configureStore({
    reducer: getInitialState(history),
    preloadedState: {},
  });

  const location = req.url;
  const context: StaticRouterContext = {};

  const jsx = (
    <ChunkExtractorManager extractor={extractor}>
      <Provider store={store}>
        <StaticRouter context={context} location={location}>
          <App />
        </StaticRouter>
      </Provider>
    </ChunkExtractorManager>
  );

  if (context.url) {
    res.redirect(context.url);
    return;
  }

  const reactHtml = getHtml(
    renderToStaticMarkup(jsx),
    store.getState(),
    extractor
  );

  res.status(context.statusCode || 200).send(`<!doctype html>${reactHtml}`);
};

function getHtml(
  reactHtml: string,
  reduxState = {},
  extractor: ChunkExtractor
) {
  return /* html */ `
      <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>2d-canvas-game</title>
            <link rel="icon" type="image/png" href="/favicon.png"/>
            <link href="/index.css" rel="stylesheet">
        </head>
        <body>
            <div id="root">${reactHtml}</div>
            <script id="redux__temp_data">
                window.__PRELOADED_STATE__ = ${JSON.stringify({
                  ...reduxState,
                })};
                document.body.removeChild(document.getElementById("redux__temp_data"))
            </script>
            <script src="/index.js"></script>
        </body>
      </html>
  `;
}
