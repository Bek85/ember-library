import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AuthorEditRoute extends Route {
  @service() dataService;
  model({ id }) {
    return this.dataService.getAuthor(id);
  }
}
