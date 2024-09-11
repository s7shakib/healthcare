// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://c73b93c999991b21aacf50fb9bd20b07@o4507896424366080.ingest.us.sentry.io/4507896427970560",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
