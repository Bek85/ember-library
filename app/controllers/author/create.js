import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class AuthorCreateController extends Controller {
  @service() router;
  @service() store;
  @service() dataService;

  @tracked firstName;
  @tracked lastName;

  @action
  async createAuthor(author) {
    await this.dataService.createAuthor(author);
    // let newAuthor = this.store.createRecord('author', author);
    // await newAuthor.save();
    this.router.transitionTo('author');
  }
}
