import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AuthorEditController extends Controller {
  @service() router;
  @service() dataService;

  @action
  async saveAuthor(evt) {
    evt.preventDefault();
    await this.dataService.editAuthor(this.model);
    this.router.transitionTo('author.detail', this.model.id);
  }

  @action
  changeFirstName(evt) {
    this.model.firstName = evt.target.value;
  }

  @action
  changeLastName(evt) {
    this.model.lastName = evt.target.value;
  }
}
