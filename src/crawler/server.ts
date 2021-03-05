import { launch, Browser, Page, Response } from 'puppeteer';

export const openNewPage = (browser: Browser): Promise<Page> => browser.newPage();
export const gotToUrl = (url: string) => (page: Page) => page.goto(url);
export const getContent = (response: Response | null): Promise<string | null> =>
  response ? response.text() : Promise.resolve(null);

export const loadPageHTML = (url: string): Promise<any> => {
  return launch()
    .then(openNewPage)
    .then(gotToUrl(url))
    .then(getContent);
};
