import axios from 'axios';

class Users {
  all() {
    return axios
      .get(`http://jsonplaceholder.typicode.com/users`)
      .then(resp => resp.data);
  }
}

export default Users;
