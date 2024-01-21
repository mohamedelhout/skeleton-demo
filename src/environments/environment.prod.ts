import { EnvironmentTypes, sharedEnvironment } from './environment.shared';

export const environment = {
  ...sharedEnvironment,
  production: true,
  environment: EnvironmentTypes.Production,
  hostUrl: 'http://localhost:4200/',
  serverUrl: 'https//localhost.com/',
};
