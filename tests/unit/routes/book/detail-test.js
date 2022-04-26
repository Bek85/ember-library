import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | book/detail', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:book/detail');
    assert.ok(route);
  });
});
