import Service from '@ember/service';
import ENV from 'ember-library/config/environment';

export default class DataServiceService extends Service {
  baseUrl = ENV.backEndUrl;

  async createAuthor(author) {
    return await fetch(`${this.baseUrl}/authors`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(author),
    });
  }

  async deleteAuthor(id) {
    return await fetch(`${this.baseUrl}/authors/${id}`, {
      method: 'DELETE',
    });
  }

  async editAuthor(author) {
    console.log(author.id);
    return await fetch(`${this.baseUrl}/authors/${author.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(author),
    });
  }

  async getAuthors(searchTerm) {
    let query = searchTerm ? `?q=${searchTerm}` : '';
    let response = await fetch(`${this.baseUrl}/authors${query}`);
    return await response.json();
  }

  async getAuthor(id) {
    let response = await fetch(`${this.baseUrl}/authors/${id}`);
    return await response.json();
  }
}
