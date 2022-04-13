import Route from '@ember/routing/route';

export default class AuthorRoute extends Route {
  async model() {
    let response = await fetch('http://localhost:3000/authors');
    return await response.json();
  }
}
