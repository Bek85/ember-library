import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from 'ember-library/config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = ENV.backEndUrl;
}
