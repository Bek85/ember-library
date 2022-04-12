import Route from '@ember/routing/route';

export default class AuthorRoute extends Route {
  model() {
    return [
      { firstName: 'Alex', lastName: 'Smith' },
      { firstName: 'Ben', lastName: 'Jackson' },
    ];
  }
}
