import * as api from '../../utils/api';

it('api #getCollection', async () => {
  const movies = await api.getCollection("top");
  expect(movies.count).toEqual(20);
});
