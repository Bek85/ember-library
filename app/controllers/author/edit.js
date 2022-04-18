import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AuthorEditController extends Controller {
  @action
  saveAuthor(evt) {
    evt.preventDefault();
    console.log('Saving author');
  }

  @action
  changeFirstName() {
    console.log('Changing first name');
  }
}
