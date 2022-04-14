import Service from '@ember/service';
// import ENV from 'book-app/config/environment';
import { getOwner } from '@ember/application';

export default class DataServiceService extends Service {
  async getAuthors() {
    let url = getOwner(this).application;
    let response = await fetch(`${url.backEndUrl}/authors`);
    return await response.json();
  }

  async getAuthor(id) {
    let url = getOwner(this).application;
    let response = await fetch(`${url.backEndUrl}/authors/${id}`);
    return await response.json();
  }
}
