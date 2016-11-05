class NavbarController {
  constructor(state) {
    this.updateTitle(state.current.name);
  }

  updateTitle(state) {
    this.title = '';
    if (state === 'app.about') {
      this.title = 'About';
    }else if (state === 'app.inscription') {
      this.title = 'Inscripción a Campeonatos';
    }
  }
}

export default ['$state', NavbarController];
