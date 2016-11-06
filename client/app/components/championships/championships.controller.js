class ChampionshipsController {
  constructor(state, championshipsFactory) {
    this.state = state;
    this.championships = championshipsFactory.getAll();
  }

  signTo(championship) {
    this.state.go('app.inscription', { championshipId: championship.id });
  }
}

export default ['$state', 'championshipsFactory', ChampionshipsController];
