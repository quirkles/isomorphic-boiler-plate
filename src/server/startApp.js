/* globals process*/
import logger from './logger';
import config from './config';

const { port, projectName } = config;
const startApplication = app => {
  const displayName = projectName
    .split('-')
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ');

  app.listen(port, () => {
    logger.info(`${displayName} listening on port ${port}`);
    if (process.env.APP_ENV === 'development') {
      logger.info(`Please visit: http://localhost:${port}`);
    }
  });
};

export default startApplication;
