import Route from '@ember/routing/route';

export default class AuthorCreateRoute extends Route {
  model() {
    return {
      firstName: '',
      lastName: '',
    };
  }

  setupController(controller, model) {
    super.setupController(...arguments);
  }
}
