const DEFAULT_LANG = 'en';

export enum EnvironmentTypes {
  Production = 'Production',
  Staging = 'Staging',
  Development = 'Development',
}

export const sharedEnvironment = {
  defaultLanguage: DEFAULT_LANG,
  supportedLanguages: [DEFAULT_LANG, 'ar'],
  configAppName: 'WebApp',
};
