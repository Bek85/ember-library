import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { Promise as EmberPromise } from 'rsvp';
import { reject } from 'rsvp';

function wait(delay) {
  return new EmberPromise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, delay);
  });
}

export default class AuthorRoute extends Route {
  @service dataService;

  async model() {
    await wait(2000);
    return this.dataService.getAuthors();
  }

  // model() {
  //   return reject(this.dataService.getAuthors());
  // }
}
