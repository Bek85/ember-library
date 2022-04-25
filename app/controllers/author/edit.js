import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AuthorEditController extends Controller {
  @service() router;
  @service() dataService;

  @action
  async editAuthor(author) {
    await this.dataService.editAuthor(author);
    this.router.transitionTo('author.detail', this.model.id);
  }

  initData() {
    this.firstName = this.model.firstName;
    this.lastName = this.model.lastName;
  }
}
