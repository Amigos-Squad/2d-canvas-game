import { Express } from 'express';

interface Options {
  server: Express;
}

const { PORT = 3000 } = process.env;

const APP_HOSTS: string[] = ['localhost'];

export function startApp({ server }: Options) {
  server.listen(PORT, () => {
    // eslint-disable-next-line
    console.log(`Server started on http://${APP_HOSTS[0]}:${PORT}`);
  });
}
