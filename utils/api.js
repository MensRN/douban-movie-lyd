import mock from './mock';

// will move this to .env file later
const IS_MOCK = true;

const baseURL = x => `https://api.douban.com/v2/${x}`;

export const COLLECTIONS = {
  top: 'movie/top250',
};

const fetchWithMock = type => {
  const KEY = COLLECTIONS[type];
  if (IS_MOCK) {
    const mockResult = mock[KEY];
    if (typeof mockResult === 'undefined') return new Error(`MOCK ${type} not found`);
    return mockResult;
  }

  return fetch(baseURL(KEY)).then(res => res.json());
};

export async function getCollection(type) {
  try {
    return await fetchWithMock(type);
  } catch(err) {
    console.error(err);
  }
}
