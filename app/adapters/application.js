import JSONAPIAdapter from '@ember-data/adapter/json-api';
import config from 'ember-library/config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = config.APP.backEndUrl;
}
