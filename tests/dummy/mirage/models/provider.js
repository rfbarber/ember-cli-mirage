import { hasMany, Model } from 'ember-cli-mirage';

export default Model.extend({
  schedules: hasMany()
});
