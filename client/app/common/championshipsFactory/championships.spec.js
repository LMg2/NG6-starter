import ChampionshipsModule from './championships';
import ChampionshipsFactory from './championships.factory';

describe('Championships', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ChampionshipsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeFactory = () => {
      return ChampionshipsFactory();
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
