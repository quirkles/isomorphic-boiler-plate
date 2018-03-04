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
  });
};

export default startApplication;
