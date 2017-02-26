import * as api from '../../utils/api';

it('#getCollection', async () => {
  const movies = await api.getCollection("top");
  expect(movies.count).toEqual(20);
});

it('#transURL', () => {
  expect(api.transURL('asdfasdf')).toEqual('asdfasdf');
  expect(api.transURL('asdfa/:id', { id: 1 })).toEqual('asdfa/1');
  expect(api.transURL('asdfa/:id/asdf/:m', { id: 1, m: 2 })).toEqual('asdfa/1/asdf/2');
});
