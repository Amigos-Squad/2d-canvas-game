import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

function getPageHtml(content: string) {
  const html = renderToStaticMarkup(
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>SSR</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/index.js" />
      </body>
    </html>
  );

  return `<!doctype html>${html}`;
}

export const renderHTML = () => {
  return getPageHtml('12');
};
