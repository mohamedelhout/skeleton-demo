import { EnvironmentTypes, sharedEnvironment } from './environment.shared';

export const environment = {
  ...sharedEnvironment,
  production: false,
  environment: EnvironmentTypes.Development,
  hostUrl: 'http://localhost:4200/',
  serverUrl: 'https//localhost.com/',
};
