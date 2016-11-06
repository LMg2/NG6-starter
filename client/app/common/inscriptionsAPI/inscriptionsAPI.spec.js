import InscriptionsAPIModule from './inscriptionsAPI';
import InscriptionsAPIFactory from './inscriptionsAPI.factory';

describe('InscriptionsAPI', () => {
  let $rootScope, makeFactory;

  beforeEach(window.module(InscriptionsAPIModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeFactory = () => {
      return new InscriptionsAPIFactory();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Factory', () => {
    // factory specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the factory
      let factory = makeFactory();
      expect(factory).to.have.property('name');
    });
  });

});
