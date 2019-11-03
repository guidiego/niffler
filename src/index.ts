import express from 'express';
import pipeline from './utils/pipeline';

import { configureApp, initApp } from './server';
import { collectFIIData } from './crawler';

const app = express();

pipeline(app, [
    configureApp,
    initApp,
]);