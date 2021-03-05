import cheerio from 'cheerio';

import { fromFundsExplorerList, FII } from '../entities/fii';
import { mapCheerio } from '../utils/cheerio';

export const mapFII = (html: string): Array<FII> => {
  const $ = cheerio.load(html);
  const funds = $('#fiis-list-container > div > .item');
  const mapFn = fromFundsExplorerList('https://www.fundsexplorer.com.br/');

  return mapCheerio($, funds, mapFn);
};
