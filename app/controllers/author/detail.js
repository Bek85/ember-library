import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AuthorDetailController extends Controller {
  @service() dataService;
  @service() router;

  @action
  deleteAuthor(id) {
    this.dataService.deleteAuthor(id);
    this.router.transitionTo('author');
  }
}
