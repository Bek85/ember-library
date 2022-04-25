import JSONSerializer from '@ember-data/serializer/json';

export default class ApplicationSerializer extends JSONSerializer {
  extractRelationship(relationshipModelName, relationshipHash) {
    let hash = relationshipHash.id ? relationshipHash.id : relationshipHash;
    return super.extractRelationship.call(this, relationshipModelName, hash);
    // return super.extractRelationship(...arguments);
  }
}
