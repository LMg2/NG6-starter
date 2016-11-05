class NavbarController {
  constructor(state) {
    this.updateTitle(state.current.name);
  }

  updateTitle(state) {
    this.title = '';
    if (state === 'app.about') {
      this.title = 'About';
    }else if (state === 'app.inscription') {
      this.title = 'Inscripción a Campeonato';
    }else if (state === 'app.championships') {
      this.title = 'Próximos Campeonatos';
    }
  }
}

export default ['$state', NavbarController];
