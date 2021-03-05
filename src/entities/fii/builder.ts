import { FII } from './types';

export const fromFundsExplorerList = (domain:string) => ($el:Cheerio):FII => {
    const namespace = $el.find('a');

    return {
        name: namespace.find('.name-wrapper').text().trim(),
        symbol: namespace.find('.symbol').text(),
        url: namespace.attr('href'),
        domain,
    }
}