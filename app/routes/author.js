import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class AuthorRoute extends Route {
  @service() store;
  queryParams = {
    searchTerm: { as: 'q', refreshModel: true },
  };

  @service dataService;

  async model({ searchTerm }) {
    if (searchTerm) {
      return await this.store.query('author', {
        q: searchTerm,
      });
    }
    return await this.store.findAll('author');
  }
}
