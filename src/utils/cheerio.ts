import cheerio from 'cheerio';

export const mapCheerio = ($: CheerioStatic, items: Cheerio, mapFn: any) => {
  const mappedItems = [];

  for (let x = 0; x < items.length; x++) {
    const f = $(items[x]);
    mappedItems.push(mapFn(f as Cheerio));
  }

  return mappedItems;
};
