import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | author/create', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:author/create');
    assert.ok(route);
  });
});
