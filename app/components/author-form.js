import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AuthorFormComponent extends Component {
  @tracked firstName = this.args.author.firstName;
  @tracked lastName = this.args.author.lastName;
  @action
  submitChanges(evt) {
    evt.preventDefault();
    this.args.saveAuthor(this.args.author);
  }
}
