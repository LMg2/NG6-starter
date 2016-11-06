class InscriptionsController {
  constructor($scope, $state, $stateParams, $mdToast, championshipsFactory, inscriptionsAPI) {
    this.scope = $scope;
    this.mdToast = $mdToast;
    this.championship = championshipsFactory.get($stateParams.championshipId);
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
    this.resetForm();

    //rechaza inscribirse a campeonatos inexistentes
    if (this.championship === undefined) {
      $state.go('app.championships');
    }


    //inscriptionsAPI.query(data => console.log(data));
  }

  resetForm() {
    this.form = {};
    this.form.championship = this.championship.name;
    if (this.scope.inscription) {
      this.scope.inscription.$setPristine();
      this.scope.inscription.$setUntouched();
    }
  }

  save() {
    if (!this.scope.inscription.$invalid) {
      /*const toast = this.mdToast.simple()
        .textContent('La relación Clase de barco - Numero de vela ya existe para el campeonato seleccionado.')
        .capsule(true)
        .toastClass('error-toast');*/
      const toast = {
      	template: `<md-toast class="md-capsule">
      	  <div class="md-toast-content">
      	    <i class="material-icons">report_problem</i> 
      	    <span>La relación Clase de barco - Numero de vela ya existe para el campeonato seleccionado.</span>
      	  </div>
		</md-toast>`,
		toastClass: 'error-toast'
      }
      this.mdToast.show(toast);
    };
  }
}

export default ['$scope', '$state', '$stateParams', '$mdToast', 'championshipsFactory', 'inscriptionsAPI', InscriptionsController];
