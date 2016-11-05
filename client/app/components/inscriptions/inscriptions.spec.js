import InscriptionsModule from './inscriptions'
import InscriptionsController from './inscriptions.controller';
import InscriptionsComponent from './inscriptions.component';
import InscriptionsTemplate from './inscriptions.html';

describe('Inscriptions', () => {
  let $rootScope, makeController;

  beforeEach(window.module(InscriptionsModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new InscriptionsController();
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
      expect(InscriptionsTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = InscriptionsComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(InscriptionsTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(InscriptionsController);
      });
  });
});
