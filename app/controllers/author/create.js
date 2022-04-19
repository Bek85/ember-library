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
    await this.dataService.createAuthor({
      firstName: this.model.firstName,
      lastName: this.model.lastName,
    });
    this.router.transitionTo('author');
  }

  // @action
  // changeFirstName() {
  //   this.model.firstName = this.firstName;
  // }

  // @action
  // changeLastName() {
  //   this.model.lastName = this.lastName;
  // }
}
