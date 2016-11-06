class InscriptionsController {
  constructor($state, $stateParams, championshipsFactory) {
    this.championships = championshipsFactory.get($stateParams.championshipId);
    if (this.championships === undefined) {
      //rechaza inscribirse a campeonatos inexistentes
      $state.go('app.championships');
    }
  }
}

export default ['$state', '$stateParams', 'championshipsFactory', InscriptionsController];
