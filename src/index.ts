import axios from 'axios';

export class Selcom {
  constructor() {}

  async sendOne() {
    const res = await axios.get('https://httpbin.org/get');
    return res.data;
  }
}
