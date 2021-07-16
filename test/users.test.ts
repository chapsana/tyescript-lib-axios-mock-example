// import axios from 'axios';
import Users from '../src/users';
import users from './users.json';

// jest.mock('axios');
// const mockedAxios = axios as jest.Mocked<typeof axios>;

// test('should fetch users', () => {
//   const resp = { data: users };
//   mockedAxios.get.mockResolvedValue(resp);
//   const user = new Users();

//   return user.all().then(data => expect(data).toEqual(users));
// });

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('user', () => {
  // This sets the mock adapter on the default instance
  const mock = new MockAdapter(axios);

  // Mock any GET request to /users
  // arguments for reply are (status, data, headers)
  mock.onGet('http://jsonplaceholder.typicode.com/users').reply(200, users);

  it('should fetch users', () => {
    const user = new Users();
    return user.all().then(data => expect(data).toEqual(users));
  });
});
