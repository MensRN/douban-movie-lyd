import mock from './mock';

// will move this to .env file later
const IS_MOCK = true;

const baseURL = x => `https://api.douban.com/v2/${x}`;

export const URLS = {
  top: 'movie/top250',
  detail: 'movie/subject/:id',
};

const fetchURL = key => fetch(baseURL(key)).then(res => res.json());

// for translate /xxx/asdf/:id => /xxx/asdfas/params.id
export const transURL = (str, data) => {
  const matchs = str.match(/\/:\w+/gi);
  if (!matchs) return str;

  return matchs.reduce((pre, x) => {
    const key = x.match(/\w+/);
    const param = data[key]
    if (param === undefined) return new Error(`${key} not found`);

    return pre.replace(new RegExp(x), `/${param}`);
  }, str);
};

const fetchWithMock = (type, params) => {
  const KEY = URLS[type];
  if (IS_MOCK) {
    const mockResult = mock[KEY];
    if (typeof mockResult === 'undefined') return new Error(`MOCK ${type} not found`);
    return mockResult;
  }

  return fetchURL(transUrl(KEY, params));
};

const invokeAPI = async (...params) => {
  try {
    return await fetchWithMock.apply(null, params);
  } catch(err) {
    console.error(err);
  }
};

export const getCollection = () => invokeAPI('top');
export const getDetail = id => invokeAPI('detail', { id });
