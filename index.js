import express from 'express';
import { infoLogger } from './logger/logger';
import initializeRoutes from './startup/routes';
import initializeDatabase from './startup/db';
import initializeLogging from './startup/logging';
import initializeConfig from './startup/config';

const app = express();

initializeLogging();
initializeRoutes(app);
initializeDatabase();
initializeConfig();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  infoLogger.info(`App is listening at ${PORT}`);
});
