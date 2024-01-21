import { EnvironmentTypes, sharedEnvironment } from './environment.shared';

export const environment = {
  ...sharedEnvironment,
  production: false,
  environment: EnvironmentTypes.Staging,
  hostUrl: 'http://localhost:4200/',
  serverUrl: 'https//localhost.com/',
};
