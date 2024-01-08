import { config, passport } from "@imtbl/sdk";

export const passportInstance = new passport.Passport({
    baseConfig: {
      environment: config.Environment.SANDBOX,
    },
    clientId: 'fhbzhDsY4eyqtSf9cHM5BzpijqS0mGME',
    redirectUri: 'http://localhost:3000/callback',
    logoutRedirectUri: 'http://localhost:3000/logout',
    scope: 'openid offline_access email transact',
  });