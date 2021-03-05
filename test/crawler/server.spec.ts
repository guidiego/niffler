import { Browser, Page, Response } from 'puppeteer';
import { openNewPage, getContent, gotToUrl } from '../../src/crawler/server';

describe('crawler server', () => {
  const fakeResponse = { text: jest.fn() };
  const fakePage = { goto: jest.fn() };
  const fakeBrowser = { newPage: jest.fn() };

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should open page correctly', () => {
    const testData = (fakeBrowser as unknown) as Browser;
    const page = (fakePage as unknown) as Page;
    const mockedData = testData as jest.Mocked<Browser>;

    mockedData.newPage.mockReturnValue(Promise.resolve(page));

    return openNewPage(testData).then(value => {
      expect(value).toBe(fakePage);
      expect(fakeBrowser.newPage).toHaveBeenCalled();
    });
  });

  it('should go to url', () => {
    const fakeUrl = 'fizz';
    const fakeResp = (fakeResponse as unknown) as Response;
    const testData = (fakePage as unknown) as Page;
    const mockedData = testData as jest.Mocked<Page>;

    mockedData.goto.mockReturnValue(Promise.resolve(fakeResp));
    return gotToUrl(fakeUrl)(testData).then(response => {
      expect(response).toBe(fakeResponse);
      expect(fakePage.goto).toHaveBeenCalledWith(fakeUrl);
    });
  });

  it('should get content', () => {
    const fakeText = 'fuzz';
    const testData = (fakeResponse as unknown) as Response;
    const mockedData = testData as jest.Mocked<Response>;

    mockedData.text.mockReturnValue(Promise.resolve(fakeText));
    return getContent(testData).then(text => {
      expect(text).toBe(fakeText);
    });
  });
});
