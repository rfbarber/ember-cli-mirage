import { test } from 'qunit';
import moduleForAcceptance from '../helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | providers locations schedules');

test('create providers with no schedules and locations', function(assert) {
  let providers = server.createList('provider', 10);

  assert.equal(providers.length, 10, 'there are 10 providers');
});

test('create provider with schedules and locations', function(assert) {
  let schedule = server.create('schedule');

  server.create('location', { schedules: [ schedule ] });
  let provider = server.create('provider', { schedules: [ schedule ] });

  assert.equal(provider.scheduleIds.length, 1, 'provider should have one schedule');
});

test('create providers with no schedules and locations', function(assert) {
  let providers = server.createList('provider', 10);

  assert.equal(providers.length, 10, 'there are 10 providers');
});
