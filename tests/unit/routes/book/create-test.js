import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | book/create', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:book/create');
    assert.ok(route);
  });
});
