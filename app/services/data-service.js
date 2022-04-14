import Service from '@ember/service';
import ENV from 'book-app/config/environment';

export default class DataServiceService extends Service {
  async getAuthors() {
    let response = await fetch(`${ENV.backEndUrl}/authors`);
    return await response.json();
  }
}
