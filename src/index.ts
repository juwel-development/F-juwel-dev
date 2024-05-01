import '@fontsource/roboto';
import 'reflect-metadata';

import { initializeApp } from 'firebase/app';
import { Bootstrap } from 'Presentation/Bootstrap';

void Bootstrap.init();

initializeApp({
  apiKey: ENV?.API_KEY,
  databaseURL: ENV?.DATABASE_URL,
  projectId: ENV?.PROJECT_ID,
});
