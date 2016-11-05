import ChampionshipsModule from './championships'
import ChampionshipsController from './championships.controller';
import ChampionshipsComponent from './championships.component';
import ChampionshipsTemplate from './championships.html';

describe('Championships', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ChampionshipsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ChampionshipsController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(ChampionshipsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = ChampionshipsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(ChampionshipsTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(ChampionshipsController);
      });
  });
});
