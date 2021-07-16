import axios from 'axios';

export class Selcom {
  async sendOne() {
    const res = await axios.get('https://httpbin.org/get');
    return res.data;
  }
}
