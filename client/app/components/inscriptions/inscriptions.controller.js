class InscriptionsController {
  constructor($scope, $state, $stateParams, $mdToast, championshipsFactory, inscriptionsAPI) {
    this.scope = $scope;
    this.mdToast = $mdToast;
    this.championship = championshipsFactory.get($stateParams.championshipId) || {};
    this.boatClasses = [{
      name: 'Laser',
      crew: 1
    }, {
      name: 'Optimist',
      crew: 1
    }, {
      name: '29er',
      crew: 2
    }]

    this.validateChampionship($state);
    this.resetForm();

    //inscriptionsAPI.query(data => console.log(data));
  }

  validateChampionship($state) {
    if (this.championship.id === undefined) {
      //rechaza inscribirse a campeonatos inexistentes
      this.errorToast('El campeonato no existe.');
      $state.go('app.championships');
    } else if (!this.championship.enabled) {
      //rechaza inscribirse a campeonatos no habilitados
      this.errorToast('Aún no está habilitada la inscripción a este campeonato.');
      $state.go('app.championships');
    }
  }

  resetForm() {
    this.form = {};
    this.form.championship = this.championship.name;
    if (this.scope.inscription) {
      this.scope.inscription.$setPristine();
      this.scope.inscription.$setUntouched();
    }
  }

  errorToast(text) {
    const toast = {
      template: `<md-toast class="md-capsule">
          <div class="md-toast-content">
            <i class="material-icons">report_problem</i> 
            <span>${text}</span>
          </div>
        </md-toast>`,
      toastClass: 'error-toast'
    }
    this.mdToast.show(toast);
  }
  save() {
    if (!this.scope.inscription.$invalid) {
      this.errorToast('La relación Clase de barco - Numero de vela ya existe para el campeonato seleccionado.');
    };
  }
}

export default ['$scope', '$state', '$stateParams', '$mdToast', 'championshipsFactory', 'inscriptionsAPI', InscriptionsController];
