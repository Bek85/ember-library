import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class AuthorCreateController extends Controller {
  @service() router;
  @service() dataService;

  @tracked firstName;
  @tracked lastName;

  @action
  async createAuthor(evt) {
    evt.preventDefault();
    await this.dataService.createAuthor(this.model);
    this.router.transitionTo('author');
  }
}
