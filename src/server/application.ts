import bodyParser from 'body-parser';

import { Application } from 'express';
import { HOST, PORT } from '../config';

export const configureApp = (app: Application): Application => {
  app.use(bodyParser.json());
  return app;
};

export const initApp = (app: Application): Application => {
  app.listen(PORT, HOST, () => {
    console.log(`Server listen on //${HOST}:${PORT}`);
  });

  return app;
};
