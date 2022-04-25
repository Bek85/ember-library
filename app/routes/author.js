import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { Promise as EmberPromise } from 'rsvp';
// import { reject } from 'rsvp';
// import { action } from '@ember/object';

function wait(delay) {
  return new EmberPromise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, delay);
  });
}

export default class AuthorRoute extends Route {
  @service() store;
  queryParams = {
    searchTerm: { as: 'q', refreshModel: true },
  };

  @service dataService;

  async model({ searchTerm }) {
    if (searchTerm) {
      return this.store.query('author', { q: searchTerm });
    }
    return this.store.findAll('author');
    // await wait(1000);
    // return this.dataService.getAuthors(searchTerm);
  }

  // @action
  // loading() {
  //   return false;
  // }

  setupController(controller, model) {
    super.setupController(...arguments);
    controller.loadData();
  }

  // model() {
  //   return reject(this.dataService.getAuthors());
  // }
}
