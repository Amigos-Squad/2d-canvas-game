import React from 'react';
import { renderToString } from 'react-dom/server';
import { Response, Request } from 'express';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { StaticRouter, StaticRouterContext } from 'react-router';
import { getInitialState } from '@/redux';

export const serverRenderMiddleware = (req: Request, res: Response) => {
  const store = configureStore({
    reducer: getInitialState(),
  });

  const location = req.url;
  const context: StaticRouterContext = {};

  const jsx = (
    <Provider store={store}>
      <StaticRouter context={context} location={location}>
        <div>12</div>
      </StaticRouter>
    </Provider>
  );
  const reactHtml = renderToString(jsx);

  res.status(200).send(getHtml(reactHtml));
};

function getHtml(reactHtml: string, reduxState = {}) {
  return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="google-site-verification" content="nLL5VlSAgcKL756luG6o6UwKcvR8miU2duRnhU-agmE" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <link rel="shortcut icon" type="image/png" href="/images/favicon.png">
          <title>Sneakers shop</title>
          <link href="/index.css" rel="stylesheet">
      </head>
      <body>
          <div id="root">${reactHtml}</div>
          <script>
              window.__INITIAL_STATE__ = ${JSON.stringify(reduxState)}
          </script>
          <script src="/index.js"></script>
      </body>
      </html>
  `;
}
