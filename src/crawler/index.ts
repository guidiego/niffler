import * as config from '../config';

import { loadPageHTML } from './server';
import { mapFII } from './mappers';

export const collectFIIData = () => {
  return loadPageHTML(config.FII_COLLECTOR_URI).then(mapFII);
};
